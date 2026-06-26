import Link from "next/link";
import type { ReactNode } from "react";

export interface LegalSection {
  heading: string;
  /** Plain paragraphs of body copy. */
  body?: ReactNode[];
  /** Optional bullet list rendered under the body. */
  bullets?: ReactNode[];
}

// Shared, brand-styled shell for static legal pages (Privacy, Terms).
// Server component — no interactivity, just structured prose.
export default function LegalDoc({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <main className="relative bg-[#050505] min-h-screen text-white">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-[#d4620a]/[0.025] blur-[120px] pointer-events-none"
      />

      <article className="relative z-10 max-w-[920px] mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-32">
        <nav
          className="mb-12 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="text-white/55 hover:text-white transition-colors">
            Strategi
          </Link>
          <span aria-hidden="true" className="text-white/30">
            /
          </span>
          <span className="text-white/85">{title}</span>
        </nav>

        <header className="mb-16 md:mb-20 border-b border-white/10 pb-12 md:pb-16">
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a]">
            {eyebrow}
          </p>
          <h1 className="mt-6 font-bold tracking-tighter leading-[0.92] text-white text-[clamp(2.5rem,7vw,5rem)]">
            {title}
          </h1>
          <p className="mt-8 text-base md:text-lg text-white/55 font-light leading-relaxed max-w-[60ch]">
            {intro}
          </p>
          <p className="mt-8 text-[10px] font-mono uppercase tracking-widest text-white/40">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="space-y-14 md:space-y-16">
          {sections.map((section, i) => (
            <section key={section.heading} aria-labelledby={`legal-${i}`}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-3">
                  <p className="text-[10px] font-mono tabular-nums text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2
                    id={`legal-${i}`}
                    className="mt-2 text-lg md:text-xl font-semibold tracking-tight text-white"
                  >
                    {section.heading}
                  </h2>
                </div>
                <div className="md:col-span-9 space-y-4">
                  {section.body?.map((para, j) => (
                    <p
                      key={j}
                      className="text-sm md:text-base text-white/65 font-light leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2 pl-1">
                      {section.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-sm md:text-base text-white/65 font-light leading-relaxed"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#d4620a]"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
