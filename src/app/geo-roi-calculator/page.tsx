import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL, CONTACT_EMAIL, LIVE_TOOLS } from "@/lib/site";
import { JsonLd, LinkCard, InfoCard } from "@/components/geo/Editorial";
import Calculator from "./Calculator";

const PAGE_URL = `${SITE_URL}/geo-roi-calculator`;
const OG_IMAGE = `${SITE_URL}/strategi.png`;

export const metadata: Metadata = {
  title: "GEO ROI Calculator for AI Visibility",
  description:
    "A free, transparent model that estimates the AI-referral revenue your business leaves on the table by staying out of AI answers. Adjust visitors, lead value, conversion, and industry to see the opportunity ChatGPT, Gemini, and Perplexity represent.",
  keywords: [
    "GEO ROI calculator",
    "AI visibility ROI",
    "AI SEO ROI calculator",
    "generative engine optimization ROI",
    "AI referral traffic value",
    "AI search ROI",
    "ChatGPT referral revenue",
    "AI visibility opportunity cost",
    "GEO revenue model",
    "answer engine optimization ROI",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Strategi",
    title: "GEO ROI Calculator — What Is AI Visibility Worth to You? | Strategi",
    description:
      "Estimate the AI-referral opportunity your business leaves on the table while it stays out of the answer. A transparent, illustrative model from Strategi.",
    images: [
      { url: OG_IMAGE, width: 1200, height: 1200, alt: "Strategi GEO ROI Calculator" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloStrategi",
    creator: "@HelloStrategi",
    title: "GEO ROI Calculator — What Is AI Visibility Worth to You? | Strategi",
    description:
      "Estimate the AI-referral opportunity your business leaves on the table while it stays out of the answer. A transparent, illustrative model from Strategi.",
    images: [OG_IMAGE],
  },
};

const FAQ_ITEMS = [
  {
    q: "How does the GEO ROI calculator work?",
    a: "The calculator is a planning model. It takes your monthly website traffic, the average value of a lead or customer, your visitor-to-lead conversion rate, your industry, and your current level of AI answer inclusion. It then estimates the AI-referral audience your category represents, subtracts the share you already capture, and converts the remaining audience into qualified leads and revenue at your conversion rate. The annual figure compounds the monthly opportunity at roughly one percent per month to reflect that AI discovery is growing, not static. Every input is adjustable and every step of the math is shown.",
  },
  {
    q: "Where do the assumptions come from?",
    a: "The baseline assumptions are drawn from the Conductor 2026 AEO/GEO Benchmarks Report and treated as generic industry planning figures, not as measured facts about any specific business. That report found AI referral traffic averaging about 1.08 percent of total web traffic, growing roughly one percent month over month, with ChatGPT accounting for about 87.4 percent of AI referrals. The per-industry multipliers reflect the well-documented pattern that YMYL categories — legal, finance, and healthcare — are adopting AI discovery faster than the cross-industry average. The numbers are a model. They are not a measurement of your business.",
  },
  {
    q: "Is this a real estimate of my revenue?",
    a: "No. It is an illustrative model meant to make the size of the opportunity tangible, not a forecast. We have no measurement data for your business, and the calculator does not query AI engines or analyse your site. Treat the output as a directional estimate built on transparent, adjustable assumptions. To replace assumptions with measured reality — which prompts in your category actually return your business, and which return competitors — start with an AI Visibility Diagnostic.",
  },
  {
    q: "Why does industry change the result so much?",
    a: "Because AI discovery is not growing evenly across categories. High-trust, high-consideration sectors — what Google calls YMYL, Your Money or Your Life — see disproportionate AI adoption because buyers increasingly ask AI before they act. Legal indexes highest in the model, followed by finance and healthcare, then B2B SaaS, real estate, and hospitality. The industry multiplier scales the baseline AI-referral rate up or down to reflect that uneven curve. You can see the exact multiplier applied for your category in the breakdown.",
  },
];

function Schemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strategi", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "GEO ROI Calculator",
        item: PAGE_URL,
      },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "GEO ROI Calculator — What Is AI Visibility Worth to You?",
    description:
      "A transparent, illustrative model that estimates the AI-referral revenue a business leaves on the table by staying out of AI answers.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-US",
    primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    datePublished: "2026-06-03",
    dateModified: "2026-06-03",
  };

  const app = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${PAGE_URL}#app`,
    name: "GEO ROI Calculator",
    url: PAGE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (web browser)",
    description:
      "An interactive model that estimates the AI-referral opportunity a business leaves on the table while it stays out of AI answers. Inputs include monthly visitors, lead value, conversion rate, industry, and current AI inclusion.",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: "Strategi",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return <JsonLd schema={[breadcrumb, webPage, app, faq]} />;
}

