"use client";

// ─────────────────────────────────────────────────────────────────────────────
// GEO ROI Calculator — interactive client island.
//
// Estimates the AI-referral revenue a business may be leaving on the table while
// it stays out of AI answers. Every figure here is an ILLUSTRATIVE MODEL, not a
// measurement. Industry multipliers reflect the assumption that AI discovery is
// growing faster in YMYL categories (legal, finance, health). The model is built
// on the publicly cited Conductor 2026 AEO/GEO benchmark assumptions
// (AI referral traffic ~1.08% of total, growing ~1%/mo; ChatGPT ~87.4% of it),
// applied as generic planning assumptions — not as claims about any real entity.
//
// The visible content (inputs at their defaults, the computed result, and the
// full math breakdown) renders immediately so it is legible to AI crawlers.
// ─────────────────────────────────────────────────────────────────────────────

import { useId, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ACCENT = "#d4620a";

// Baseline industry-wide assumptions, framed as a planning model (Conductor 2026).
const AI_REFERRAL_SHARE_OF_TRAFFIC = 0.0108; // ~1.08% of total web traffic today
const CHATGPT_SHARE_OF_AI = 0.874; // ~87.4% of AI referrals come from ChatGPT
const MONTHLY_COMPOUNDING = 0.01; // ~1% month-over-month growth

interface Industry {
  id: string;
  label: string;
  /** Relative AI-referral multiplier vs. the cross-industry baseline. */
  multiplier: number;
  /** One-line rationale shown under the result. */
  note: string;
}

// YMYL categories index higher because AI discovery is compounding fastest there.
const INDUSTRIES: Industry[] = [
  { id: "legal", label: "Legal", multiplier: 3.4, note: "Legal indexes highest — YMYL queries are migrating to AI fastest." },
  { id: "finance", label: "Finance", multiplier: 2.6, note: "Finance is a high-trust category where AI answers compound quickly." },
  { id: "healthcare", label: "Healthcare", multiplier: 2.4, note: "Health is YMYL — AI engines weigh corroborated authority heavily." },
  { id: "b2b-saas", label: "B2B SaaS", multiplier: 1.8, note: "Buyers research vendors through AI before they ever reach a site." },
  { id: "real-estate", label: "Real Estate", multiplier: 1.5, note: "Local and high-consideration queries are shifting toward AI." },
  { id: "hospitality", label: "Hospitality", multiplier: 1.2, note: "Discovery is moving to AI, though closer to the baseline rate." },
];

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)));

const num = (n: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
    Math.max(0, Math.round(n)),
  );

