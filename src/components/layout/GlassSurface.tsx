/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect, useState, useRef, useId } from 'react';
import './GlassSurface.css';

interface GlassSurfaceProps {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  xChannel?: 'R' | 'G' | 'B';
  yChannel?: 'R' | 'G' | 'B';
  mixBlendMode?: 'difference' | 'screen' | string;
  className?: string;
  style?: React.CSSProperties;
  enabled?: boolean;
}

const GlassSurface = ({
  children,
  width = '100%',
  height = '100%',
  borderRadius = 50,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 1.00,
  blur = 20,
  displace = 2.5,
  backgroundOpacity = 0.5,
  saturation = 1,
  distortionScale = -100,
  xChannel = 'R',
  yChannel = 'B',
  mixBlendMode = 'difference',
  className = '',
  style = {},
  enabled = true
}: GlassSurfaceProps) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = `glass-filter-${uniqueId}`;
  const redGradId = `red-grad-${uniqueId}`;
  const blueGradId = `blue-grad-${uniqueId}`;

  const [svgSupported, setSvgSupported] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const displacementMapRef = useRef<SVGFEDisplacementMapElement>(null);
  const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);
  // Last data-URI pushed to <feImage>, so we can skip redundant (and costly)
  // re-rasterizations when neither the rounded size nor the params changed.
  const lastMapUriRef = useRef<string>('');

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    // Round to whole pixels: sub-pixel jitter during the width transition would
    // otherwise churn the map even though the rasterized result is identical.
    const actualWidth = Math.round(rect?.width || 400);
    const actualHeight = Math.round(rect?.height || 200);
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;

    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  };

  const updateDisplacementMap = () => {
    if (!feImageRef.current) return;
    const uri = generateDisplacementMap();
    // Skip the DOM write (and the browser's re-decode/re-raster of the map) when
    // nothing relevant changed — the common case during scroll and transitions.
    if (uri === lastMapUriRef.current) return;
    lastMapUriRef.current = uri;
    feImageRef.current.setAttribute('href', uri);
  };

  // Sync parameters to filter components
  useEffect(() => {
    if (!enabled || !svgSupported) return;

    updateDisplacementMap();

    if (displacementMapRef.current) {
      displacementMapRef.current.setAttribute('scale', distortionScale.toString());
      displacementMapRef.current.setAttribute('xChannelSelector', xChannel);
      displacementMapRef.current.setAttribute('yChannelSelector', yChannel);
    }

    gaussianBlurRef.current?.setAttribute('stdDeviation', displace.toString());
  }, [
    enabled,
    svgSupported,
    borderRadius,
    borderWidth,
    brightness,
    opacity,
    blur,
    displace,
    distortionScale,
    xChannel,
    yChannel,
    mixBlendMode
  ]);

  // Consolidated and debounced Resize Observer
  useEffect(() => {
    if (!enabled || !svgSupported || !containerRef.current) return;

    let timeoutId: NodeJS.Timeout;

    // Initial positioning
    updateDisplacementMap();

    const resizeObserver = new ResizeObserver(() => {
      // Debounce updates by 100ms to avoid re-rendering and layout thrashing during transitions
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDisplacementMap, 100);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [enabled, svgSupported, width, height]);

  useEffect(() => {
    setSvgSupported(supportsSVGFilters());
  }, []);

  const supportsSVGFilters = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return false;
    }

    const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);

    if (isWebkit || isFirefox) {
      return false;
    }

    // Per-frame backdrop displacement is the expensive path. Skip it where it
    // costs the most or shouldn't run, and let CSS fall back to a cheap blur:
    //  - coarse pointers (phones/tablets) where mobile GPUs choke on it
    //  - users who asked to reduce motion
    const mm = window.matchMedia;
    if (mm && (mm('(pointer: coarse)').matches || mm('(prefers-reduced-motion: reduce)').matches)) {
      return false;
    }

    const div = document.createElement('div');
    div.style.backdropFilter = `url(#${filterId})`;

    return div.style.backdropFilter !== '';
  };

  const containerStyle = {
    ...style,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: `${borderRadius}px`,
    ...(enabled ? {
      '--glass-frost': backgroundOpacity,
      '--glass-saturation': saturation,
      '--filter-id': `url(#${filterId})`
    } : {})
  } as React.CSSProperties & Record<string, string | number>;

  const activeClass = enabled
    ? (svgSupported ? 'glass-surface--svg' : 'glass-surface--fallback')
    : '';

  return (
    <div
      ref={containerRef}
      className={`glass-surface ${activeClass} ${className}`}
      style={containerStyle}
    >
      {svgSupported && (
        <svg className="glass-surface__filter" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
              <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

              <feDisplacementMap ref={displacementMapRef} in="SourceGraphic" in2="map" id="displacement" result="output" />

              <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
            </filter>
          </defs>
        </svg>
      )}

      <div className="glass-surface__content">{children}</div>
    </div>
  );
};

export default GlassSurface;