// Related tools — excludes this page, renders the other two live tools.
const RELATED_TOOLS = LIVE_TOOLS.filter((t) => t.id !== "geo-roi-calculator");

// Homepage-style two-track section header: eyebrow left, heading + intro right.
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
        <h2
          id={id}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white"
        >
          {title}
        </h2>
        {intro && (
          <p className="mt-8 text-base md:text-lg text-white/45 font-light max-w-xl leading-relaxed">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}

const METHOD_STEPS = [
  {
    n: "01",
    t: "Category AI-referral rate",
    d: "Start from ~1.08% of web traffic (Conductor 2026), scaled by an industry multiplier — highest for YMYL categories.",
  },
  {
    n: "02",
    t: "Potential vs. captured",
    d: "Your visitors times that rate is the potential audience; we subtract the share you already capture.",
  },
  {
    n: "03",
    t: "Leads and revenue",
    d: "Your conversion rate turns the uncaptured audience into leads, then value-per-lead into monthly revenue.",
  },
  {
    n: "04",
    t: "Annualised with growth",
    d: "The annual figure compounds at ~1% per month rather than multiplying by twelve, with ChatGPT at ~87.4% of AI referrals.",
  },
];

export default function GeoRoiCalculatorPage() {
  return (
    <>
      <Schemas />
      <div className="bg-[#050505]">
        {/* ════════════ HERO ════════════ */}
        <section
          aria-labelledby="roi-h1"
          className="relative w-full min-h-[80vh] overflow-hidden flex flex-col"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4620a]/[0.025] blur-[140px] pointer-events-none z-0" />
          <div className="flex-1 flex flex-col justify-between w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-36 pb-10 md:pb-14 relative z-10">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/30">
              GEO ROI Calculator &mdash; Interactive model
            </p>

            <div className="my-auto py-12">
              <h1
                id="roi-h1"
                className="font-bold tracking-tighter leading-[0.88] text-white text-[clamp(2.75rem,8vw,7.5rem)] max-w-[14ch]"
              >
                What is AI visibility{" "}
                <span className="text-[#d4620a]">worth to you?</span>
              </h1>
            </div>

            <div className="border-t border-white/10 pt-7 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <p className="text-sm md:text-base text-white/45 leading-relaxed max-w-md font-light">
                When a buyer asks ChatGPT, Gemini, or Perplexity for a
                recommendation in your category, you are either in the answer or
                you are not. This model estimates the size of that gap &mdash; in
                qualified leads and dollars.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto shrink-0">
                <a
                  href="#calculator"
                  className="bg-white text-[#050505] text-sm font-bold px-7 py-4 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
                >
                  Run the model &darr;
                </a>
                <Link
                  href="/#contact"
                  className="border border-white/20 text-white text-sm font-medium px-7 py-4 hover:border-white/50 transition-colors text-center"
                >
                  Measure it for real &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ PREMISE ════════════ */}
        <section
          aria-labelledby="premise-h"
          className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="The premise"
              id="premise-h"
              title={
                <>
                  AI referral traffic is small today.{" "}
                  <span className="text-white/30">
                    It is also compounding.
                  </span>
                </>
              }
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                  AI referral traffic is about one percent of web traffic today
                  &mdash; and growing roughly 1% a month. Easy to dismiss, until
                  you notice an AI answer returns one name, not ten links. There
                  is no second page. Inclusion is the whole game.
                </p>
                <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                  This calculator turns that into a number you can feel. Give it
                  your traffic, what a customer is worth, and your category
                  &mdash; it estimates the AI-referral opportunity you are not yet
                  capturing. An illustrative model, never a promise.
                </p>
              </div>
              <div className="lg:col-span-5">
                <figure className="border-l-2 border-[#d4620a] pl-6 md:pl-8 h-full flex flex-col justify-center">
                  <blockquote className="text-2xl md:text-3xl font-light leading-snug tracking-tight text-white">
                    &ldquo;Search showed ten options. AI returns one
                    recommendation.&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-[10px] font-mono uppercase tracking-widest text-white/40">
                    The Strategi thesis
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ THE CALCULATOR ════════════ */}
        <section
          id="calculator"
          aria-labelledby="calculator-h"
          className="bg-[#050505] py-24 md:py-40 scroll-mt-24"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="The model"
              id="calculator-h"
              title="Estimate your AI-referral opportunity."
              intro="Every input is adjustable, and every step of the math is shown. Change a number and the breakdown updates live."
            />
            <Calculator />
          </div>
        </section>

        {/* ════════════ ASSUMPTIONS & METHOD ════════════ */}
        <section
          aria-labelledby="method-h"
          className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="Transparency"
              id="method-h"
              title="Assumptions & method."
              intro="A calculator that hides its math is a sales tool, not a model. None of this is measured data about your business. All of it is adjustable."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {METHOD_STEPS.map((s) => (
                <InfoCard
                  key={s.n}
                  index={`Step ${s.n}`}
                  title={s.t}
                  body={s.d}
                />
              ))}
            </div>

            {/* Disclaimer callout */}
            <div className="mt-10 border border-white/10 bg-[#080808] p-7 md:p-9">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d4620a] mb-4">
                Disclaimer
              </p>
              <p className="text-base text-white/70 font-light leading-relaxed max-w-[70ch]">
                This is an illustrative planning model, not measured results. The
                baseline assumptions &mdash; AI referrals at ~1.08% of traffic,
                growing ~1% per month, with ChatGPT at ~87.4% of AI referral
                volume &mdash; are generic industry figures drawn from the{" "}
                <a
                  href="https://www.conductor.com/academy/aeo-geo-benchmarks-report/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 underline underline-offset-2 decoration-white/30 hover:text-[#d4620a] transition-colors"
                >
                  Conductor 2026 AEO/GEO Benchmarks Report
                </a>
                . Industry multipliers reflect documented patterns in AI adoption
                by category. Your actual numbers will differ. To replace these
                assumptions with real measurement, start with an{" "}
                <Link
                  href="/about#measurement"
                  className="text-white/90 underline underline-offset-2 decoration-white/30 hover:text-[#d4620a] transition-colors"
                >
                  AI Visibility Diagnostic
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ════════════ FAQ ════════════ */}
        <section
          aria-labelledby="faq-h"
          className="bg-[#050505] py-24 md:py-40"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead eyebrow="Q & A" id="faq-h" title="About the calculator." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {FAQ_ITEMS.map((item) => (
                <InfoCard key={item.q} title={item.q} body={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ RELATED TOOLS ════════════ */}
        <section
          aria-labelledby="related-h"
          className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="The measurement layer"
              id="related-h"
              title="Keep exploring the instruments."
              intro="Strategi builds the measurement layer for AI discovery. These instruments are open — client or not."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {RELATED_TOOLS.map((p) => (
                <LinkCard
                  key={p.id}
                  href={p.href}
                  kicker={p.kicker}
                  title={p.name}
                  blurb={p.desc}
                  pill={p.availability}
                />
              ))}
            </div>
            <p className="mt-10 text-base text-white/45 font-light leading-relaxed max-w-xl">
              Read the thesis behind the company.{" "}
              <Link
                href="/about"
                className="text-white/85 underline underline-offset-4 decoration-white/30 hover:text-[#d4620a] transition-colors"
              >
                Why measurement is the category &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ════════════ CTA ════════════ */}
        <section
          aria-labelledby="cta-h"
          className="relative bg-[#050505] border-t border-white/10 py-24 md:py-40 overflow-hidden"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-[#d4620a]/[0.03] blur-[140px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <h2
              id="cta-h"
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white max-w-4xl"
            >
              A model shows the opportunity.{" "}
              <span className="text-[#d4620a]">A diagnostic shows the truth.</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-white/50 font-light max-w-xl leading-relaxed">
              Every Strategi engagement begins with an AI Visibility Diagnostic.
              We query every major AI platform with the questions your buyers
              actually ask, and show you exactly which answers return you &mdash;
              and which return a competitor. No pitch. Just the real number.
            </p>
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
          </div>
        </section>
      </div>
    </>
  );
}
