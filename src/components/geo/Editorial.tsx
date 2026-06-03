// Shared editorial primitives for Strategi's content + tool pages.
// Server-safe (no "use client"): content renders in the initial HTML, which is
// exactly what AI crawlers and search engines read. Interactive behaviour lives
// in small client islands that import nothing from here.
//
// Visual language mirrors /ai-seo and /sitemap: a 12-column editorial grid,
// mono uppercase eyebrows at tracking-[0.25em], §section numbers in accent,
// and the #d4620a / #050505 palette.

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export const ACCENT = "#d4620a";

// ── Atmospheric page shell ───────────────────────────────────────────────────

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative bg-[#050505] min-h-screen text-white">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#d4620a]/[0.025] blur-[160px] pointer-events-none"
      />
      {children}
    </main>
  );
}

// Top "spec bar" — kicker, optional edition, and the page's canonical path.
export function SpecBar({
  left,
  center,
  right,
}: {
  left: string;
  center?: string;
  right: string;
}) {
  return (
    <div className="relative z-10 border-b border-white/[0.06]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-white/55">
        <span>{left}</span>
        {center && <span className="hidden sm:inline">{center}</span>}
        <span>{right}</span>
      </div>
    </div>
  );
}

// Breadcrumb row. `trail` is the ancestor links; `current` is the leaf label.
export function Breadcrumb({
  trail = [{ label: "Strategi", href: "/" }],
  current,
}: {
  trail?: { label: string; href: string }[];
  current: string;
}) {
  return (
    <nav
      className="mt-10 mb-12 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"
      aria-label="Breadcrumb"
    >
      {trail.map((t) => (
        <span key={t.href} className="flex items-center gap-2">
          <Link
            href={t.href}
            className="text-white/55 hover:text-white transition-colors"
          >
            {t.label}
          </Link>
          <span aria-hidden="true" className="text-white/30">
            /
          </span>
        </span>
      ))}
      <span className="text-white/85">{current}</span>
    </nav>
  );
}

export function Article({
  children,
  className = "",
  ...rest
}: ComponentPropsWithoutRef<"article">) {
  return (
    <article
      className={`relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 pb-32 ${className}`}
      {...rest}
    >
      {children}
    </article>
  );
}

// Numbered editorial section header: §NN + eyebrow on the left, title on the right.
export function SectionHeader({
  number,
  eyebrow,
  title,
  id,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  id?: string;
}) {
  return (
    <header className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
      <div className="col-span-12 md:col-span-2">
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d4620a]">
          §{number}
        </p>
        <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
          {eyebrow}
        </p>
      </div>
      <div className="col-span-12 md:col-span-10">
        <h2
          id={id}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.05]"
        >
          {title}
        </h2>
      </div>
    </header>
  );
}

export function SectionRule() {
  return (
    <div className="my-24 md:my-32 grid grid-cols-12 gap-6">
      <div className="col-span-2 h-px bg-[#d4620a]" />
      <div className="col-span-10 h-px bg-white/10" />
    </div>
  );
}

// Offset prose column, aligned to the 10-col content track.
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="hidden md:block md:col-span-2" aria-hidden="true" />
      <div className="col-span-12 md:col-span-9 lg:col-span-8 space-y-5 text-lg md:text-xl text-white/85 leading-relaxed font-light">
        {children}
      </div>
    </div>
  );
}

export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="my-20 md:my-28 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-2">
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d4620a]">
          Quote
        </p>
      </div>
      <div className="col-span-12 md:col-span-10">
        <blockquote className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] tracking-tight text-white">
          &ldquo;{children}&rdquo;
        </blockquote>
        {attribution && (
          <figcaption className="mt-6 text-[10px] font-mono uppercase tracking-widest text-white/50">
            {attribution}
          </figcaption>
        )}
      </div>
    </figure>
  );
}

// Right-aligned content block on the 10-col track (no header).
export function ContentTrack({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="hidden md:block md:col-span-2" aria-hidden="true" />
      <div className="col-span-12 md:col-span-10">{children}</div>
    </div>
  );
}

// JSON-LD emitter. Pass one schema object or an array; each renders as its own
// <script> so a malformed block never poisons the others.
export function JsonLd({ schema }: { schema: object | object[] }) {
  const blocks = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}

// ── Cards ────────────────────────────────────────────────────────────────────
// Two deliberately distinct card types so users can tell what is clickable:
//   • LinkCard  — a whole-tile link. Bordered, roomy, with a persistent arrow
//     box top-right that brightens/slides on hover. Use in SPACED grids
//     (gap-4 / gap-5), not seamless hairline grids.
//   • InfoCard  — static content (no link). Calm, no arrow, no hover affordance.

export function LinkCard({
  href,
  title,
  blurb,
  kicker,
  pill,
  external,
}: {
  href: string;
  title: string;
  blurb?: string;
  kicker?: string;
  pill?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="group h-full border border-white/12 bg-white/[0.015] hover:bg-white/[0.045] hover:border-[#d4620a]/60 transition-colors duration-300 p-7 md:p-8 flex flex-col focus-visible:outline-none">
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          {kicker && (
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-3">
              {kicker}
            </p>
          )}
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h3>
        </div>
        <span
          aria-hidden="true"
          className="shrink-0 mt-0.5 flex h-9 w-9 items-center justify-center border border-white/20 text-white/60 group-hover:border-[#d4620a] group-hover:text-[#d4620a] group-hover:translate-x-0.5 transition-all duration-300"
        >
          &rarr;
        </span>
      </div>
      {blurb && (
        <p className="mt-4 text-sm text-white/45 font-light leading-relaxed">
          {blurb}
        </p>
      )}
      {pill && (
        <span className="mt-auto pt-6 text-[10px] font-mono uppercase tracking-widest text-[#d4620a]">
          {pill}
        </span>
      )}
    </div>
  );
  const cls =
    "block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]";
  return external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function InfoCard({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index?: string;
}) {
  return (
    <div className="h-full border border-white/12 bg-white/[0.015] p-7 md:p-8">
      {index && (
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/35 tabular-nums mb-5">
          {index}
        </p>
      )}
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
        {body}
      </p>
    </div>
  );
}

// Primary / secondary call-to-action buttons, used consistently across pages.
export function PrimaryCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center min-h-[52px] bg-white text-[#050505] text-xs font-bold uppercase tracking-widest px-8 hover:bg-[#d4620a] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
    >
      {children}
    </Link>
  );
}

export function SecondaryCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center min-h-[52px] border border-white/20 text-xs font-medium uppercase tracking-widest text-white/85 px-8 hover:border-white/40 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
    >
      {children}
    </a>
  );
}
