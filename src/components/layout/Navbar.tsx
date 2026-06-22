"use client";

import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import GlassSurface from "./GlassSurface";

// useLayoutEffect on the client (measure before paint), useEffect on the server.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const navLinks = [
  { label: "Services", href: "/services", num: "01" },
  { label: "Products", href: "/products", num: "02" },
  { label: "Who Owns AI", href: "/who-owns-ai", num: "03" },
  { label: "About", href: "/about", num: "04" },
  { label: "Blog", href: "/blogs", num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  // Hamburger layout: on phones, or when the full nav can't fit even at mx-4.
  const [compact, setCompact] = useState(false);
  // Whether the full nav still fits while the bar is morphed in (large scrolled
  // margins). If not, we keep the bar wide (mx-4) instead of narrowing it.
  const [fitsAtMorph, setFitsAtMorph] = useState(true);
  const pathname = usePathname();
  const lenis = useLenis();

  const headerRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const fullNavRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const requiredWidthRef = useRef(0);
  const barChromeRef = useRef(0); // bar padding + border (the non-content width)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Decide the layout from the VIEWPORT width (not the current bar width) so the
  // margin/size changes we make below can't feed back and cause oscillation:
  //  - phone, or can't fit even at mx-4  -> hamburger (compact)
  //  - fits at mx-4 but not at the morph margins -> keep bar wide (mx-4)
  //  - otherwise -> full nav + the normal scroll morph
  useIsomorphicLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Scrolled horizontal margin (px per side) — mirrors the header's
    // `mx-4 md:mx-32 lg:mx-64` classes (Tailwind md=768, lg=1024).
    const morphMargin = (vw: number) => (vw >= 1024 ? 256 : vw >= 768 ? 128 : 16);

    const measure = () => {
      const nav = fullNavRef.current;
      const logo = logoRef.current;
      const header = headerRef.current;
      // Only (re)measure while the full nav is laid out; once collapsed it's
      // display:none (offsetWidth 0), so we reuse the last measured values.
      if (nav && logo && header && nav.offsetWidth > 0) {
        // logo + links/CTA + the 12px row gap (+4px so we switch just *before*
        // an actual overlap, never while there's still room to fit everything).
        requiredWidthRef.current = logo.offsetWidth + nav.scrollWidth + 16;
        // Bar chrome = everything between the header edge and the content row
        // (px padding, inner content padding, border). Constant across modes.
        barChromeRef.current = header.offsetWidth - bar.clientWidth;
      }

      // A phone always gets the hamburger (covers a large phone in landscape
      // that might otherwise be wide enough to fit).
      const isPhone =
        window.matchMedia("(pointer: coarse)").matches &&
        Math.min(window.screen.width, window.screen.height) <= 480;

      const required = requiredWidthRef.current;
      if (required > 0) {
        const vw = window.innerWidth;
        const chrome = barChromeRef.current;
        const availAtMx4 = vw - 2 * 16 - chrome; // widest the bar can be
        const availAtMorph = vw - 2 * morphMargin(vw) - chrome;
        setCompact(isPhone || required > availAtMx4);
        setFitsAtMorph(required <= availAtMorph);
      } else {
        setCompact(isPhone);
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(bar);

    let cancelled = false;
    // Web fonts can change the logo/link widths after first paint.
    document.fonts?.ready.then(() => {
      if (!cancelled) measure();
    }).catch(() => {});

    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, []);

  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setOpen(false);

      if (href === "/") {
        if (pathname === "/") {
          if (lenis) {
            lenis.scrollTo(0);
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else {
          window.location.href = "/";
        }
        return;
      }

      if (href.startsWith("/#")) {
        const hash = href.slice(1);
        if (pathname === "/") {
          const el = document.querySelector(hash);
          if (el) {
            if (lenis) {
              lenis.scrollTo(el as HTMLElement);
            } else {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        } else {
          window.location.href = href;
        }
      } else {
        window.location.href = href;
      }
    },
    [pathname, lenis]
  );

  // Morph the bar in on scroll, but if the full nav wouldn't fit at those large
  // margins (and we're not already collapsed) keep the bar wide at mx-4 instead.
  const headerMargins =
    scrolled && (compact || fitsAtMorph) ? "mx-4 md:mx-32 lg:mx-64" : "mx-4";

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed top-4 inset-x-0 z-50",
          "transition-all duration-500 ease-in-out",
          isMounted ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0",
          headerMargins,
          "flex justify-center"
        )}
      >
        <GlassSurface
          enabled={scrolled}
          style={{ "--gs-pad-y": compact ? "0.25rem" : "0.5rem" } as React.CSSProperties}
          className={cn(
            // Horizontal padding stays constant across modes so the measured
            // available width never changes with `compact` (no oscillation);
            // only the vertical padding changes the bar height.
            "relative w-full rounded-full px-5 transition-all duration-500 ease-in-out",
            compact ? "py-1.5" : "py-4",
            scrolled
              ? "shadow-2xl shadow-black/50 border border-white/10"
              : "shadow-none border border-transparent bg-transparent"
          )}
        >
          <div ref={barRef} className="flex items-center justify-between w-full gap-3">
            {/* Left — Logo */}
            <Link
              ref={logoRef}
              href="/"
              onClick={(e) => handleNav(e, "/")}
              className="flex items-center gap-2 z-50 relative group shrink-0 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/strategi.png"
                alt="Strategi - AI Presence Advisory"
                width={32}
                height={32}
                priority
                className={cn("rounded-full object-cover", compact ? "h-7 w-7" : "h-8 w-8")}
              />
              <span
                className={cn(
                  "font-bold tracking-tighter transition-colors duration-500 ease-in-out",
                  compact ? "text-lg" : "text-xl",
                  scrolled ? "text-white/90" : "text-[#d4620a]"
                )}
              >
                Strategi
              </span>
            </Link>

            {/* Full nav (links + CTA) — shown only while it fits the bar */}
            <nav
              ref={fullNavRef}
              aria-label="Main navigation"
              className={cn("items-center gap-1", compact ? "hidden" : "flex")}
            >
              <div className="flex items-center rounded-full p-1.5 mr-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="relative px-4 lg:px-5 py-2 text-sm font-medium text-white/75 hover:text-white transition-colors rounded-full hover:bg-white/10 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <Link
                href="/#contact"
                onClick={(e) => handleNav(e, "/#contact")}
                className="group relative inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-3.5 font-bold text-black bg-white hover:bg-[#d4620a] hover:text-white transition-colors duration-300 rounded-full shadow-md shrink-0 whitespace-nowrap"
              >
                <span className="relative flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                  Book a Call
                </span>
              </Link>
            </nav>

            {/* Hamburger — shown only when the full nav no longer fits */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              className={cn(
                "relative z-50 p-2 text-white hover:text-[#d4620a] transition-colors cursor-pointer",
                compact ? "flex" : "hidden"
              )}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </GlassSurface>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#050505] overflow-y-auto overscroll-none"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors z-10 cursor-pointer"
            >
              <X size={28} strokeWidth={1} />
            </button>

            <div className="min-h-full flex flex-col justify-center px-6 py-20">
              <div className="w-full max-w-sm mx-auto flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 16, opacity: 0 }}
                      transition={{ delay: 0.05 + i * 0.06 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNav(e, link.href)}
                        className="group flex items-center gap-3 text-2xl font-light text-white tracking-tight"
                      >
                        <span className="text-[10px] font-mono text-[#d4620a] pt-1 shrink-0 w-5">
                          {link.num}
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300 truncate">
                          {link.label}
                        </span>
                      </a>
                      <div className="h-px w-full bg-white/5 mt-4" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Link
                    href="/#contact"
                    onClick={(e) => handleNav(e, "/#contact")}
                    className="flex items-center justify-center gap-2 w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-[#d4620a] hover:text-white transition-colors duration-300"
                  >
                    Book a Call
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
