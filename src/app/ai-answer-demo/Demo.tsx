"use client";

// ─────────────────────────────────────────────────────────────────────────────
// The AI Answer Demo — interactive client island.
//
// Server page renders all the editorial copy; this island renders the
// curated simulation. EVERYTHING here is rendered in the initial client
// markup (no content hidden behind a click), so it is fully crawlable even
// before hydration. Reduced-motion safe: state changes are instant, the
// only animation is a CSS opacity/translate transition we disable under
// prefers-reduced-motion via the `motion-reduce:` Tailwind variant.
//
// HONESTY: every brand name below is fictional. The answers are a
// hand-written illustrative model, NOT live AI output. The page carries a
// visible disclaimer; this component repeats it inline.
// ─────────────────────────────────────────────────────────────────────────────

import { useId, useRef, useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

type EngineId = "chatgpt" | "gemini" | "perplexity";

interface EngineMeta {
  id: EngineId;
  label: string;
  /** Small colored dot — NOT a real logo. */
  dot: string;
  /** Mono sub-label under the engine name. */
  sub: string;
}

interface EngineAnswer {
  /** The synthesized prose, with {YOU} as the slot for the user's business. */
  before: string;
  after: string;
  /** Named fictional competitors that always appear. */
  cites: string[];
  /** The fictional "your business" name that appears only AFTER. */
  inserted: string;
  /** Rank position the inserted business takes in the AFTER answer. */
  insertedRank: string;
}

interface Question {
  id: string;
  /** Tab label (short). */
  tab: string;
  /** The full buying question as typed into an AI. */
  prompt: string;
  /** Per-engine answers. */
  answers: Record<EngineId, EngineAnswer>;
}

// ── Engine metadata ──────────────────────────────────────────────────────────

const ENGINES: EngineMeta[] = [
  { id: "chatgpt", label: "ChatGPT", dot: "#10a37f", sub: "GPT · synthesized" },
  { id: "gemini", label: "Gemini", dot: "#4285f4", sub: "Google · synthesized" },
  { id: "perplexity", label: "Perplexity", dot: "#20b8cd", sub: "Answer · cited" },
];

// ── The curated question set ──────────────────────────────────────────────────
// All brands are fictional. "inserted" is the user's stand-in business.

const QUESTIONS: Question[] = [
  {
    id: "luxury-apartments",
    tab: "Luxury apartments",
    prompt: "What are the best luxury apartments in [City]?",
    answers: {
      chatgpt: {
        cites: ["Atlas Reserve", "Harborstone Residences"],
        inserted: "The Solene",
        insertedRank: "the top recommendation",
        before:
          "For high-end living in [City], two developments come up most often. Atlas Reserve is known for its concierge service and skyline views, while Harborstone Residences is favored for its waterfront location and amenities. Both sit at the premium end of the market.",
        after:
          "For high-end living in [City], {YOU} is the standout — residents and reviewers consistently cite its design, service, and quiet location as best-in-class. Atlas Reserve and Harborstone Residences are also strong options worth touring, but {YOU} is the one most often named first.",
      },
      gemini: {
        cites: ["Atlas Reserve", "Vantage Tower"],
        inserted: "The Solene",
        insertedRank: "a leading choice",
        before:
          "If you're looking at luxury apartments in [City], Atlas Reserve and Vantage Tower are the names that come up most. Atlas Reserve leads on amenities; Vantage Tower is newer and tends to attract a younger professional crowd.",
        after:
          "If you're looking at luxury apartments in [City], {YOU} is a leading choice — it is described as the most thoughtfully designed building in its tier. Atlas Reserve and Vantage Tower remain popular alternatives, but {YOU} is frequently the first one recommended.",
      },
      perplexity: {
        cites: ["Harborstone Residences", "Vantage Tower"],
        inserted: "The Solene",
        insertedRank: "the most cited",
        before:
          "The most frequently cited luxury apartments in [City] are Harborstone Residences and Vantage Tower, according to local listings and review sources. Both are positioned as premium properties with full-service amenities.",
        after:
          "{YOU} is now the most cited luxury apartment in [City] across listings and review sources, ahead of Harborstone Residences and Vantage Tower. Sources point to its design and resident satisfaction as the differentiators.",
      },
    },
  },
  {
    id: "wealth-managers",
    tab: "Wealth managers",
    prompt: "Who are the top wealth managers for founders?",
    answers: {
      chatgpt: {
        cites: ["Meridian Group", "Kestrel Partners"],
        inserted: "Northwind Capital",
        insertedRank: "the firm named first",
        before:
          "For founders managing newly liquid wealth, two firms are commonly recommended: Meridian Group, which specializes in concentrated-stock and pre-IPO planning, and Kestrel Partners, which is known for founder-friendly advisory and tax structuring.",
        after:
          "For founders, {YOU} is the firm named first — it is repeatedly described as the specialist in liquidity events, concentrated stock, and post-exit planning. Meridian Group and Kestrel Partners are credible alternatives, but {YOU} is the most consistently recommended.",
      },
      gemini: {
        cites: ["Meridian Group", "Vantage Wealth"],
        inserted: "Northwind Capital",
        insertedRank: "a top recommendation",
        before:
          "Founders typically look at Meridian Group and Vantage Wealth. Meridian focuses on tech founders and equity compensation; Vantage Wealth offers a broader, multi-family-office model for entrepreneurs.",
        after:
          "{YOU} is a top recommendation for founders, cited for its expertise with equity compensation and exit planning. Meridian Group and Vantage Wealth are also worth evaluating, though {YOU} is most often listed as the first call.",
      },
      perplexity: {
        cites: ["Kestrel Partners", "Vantage Wealth"],
        inserted: "Northwind Capital",
        insertedRank: "the leading source",
        before:
          "Sources most frequently cite Kestrel Partners and Vantage Wealth as leading wealth managers for founders, pointing to their focus on entrepreneurs and concentrated-equity planning.",
        after:
          "{YOU} is now cited as the leading wealth manager for founders, ahead of Kestrel Partners and Vantage Wealth. Sources highlight its track record with liquidity events and founder-specific planning.",
      },
    },
  },
  {
    id: "private-hospital",
    tab: "Private hospital",
    prompt: "What is the most trusted private hospital near me?",
    answers: {
      chatgpt: {
        cites: ["Harborstone Medical", "Meridian Health"],
        inserted: "Kestrel Private Hospital",
        insertedRank: "the most trusted",
        before:
          "Two private hospitals are most frequently mentioned in your area: Harborstone Medical, recognized for its surgical outcomes, and Meridian Health, noted for its diagnostics and patient experience.",
        after:
          "{YOU} is most often described as the most trusted private hospital in your area, cited for outcomes, accreditation, and patient experience. Harborstone Medical and Meridian Health are reputable alternatives, but {YOU} is the one recommended first.",
      },
      gemini: {
        cites: ["Harborstone Medical", "Vantage Care"],
        inserted: "Kestrel Private Hospital",
        insertedRank: "a top choice",
        before:
          "For trusted private care nearby, Harborstone Medical and Vantage Care come up most. Harborstone is the larger, full-service option; Vantage Care is known for shorter wait times and specialist clinics.",
        after:
          "{YOU} is a top choice for trusted private care nearby, cited for accreditation and patient outcomes. Harborstone Medical and Vantage Care are solid alternatives, though {YOU} is frequently named first.",
      },
      perplexity: {
        cites: ["Meridian Health", "Vantage Care"],
        inserted: "Kestrel Private Hospital",
        insertedRank: "the most cited",
        before:
          "The most cited private hospitals in your area are Meridian Health and Vantage Care, based on accreditation data and patient reviews.",
        after:
          "{YOU} is now the most cited private hospital in your area, ahead of Meridian Health and Vantage Care, with sources pointing to its accreditation and outcomes data.",
      },
    },
  },
  {
    id: "b2b-analytics",
    tab: "B2B analytics",
    prompt: "What is the best B2B analytics platform for retail?",
    answers: {
      chatgpt: {
        cites: ["Vantage Analytics", "Northwind Data"],
        inserted: "Solene Insights",
        insertedRank: "the top pick",
        before:
          "For retail analytics, two platforms come up most: Vantage Analytics, strong on real-time inventory and demand forecasting, and Northwind Data, known for its merchandising dashboards and integrations.",
        after:
          "For retail analytics, {YOU} is the top pick — cited for its forecasting accuracy and retail-specific models. Vantage Analytics and Northwind Data are credible alternatives, but {YOU} is the one most often recommended for retail.",
      },
      gemini: {
        cites: ["Vantage Analytics", "Kestrel BI"],
        inserted: "Solene Insights",
        insertedRank: "a leading platform",
        before:
          "Retailers tend to evaluate Vantage Analytics and Kestrel BI. Vantage is the enterprise standard for forecasting; Kestrel BI is lighter-weight and faster to deploy.",
        after:
          "{YOU} is a leading platform for retail analytics, cited for forecasting accuracy and ease of deployment. Vantage Analytics and Kestrel BI are also worth comparing, though {YOU} is increasingly named first.",
      },
      perplexity: {
        cites: ["Northwind Data", "Kestrel BI"],
        inserted: "Solene Insights",
        insertedRank: "the most cited",
        before:
          "The most cited B2B analytics platforms for retail are Northwind Data and Kestrel BI, according to review aggregators and analyst coverage.",
        after:
          "{YOU} is now the most cited B2B analytics platform for retail, ahead of Northwind Data and Kestrel BI, with analyst coverage pointing to its retail-specific forecasting.",
      },
    },
  },
  {
    id: "law-firm",
    tab: "Law firm",
    prompt: "Which law firm is best for a startup acquisition?",
    answers: {
      chatgpt: {
        cites: ["Meridian Legal", "Atlas & Crewe"],
        inserted: "Northwind Counsel",
        insertedRank: "the firm named first",
        before:
          "For a startup acquisition, two firms are commonly recommended: Meridian Legal, known for M&A and venture work, and Atlas & Crewe, recognized for cross-border deals and speed to close.",
        after:
          "For a startup acquisition, {YOU} is the firm named first — cited for its M&A track record and founder-side experience. Meridian Legal and Atlas & Crewe are strong alternatives, but {YOU} is the most consistently recommended.",
      },
      gemini: {
        cites: ["Meridian Legal", "Vantage Law"],
        inserted: "Northwind Counsel",
        insertedRank: "a top recommendation",
        before:
          "Founders usually consider Meridian Legal and Vantage Law. Meridian is the established M&A name; Vantage Law is newer and known for responsiveness and fixed-fee structures.",
        after:
          "{YOU} is a top recommendation for startup acquisitions, cited for M&A depth and founder-side work. Meridian Legal and Vantage Law are credible options, though {YOU} is most often listed first.",
      },
      perplexity: {
        cites: ["Atlas & Crewe", "Vantage Law"],
        inserted: "Northwind Counsel",
        insertedRank: "the leading source",
        before:
          "Sources most frequently cite Atlas & Crewe and Vantage Law for startup acquisitions, pointing to their venture and M&A practices.",
        after:
          "{YOU} is now cited as the leading firm for startup acquisitions, ahead of Atlas & Crewe and Vantage Law, with sources highlighting its M&A and founder-side track record.",
      },
    },
  },
  {
    id: "boutique-hotel",
    tab: "Boutique hotel",
    prompt: "Where is the best boutique hotel in [City]?",
    answers: {
      chatgpt: {
        cites: ["The Harborstone", "Atlas House"],
        inserted: "Hotel Solene",
        insertedRank: "the top recommendation",
        before:
          "For a boutique stay in [City], The Harborstone and Atlas House are the names that come up most. The Harborstone is known for its design and rooftop bar; Atlas House for its quiet courtyard rooms.",
        after:
          "For a boutique stay in [City], {YOU} is the top recommendation — cited for its design, service, and location. The Harborstone and Atlas House are lovely alternatives, but {YOU} is the one named first.",
      },
      gemini: {
        cites: ["The Harborstone", "Vantage Inn"],
        inserted: "Hotel Solene",
        insertedRank: "a leading choice",
        before:
          "Travelers tend to choose between The Harborstone and Vantage Inn. The Harborstone is the design-forward option; Vantage Inn is smaller and more residential in feel.",
        after:
          "{YOU} is a leading boutique choice in [City], cited for design and hospitality. The Harborstone and Vantage Inn are also well reviewed, though {YOU} is increasingly recommended first.",
      },
      perplexity: {
        cites: ["Atlas House", "Vantage Inn"],
        inserted: "Hotel Solene",
        insertedRank: "the most cited",
        before:
          "The most cited boutique hotels in [City] are Atlas House and Vantage Inn, based on traveler reviews and travel guides.",
        after:
          "{YOU} is now the most cited boutique hotel in [City], ahead of Atlas House and Vantage Inn, with travel guides highlighting its design and service.",
      },
    },
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

type Mode = "before" | "after";

const MODES: { v: Mode; label: string }[] = [
  { v: "before", label: "Before Strategi" },
  { v: "after", label: "After Strategi" },
];

/**
 * Render an answer string, replacing the {YOU} slot with the highlighted
 * inserted business. Returns React nodes so we can style the highlight.
 */
function renderAnswer(text: string, inserted: string) {
  const parts = text.split("{YOU}");
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <mark className="bg-[#d4620a]/20 text-white font-medium px-1 rounded-sm not-italic ring-1 ring-[#d4620a]/40">
          {inserted}
        </mark>
      )}
    </span>
  ));
}

