import type { NextConfig } from "next";

const cspDirectives = [
  "default-src 'self'",
  // Cal.com embed, Vercel Analytics, Insights need inline + eval. Next itself needs unsafe-inline for hydration markers.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cal.com https://*.cal.com https://*.vercel-insights.com https://va.vercel-scripts.com",
  "img-src * data: https: blob:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "frame-src https://cal.com https://*.cal.com",
  "connect-src 'self' https://*.vercel-insights.com https://va.vercel-scripts.com https://*.cal.com",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Content-Security-Policy", value: cspDirectives },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