// Politely animated figure. Renders the real value immediately (no flash of 0),
// then eases to it. Respects prefers-reduced-motion.
function CountUp({ value, format }: { value: number; format: (n: number) => string }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{format(value)}</>;
  return (
    <motion.span
      key={Math.round(value)}
      initial={{ opacity: 0.55, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {format(value)}
    </motion.span>
  );
}

export default function Calculator() {
  const uid = useId();
  const [visitors, setVisitors] = useState(25000);
  const [leadValue, setLeadValue] = useState(1200);
  const [conversion, setConversion] = useState(2); // %
  const [industryId, setIndustryId] = useState<string>("legal");
  const [currentInclusion, setCurrentInclusion] = useState(8); // % of category prompts that return them today

  const industry = INDUSTRIES.find((i) => i.id === industryId) ?? INDUSTRIES[0];

  const model = useMemo(() => {
    // 1. Category AI-referral potential, scaled by how YMYL the category is.
    //    Baseline share of traffic × industry multiplier = the addressable
    //    AI-referral visitor pool relative to the site's current monthly volume.
    const aiReferralRate = AI_REFERRAL_SHARE_OF_TRAFFIC * industry.multiplier;
    const potentialAiVisitors = visitors * aiReferralRate;

    // 2. How much of that potential is already captured vs. left on the table.
    const capturedShare = Math.min(1, currentInclusion / 100);
    const uncapturedVisitors = potentialAiVisitors * (1 - capturedShare);

    // 3. Convert the uncaptured AI visitors into qualified leads and revenue.
    const convRate = conversion / 100;
    const additionalLeads = uncapturedVisitors * convRate;
    const monthlyOpportunity = additionalLeads * leadValue;

    // 4. Annualise WITH ~1%/mo compounding (the discovery layer is growing).
    let annualOpportunity = 0;
    let m = monthlyOpportunity;
    for (let i = 0; i < 12; i += 1) {
      annualOpportunity += m;
      m *= 1 + MONTHLY_COMPOUNDING;
    }

    // Of the monthly opportunity, the share attributable to ChatGPT specifically.
    const chatgptShareOfMonthly = monthlyOpportunity * CHATGPT_SHARE_OF_AI;

    return {
      aiReferralRate,
      potentialAiVisitors,
      capturedShare,
      uncapturedVisitors,
      additionalLeads,
      monthlyOpportunity,
      annualOpportunity,
      chatgptShareOfMonthly,
    };
  }, [visitors, leadValue, conversion, currentInclusion, industry.multiplier]);

  const id = (suffix: string) => `${uid}-${suffix}`;

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="hidden md:block md:col-span-2" aria-hidden="true" />
      <div className="col-span-12 md:col-span-10">
        <div className="border border-white/10 bg-[#080808]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ── INPUTS ─────────────────────────────────────────────────── */}
            <form
              className="p-7 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10"
              aria-label="GEO ROI model inputs"
              onSubmit={(e) => e.preventDefault()}
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d4620a]">
                Inputs
              </p>
              <p className="mt-2 mb-8 text-sm text-white/55 font-light leading-relaxed">
                Adjust the assumptions to match your business. Every figure is an
                estimate — nothing here is measured data.
              </p>

              <div className="space-y-8">
                {/* Monthly visitors */}
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <label
                      htmlFor={id("visitors")}
                      className="text-sm font-medium text-white"
                    >
                      Monthly website visitors
                    </label>
                    <span className="text-sm font-mono tabular-nums text-[#d4620a]">
                      {num(visitors)}
                    </span>
                  </div>
                  <input
                    id={id("visitors")}
                    type="range"
                    min={1000}
                    max={500000}
                    step={1000}
                    value={visitors}
                    onChange={(e) => setVisitors(Number(e.target.value))}
                    className="strategi-range mt-4 w-full"
                    aria-describedby={id("visitors-hint")}
                  />
                  <input
                    type="number"
                    min={0}
                    max={5000000}
                    value={visitors}
                    onChange={(e) => setVisitors(Number(e.target.value) || 0)}
                    aria-label="Monthly website visitors, exact value"
                    className="mt-3 w-full bg-transparent border border-white/10 px-3 py-2 text-sm tabular-nums text-white/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a]"
                  />
                  <p id={id("visitors-hint")} className="mt-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                    Total monthly traffic across your site
                  </p>
                </div>

                {/* Average value per lead */}
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <label
                      htmlFor={id("leadValue")}
                      className="text-sm font-medium text-white"
                    >
                      Average value per lead / customer (USD)
                    </label>
                    <span className="text-sm font-mono tabular-nums text-[#d4620a]">
                      {usd(leadValue)}
                    </span>
                  </div>
                  <input
                    id={id("leadValue")}
                    type="range"
                    min={50}
                    max={50000}
                    step={50}
                    value={leadValue}
                    onChange={(e) => setLeadValue(Number(e.target.value))}
                    className="strategi-range mt-4 w-full"
                    aria-describedby={id("leadValue-hint")}
                  />
                  <input
                    type="number"
                    min={0}
                    max={5000000}
                    value={leadValue}
                    onChange={(e) => setLeadValue(Number(e.target.value) || 0)}
                    aria-label="Average value per lead in US dollars, exact value"
                    className="mt-3 w-full bg-transparent border border-white/10 px-3 py-2 text-sm tabular-nums text-white/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a]"
                  />
                  <p id={id("leadValue-hint")} className="mt-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                    Revenue from one converted lead or customer
                  </p>
                </div>

                {/* Conversion rate */}
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <label
                      htmlFor={id("conversion")}
                      className="text-sm font-medium text-white"
                    >
                      Visitor-to-lead conversion rate
                    </label>
                    <span className="text-sm font-mono tabular-nums text-[#d4620a]">
                      {conversion}%
                    </span>
                  </div>
                  <input
                    id={id("conversion")}
                    type="range"
                    min={0.1}
                    max={20}
                    step={0.1}
                    value={conversion}
                    onChange={(e) => setConversion(Number(e.target.value))}
                    className="strategi-range mt-4 w-full"
                    aria-describedby={id("conversion-hint")}
                  />
                  <p id={id("conversion-hint")} className="mt-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                    Share of visitors who become a lead
                  </p>
                </div>

                {/* Industry */}
                <div>
                  <label
                    htmlFor={id("industry")}
                    className="block text-sm font-medium text-white mb-3"
                  >
                    Industry
                  </label>
                  <div className="relative">
                    <select
                      id={id("industry")}
                      value={industryId}
                      onChange={(e) => setIndustryId(e.target.value)}
                      aria-describedby={id("industry-hint")}
                      className="w-full appearance-none bg-[#050505] border border-white/10 px-4 py-3 text-sm text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] cursor-pointer"
                    >
                      {INDUSTRIES.map((i) => (
                        <option key={i.id} value={i.id} className="bg-[#050505]">
                          {i.label} — {i.multiplier.toFixed(1)}× AI referral multiplier
                        </option>
                      ))}
                    </select>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#d4620a] text-xs"
                    >
                      ▾
                    </span>
                  </div>
                  <p id={id("industry-hint")} className="mt-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                    YMYL categories index higher — AI discovery grows faster there
                  </p>
                </div>

                {/* Current AI inclusion */}
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <label
                      htmlFor={id("inclusion")}
                      className="text-sm font-medium text-white"
                    >
                      AI answer inclusion today
                    </label>
                    <span className="text-sm font-mono tabular-nums text-[#d4620a]">
                      {currentInclusion}%
                    </span>
                  </div>
                  <input
                    id={id("inclusion")}
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={currentInclusion}
                    onChange={(e) => setCurrentInclusion(Number(e.target.value))}
                    className="strategi-range mt-4 w-full"
                    aria-describedby={id("inclusion-hint")}
                  />
                  <p id={id("inclusion-hint")} className="mt-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                    Share of category prompts that return your business now
                  </p>
                </div>
              </div>
            </form>

            {/* ── RESULT ─────────────────────────────────────────────────── */}
            <div className="p-7 md:p-10 bg-[#050505]" aria-live="polite">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
                Estimated opportunity
              </p>
              <p className="mt-2 text-sm text-white/55 font-light leading-relaxed">
                What this model suggests you may be leaving on the table by staying
                out of AI answers.
              </p>

              {/* Headline annual figure */}
              <div className="mt-8">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#d4620a] mb-3">
                  Annual AI-referral opportunity (illustrative)
                </p>
                <p className="font-bold tracking-tighter leading-none text-[#d4620a] tabular-nums text-[clamp(2.75rem,9vw,5.5rem)]">
                  <CountUp value={model.annualOpportunity} format={usd} />
                </p>
              </div>

              {/* Secondary figures */}
              <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                <div className="bg-[#050505] p-5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-2">
                    Monthly opportunity
                  </p>
                  <p className="text-2xl md:text-3xl font-bold tracking-tight text-white tabular-nums">
                    <CountUp value={model.monthlyOpportunity} format={usd} />
                  </p>
                </div>
                <div className="bg-[#050505] p-5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-2">
                    Added qualified leads / mo
                  </p>
                  <p className="text-2xl md:text-3xl font-bold tracking-tight text-white tabular-nums">
                    <CountUp value={model.additionalLeads} format={num} />
                  </p>
                </div>
              </div>

              {/* Transparent math breakdown */}
              <div className="mt-10">
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-4">
                  How the model gets there
                </p>
                <dl className="border-t border-white/10 text-sm">
                  {[
                    {
                      k: "AI referral rate for category",
                      v: `${(model.aiReferralRate * 100).toFixed(2)}% of traffic`,
                      sub: `${AI_REFERRAL_SHARE_OF_TRAFFIC * 100}% baseline × ${industry.multiplier.toFixed(1)}× ${industry.label}`,
                    },
                    {
                      k: "Potential AI visitors / mo",
                      v: num(model.potentialAiVisitors),
                      sub: `${num(visitors)} visitors × AI referral rate`,
                    },
                    {
                      k: "Currently captured",
                      v: `${currentInclusion}%`,
                      sub: "Your AI answer inclusion today",
                    },
                    {
                      k: "Uncaptured AI visitors / mo",
                      v: num(model.uncapturedVisitors),
                      sub: "The pool you are not yet reaching",
                    },
                    {
                      k: "Added qualified leads / mo",
                      v: num(model.additionalLeads),
                      sub: `× ${conversion}% conversion`,
                    },
                    {
                      k: "Of which, via ChatGPT",
                      v: usd(model.chatgptShareOfMonthly),
                      sub: `≈ ${(CHATGPT_SHARE_OF_AI * 100).toFixed(1)}% of AI referrals`,
                    },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="grid grid-cols-12 gap-3 py-3 border-b border-white/10 items-baseline"
                    >
                      <dt className="col-span-7 text-white/70 font-light leading-snug">
                        {row.k}
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-white/35 mt-1">
                          {row.sub}
                        </span>
                      </dt>
                      <dd className="col-span-5 text-right font-mono tabular-nums text-white/90">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[10px] font-mono uppercase tracking-widest text-white/40 leading-relaxed">
                  Annual figure compounds the monthly opportunity at ~
                  {MONTHLY_COMPOUNDING * 100}% / mo. {industry.note}
                </p>
              </div>

              {/* Disclaimer */}
              <div
                className="mt-8 border-l-2 pl-4 py-1"
                style={{ borderColor: ACCENT }}
                role="note"
              >
                <p className="text-[11px] text-white/55 font-light leading-relaxed">
                  <span className="text-white/80 font-medium">Illustrative model.</span>{" "}
                  These are estimates produced by a planning model, not measured
                  results for any business. Industry multipliers and the baseline
                  AI-referral assumptions (≈1.08% of traffic, ≈87.4% via ChatGPT,
                  ≈1%/mo growth) are generic planning figures based on the{" "}
                  <a
                    href="https://www.conductor.com/academy/aeo-geo-benchmarks-report/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-[#d4620a] transition-colors"
                  >
                    Conductor 2026 AEO/GEO benchmarks
                  </a>
                  . Your actual numbers will differ.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Range input styling — scoped, server-safe via global class names. */}
        <style>{`
          .strategi-range {
            -webkit-appearance: none;
            appearance: none;
            height: 2px;
            background: rgba(255, 255, 255, 0.15);
            outline: none;
            cursor: pointer;
          }
          .strategi-range::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 9999px;
            background: ${ACCENT};
            border: 3px solid #050505;
            box-shadow: 0 0 0 1px ${ACCENT};
            cursor: pointer;
          }
          .strategi-range::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border-radius: 9999px;
            background: ${ACCENT};
            border: 3px solid #050505;
            box-shadow: 0 0 0 1px ${ACCENT};
            cursor: pointer;
          }
          .strategi-range:focus-visible {
            box-shadow: 0 0 0 2px ${ACCENT};
          }
        `}</style>
      </div>
    </div>
  );
}