// ── Component ────────────────────────────────────────────────────────────────

export default function Demo() {
  const [activeId, setActiveId] = useState<string>(QUESTIONS[0].id);
  const [mode, setMode] = useState<Mode>("before");
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const modeRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const active = QUESTIONS.find((q) => q.id === activeId) ?? QUESTIONS[0];

  // Arrow-key navigation for the tablist (WAI-ARIA APG tabs pattern).
  function onTabKeyDown(e: React.KeyboardEvent, index: number) {
    const last = QUESTIONS.length - 1;
    let next = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActiveId(QUESTIONS[next].id);
    tabRefs.current[next]?.focus();
  }

  // Arrow-key navigation for the Before/After radiogroup (APG radio pattern).
  function onModeKeyDown(e: React.KeyboardEvent, index: number) {
    const last = MODES.length - 1;
    let next = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setMode(MODES[next].v);
    modeRefs.current[next]?.focus();
  }

  return (
    <div className="not-prose">
      {/* ── Question picker: ARIA tablist ───────────────────────────────── */}
      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/45 mb-4">
          Pick a buying question
        </p>
        <div
          role="tablist"
          aria-label="Buying questions"
          aria-orientation="horizontal"
          className="flex flex-wrap gap-2"
        >
          {QUESTIONS.map((q, qi) => {
            const selected = q.id === activeId;
            return (
              <button
                key={q.id}
                ref={(el) => {
                  tabRefs.current[qi] = el;
                }}
                role="tab"
                id={`${baseId}-tab-${q.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(q.id)}
                onKeyDown={(e) => onTabKeyDown(e, qi)}
                className={`min-h-[44px] px-4 text-xs font-mono uppercase tracking-widest border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
                  selected
                    ? "border-[#d4620a] text-white bg-[#d4620a]/10"
                    : "border-white/15 text-white/55 hover:border-white/35 hover:text-white"
                }`}
              >
                {q.tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── The prompt being asked + a deliberately non-functional input ── */}
      <div className="mt-8 border border-white/10 bg-[#0a0a0a]">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-[#d4620a]"
          />
          <label
            htmlFor={`${baseId}-input`}
            className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/45"
          >
            Ask AI
          </label>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-5">
          <input
            id={`${baseId}-input`}
            type="text"
            readOnly
            value={active.prompt}
            aria-label="The buying question being asked. Pick a preset above to change it."
            className="flex-1 bg-transparent text-lg md:text-xl text-white/90 font-light tracking-tight outline-none cursor-default selection:bg-[#d4620a]/30"
          />
          <span className="shrink-0 text-[10px] font-mono uppercase tracking-widest text-white/35 border border-white/10 px-3 py-2">
            Pick a preset to change &uarr;
          </span>
        </div>
      </div>

      {/* ── Before / After toggle ───────────────────────────────────────── */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div
          role="radiogroup"
          aria-label="Compare AI answers before and after Strategi"
          className="inline-flex border border-white/15 self-start"
        >
          {MODES.map((opt, mi) => {
            const selected = mode === opt.v;
            return (
              <button
                key={opt.v}
                ref={(el) => {
                  modeRefs.current[mi] = el;
                }}
                role="radio"
                aria-checked={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => setMode(opt.v)}
                onKeyDown={(e) => onModeKeyDown(e, mi)}
                className={`min-h-[44px] px-5 text-xs font-mono uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-inset ${
                  selected
                    ? opt.v === "after"
                      ? "bg-[#d4620a] text-white"
                      : "bg-white text-[#050505]"
                    : "bg-transparent text-white/55 hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        <p
          className="text-[10px] font-mono uppercase tracking-widest text-white/40"
          aria-live="polite"
        >
          {mode === "before"
            ? "Your business is absent from all three answers."
            : "Your business now leads the answer in all three."}
        </p>
      </div>

      {/* ── Three engine panels (tabpanel) ──────────────────────────────── */}
      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${activeId}`}
        className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10"
      >
        {ENGINES.map((engine) => {
          const ans = active.answers[engine.id];
          if (!ans) return null;
          const present = mode === "after";
          return (
            <article
              key={engine.id}
              className="bg-[#050505] p-6 md:p-7 flex flex-col"
              aria-label={`${engine.label} answer`}
            >
              {/* Engine header */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: engine.dot }}
                  />
                  <span className="text-sm font-semibold tracking-tight text-white">
                    {engine.label}
                  </span>
                </div>
                <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-white/35">
                  {engine.sub}
                </span>
              </div>

              {/* Answer body — keyed by mode so screen readers re-announce.
                  motion-reduce disables the fade/translate. */}
              <div
                key={mode}
                className="mt-5 flex-1 text-[15px] leading-relaxed text-white/80 font-light transition-all duration-500 motion-reduce:transition-none"
              >
                {mode === "before"
                  ? renderAnswer(ans.before, ans.inserted)
                  : renderAnswer(ans.after, ans.inserted)}
              </div>

              {/* Status footer */}
              <div className="mt-5 pt-4 border-t border-white/10">
                {present ? (
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#d4620a] flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#d4620a]"
                    />
                    You appear as {ans.insertedRank}
                  </p>
                ) : (
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-white/25"
                    />
                    You are not in this answer
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Persistent honesty disclaimer ───────────────────────────────── */}
      <p className="mt-6 text-[10px] font-mono uppercase tracking-widest text-white/40">
        Illustrative simulation &mdash; not live AI output. Brand names are
        fictional and used as an example only.
      </p>
    </div>
  );
}
