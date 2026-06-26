"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { INTELLIGENCE, MANIFESTO, CONTACT_EMAIL } from "@/lib/site";
import { LinkCard, InfoCard } from "@/components/geo/Editorial";

const EASE = [0.25, 0.4, 0.25, 1] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Homepage-style two-track section header: eyebrow left, heading right.
function SectionHead({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-8 md:gap-12 justify-between md:items-end">
      <div className="md:w-1/3">
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a]">
          {eyebrow}
        </p>
      </div>
      <div className="md:w-2/3">
        <Reveal>
          <h2
            id={id}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white"
          >
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-8 text-base md:text-lg text-white/45 font-light max-w-xl leading-relaxed">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}

export interface AboutFaqItem {
  q: string;
  a: string;
}

export default function AboutContent({ faq }: { faq: AboutFaqItem[] }) {
  return (
    <div className="bg-[#050505]">
      {/* ════════════ HERO ════════════ */}
      <section
        className="relative w-full min-h-[90vh] overflow-hidden flex flex-col"
        aria-label="About Strategi"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4620a]/[0.025] blur-[140px] pointer-events-none z-0" />
        <div className="flex-1 flex flex-col justify-between w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-36 pb-10 md:pb-14 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/30"
          >
            About Strategi &mdash; Est. 2026
          </motion.p>

          <div className="my-auto py-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="font-bold tracking-tighter leading-[0.88] text-white text-[clamp(2.75rem,8vw,7.5rem)] max-w-[15ch]"
            >
              We don&apos;t just do AI visibility.{" "}
              <span className="text-[#d4620a]">We measure it.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="border-t border-white/10 pt-7 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          >
            <p className="text-sm md:text-base text-white/45 leading-relaxed max-w-md font-light">
              The advisory &mdash; and the measurement layer &mdash; for AI
              discovery. We make the right businesses get recommended by AI, and
              we built the instruments to prove it.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/#contact"
                className="bg-white text-[#050505] text-sm font-bold px-7 py-4 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
              >
                Start a diagnostic &rarr;
              </Link>
              <a
                href="#thesis"
                className="border border-white/20 text-white text-sm font-medium px-7 py-4 hover:border-white/50 transition-colors text-center"
              >
                Read the thesis
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ THESIS ════════════ */}
      <section
        id="thesis"
        aria-labelledby="thesis-h"
        className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead
            eyebrow="What we are"
            id="thesis-h"
            title={
              <>
                Not an agency.{" "}
                <span className="text-white/30">A category &mdash; and the company measuring it.</span>
              </>
            }
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-7 space-y-6">
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                Discovery used to mean a list of links you chose from. That is
                collapsing. AI returns one answer &mdash; maybe two or three
                names. The user never sees a link. They hear a name, and act on
                it.
              </p>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                Strategi exists for that world. Not an SEO firm with a new
                acronym, not a GEO agency reselling the keyword playbook. We make
                businesses visible to AI &mdash; and we built the layer that
                measures it.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-5">
              <figure className="border-l-2 border-[#d4620a] pl-6 md:pl-8 h-full flex flex-col justify-center">
                <blockquote className="text-2xl md:text-3xl font-light leading-snug tracking-tight text-white">
                  &ldquo;The company that owns the measurement becomes more
                  valuable than the company selling the service.&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-[10px] font-mono uppercase tracking-widest text-white/40">
                  The Bloomberg principle, applied to AI
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════ MANIFESTO ════════════ */}
      <section
        id="manifesto"
        aria-labelledby="manifesto-h"
        className="bg-[#050505] py-24 md:py-40 scroll-mt-24"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead
            eyebrow="Manifesto"
            id="manifesto-h"
            title={
              <>
                SEO and GEO are not{" "}
                <span className="text-white/30">the same sport.</span>
              </>
            }
          />
          <div className="border-t border-white/10">
            {MANIFESTO.map((row, i) => (
              <Reveal key={row.seo} delay={(i % 3) * 0.05}>
                <div className="group grid grid-cols-1 sm:grid-cols-[auto_1fr_1fr] gap-x-6 gap-y-1 sm:gap-y-0 items-center py-6 md:py-8 border-b border-white/10">
                  <span className="hidden sm:block font-mono text-[10px] tabular-nums text-white/25 group-hover:text-[#d4620a] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl md:text-3xl font-light tracking-tight text-white/35 line-through decoration-white/20">
                    {row.seo}
                  </span>
                  <span className="text-xl md:text-3xl font-semibold tracking-tight text-white">
                    {row.geo}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-12 text-lg md:text-2xl text-white/50 font-light italic max-w-3xl leading-relaxed">
              Visibility is no longer about being found. It is about being
              chosen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════ MEASUREMENT LAYER ════════════ */}
      <section
        id="measurement"
        aria-labelledby="measurement-h"
        className="bg-[#050505] py-24 md:py-40 scroll-mt-24"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead
            eyebrow="The measurement layer"
            id="measurement-h"
            title={
              <>
                Most agencies sell optimization.{" "}
                <span className="text-white/30">We publish the measurement.</span>
              </>
            }
            intro="Open instruments — client or not — that make the recommendation economy legible."
          />
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {INTELLIGENCE.map((p) => (
                <LinkCard
                  key={p.id}
                  href={p.href}
                  kicker={p.kicker}
                  title={p.name}
                  blurb={p.desc}
                  pill={p.availability}
                  external={p.external}
                />
              ))}
            </div>
          </Reveal>
        </div>

        {/* Recommended by AI badge */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16">
          <Reveal>
            <div className="border border-white/10 bg-[#080808] p-7 md:p-9 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="shrink-0 self-start inline-flex items-center gap-2 border border-[#d4620a]/40 bg-[#d4620a]/[0.06] px-3 py-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#d4620a]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4620a]">
                    Recommended by AI&trade;
                  </span>
                </div>
                <p className="text-sm text-white/60 font-light leading-relaxed max-w-[52ch]">
                  A verifiable trust mark for the businesses that earn the answer
                  &mdash;{" "}
                  <span className="text-white/85">
                    Recommended by AI, audited by Strategi.
                  </span>{" "}
                  The badge does not matter. The signal it spreads does.
                </p>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Recommended%20by%20AI%20badge%20%E2%80%94%20early%20access`}
                className="shrink-0 text-[10px] font-mono uppercase tracking-widest text-white/55 hover:text-[#d4620a] transition-colors border border-white/15 px-4 py-3 self-start sm:self-auto"
              >
                In development &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════ PROMPT COVERAGE METRIC ════════════ */}
      <section
        aria-labelledby="metric-h"
        className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead
            eyebrow="The metric"
            id="metric-h"
            title="We report prompts, not rankings."
            intro="One number you can feel: of the questions buyers ask AI in your category, how many return your name? That is prompt coverage."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              { label: "Before Strategi", value: 2, total: 50, accent: false },
              { label: "After Strategi", value: 18, total: 50, accent: true },
            ].map((b) => (
              <Reveal key={b.label}>
                <div className="bg-[#050505] p-8 md:p-12 h-full">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/45 mb-6">
                    {b.label}
                  </p>
                  <p
                    className={`font-bold tracking-tighter leading-none tabular-nums ${
                      b.accent ? "text-[#d4620a]" : "text-white/85"
                    } text-[clamp(4rem,12vw,8rem)]`}
                  >
                    {b.value}
                    <span className="text-white/25 text-3xl md:text-5xl font-light">
                      /{b.total}
                    </span>
                  </p>
                  <p className="mt-3 text-sm text-white/50 font-light">
                    category prompts returning your business
                  </p>
                  <div
                    className="mt-6 h-2 bg-white/[0.06] overflow-hidden"
                    role="img"
                    aria-label={`${b.value} of ${b.total} prompts`}
                  >
                    <div
                      className={`h-full ${b.accent ? "bg-[#d4620a]" : "bg-white/30"}`}
                      style={{ width: `${(b.value / b.total) * 100}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-[10px] font-mono uppercase tracking-widest text-white/40">
            Illustrative sample &middot; not measured client data
          </p>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section aria-labelledby="faq-h" className="bg-[#050505] py-24 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead eyebrow="Q & A" id="faq-h" title="About Strategi." />
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {faq.map((item) => (
                <InfoCard key={item.q} title={item.q} body={item.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section
        aria-labelledby="cta-h"
        className="relative bg-[#050505] border-t border-white/10 py-24 md:py-40 overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-[#d4620a]/[0.03] blur-[140px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <h2
              id="cta-h"
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white max-w-4xl"
            >
              The first business AI learns to trust in your category{" "}
              <span className="text-[#d4620a]">wins.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg md:text-xl text-white/50 font-light max-w-xl leading-relaxed">
              Every engagement begins with an AI Visibility Diagnostic. No pitch
              &mdash; a clear read on where you stand inside AI today.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-[#050505] text-sm font-bold px-8 py-5 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
              >
                Start your diagnostic &rarr;
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="border border-white/20 text-white text-sm font-medium px-8 py-5 hover:border-white/50 transition-colors text-center"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
