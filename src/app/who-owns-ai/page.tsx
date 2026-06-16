import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { SITE_URL, LIVE_TOOLS } from "@/lib/site";
import { INDUSTRIES } from "@/lib/industries";
import { JsonLd, LinkCard, InfoCard } from "@/components/geo/Editorial";

const PAGE_URL = `${SITE_URL}/who-owns-ai`;
const OG_IMAGE = `${SITE_URL}/strategi.png`;

export const metadata: Metadata = {
  title: "Who Owns AI? — The AI Visibility Index by Industry",
  description:
    "Which businesses AI recommends first, by industry. The scoreboard of the recommendation economy — real estate, hospitality, legal, healthcare, and more. An illustrative AI Visibility Index from Strategi.",
  keywords: [
    "Who owns AI",
    "AI visibility index",
    "AI recommendation leaderboard",
    "AI recommendation share",
    "who does AI recommend",
    "GEO by industry",
    "generative engine optimization leaderboard",
    "AI visibility by industry",
    "recommendation economy",
    "AI brand visibility",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Strategi",
    title: "Who Owns AI? — The AI Visibility Index by Industry | Strategi",
    description:
      "Which businesses AI recommends first, by industry. The scoreboard of the recommendation economy. An illustrative index from Strategi.",
    images: [
      { url: OG_IMAGE, width: 1200, height: 1200, alt: "Who Owns AI? — Strategi AI Visibility Index" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloStrategi",
    creator: "@HelloStrategi",
    title: "Who Owns AI? — The AI Visibility Index by Industry | Strategi",
    description:
      "Which businesses AI recommends first, ranked by industry. Illustrative model by Strategi.",
    images: [OG_IMAGE],
  },
};

const SIGNALS = [
  {
    n: "01",
    title: "Prompt coverage",
    body: "Of the questions buyers ask AI in your category, how many return your name? The breadth metric.",
  },
  {
    n: "02",
    title: "Recommendation share",
    body: "When you are named, how often are you first? Your slice of a near-zero-sum surface. The depth metric.",
  },
  {
    n: "03",
    title: "Citation depth",
    body: "Does AI just mention you, or cite specific pages and corroborated sources? The trust metric — and the best signal of durable inclusion.",
  },
];

function Schemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strategi", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Who Owns AI?", item: PAGE_URL },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Who Owns AI? — The AI Visibility Index by Industry",
    description:
      "An illustrative index of which businesses AI recommends first, organized by industry. A demonstration of Strategi's AI visibility methodology using fictional brands, not a measurement of real companies.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    about: { "@type": "Thing", name: "AI visibility" },
    primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };

  // Hub → industry pages.
  const industryList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#industries`,
    name: "Who Owns AI — by industry",
    numberOfItems: INDUSTRIES.length,
    itemListElement: INDUSTRIES.map((ind, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Who Owns AI in ${ind.name}`,
      url: `${PAGE_URL}/${ind.slug}`,
    })),
  };

  return <JsonLd schema={[breadcrumb, webPage, industryList]} />;
}

// Homepage-style band header: eyebrow left, heading + intro right.
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

export default function WhoOwnsAiPage() {
  return (
    <>
      <Schemas />

      <div className="bg-[#050505]">
        {/* ════════════ HERO ════════════ */}
        <section
          className="relative w-full min-h-[80vh] overflow-hidden flex flex-col"
          aria-labelledby="who-owns-ai-h1"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4620a]/[0.03] blur-[140px] pointer-events-none z-0"
          />
          <div className="flex-1 flex flex-col justify-between w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-36 pb-12 md:pb-16 relative z-10">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/30">
              The AI Visibility Index
            </p>

            <div className="my-auto py-12">
              <h1
                id="who-owns-ai-h1"
                className="font-bold tracking-tighter leading-[0.88] text-white text-[clamp(2.75rem,8vw,7.5rem)] max-w-[16ch]"
              >
                Who owns AI in your{" "}
                <span className="text-[#d4620a]">industry?</span>
              </h1>
            </div>

            <div className="border-t border-white/10 pt-7 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <p className="text-sm md:text-base text-white/45 leading-relaxed max-w-md font-light">
                Search gave you ten links to choose from. AI returns one answer.
                In every industry there is now a business AI names first &mdash;
                and the rest it rarely mentions. This is the scoreboard for that.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto shrink-0">
                <Link
                  href="/#contact"
                  className="bg-white text-[#050505] text-sm font-bold px-7 py-4 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
                >
                  See your real standings &rarr;
                </Link>
                <a
                  href="#industries"
                  className="border border-white/20 text-white text-sm font-medium px-7 py-4 hover:border-white/50 transition-colors text-center"
                >
                  Pick your industry
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ INDUSTRIES HUB ════════════ */}
        <section
          id="industries"
          aria-labelledby="industries-h"
          className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40 scroll-mt-24"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="By industry"
              id="industries-h"
              title={
                <>
                  Pick your industry.{" "}
                  <span className="text-white/30">See who AI names first.</span>
                </>
              }
              intro="Each industry has its own board and its own playbook. Open yours."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {INDUSTRIES.map((ind) => (
                <LinkCard
                  key={ind.slug}
                  href={`/who-owns-ai/${ind.slug}`}
                  title={ind.name}
                  blurb={ind.prompt}
                />
              ))}
            </div>
            <p className="mt-12 text-[10px] font-mono uppercase tracking-widest text-white/40 max-w-3xl leading-relaxed">
              Illustrative model &middot; brands are fictional &middot; shares are
              modeled estimates, not measured rankings. Your real numbers come from
              the diagnostic.
            </p>
          </div>
        </section>

        {/* ════════════ HOW THE SCORE WORKS ════════════ */}
        <section aria-labelledby="how-h" className="bg-[#050505] py-24 md:py-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="The methodology"
              id="how-h"
              title="How the score works."
              intro="Not an opinion — the output of querying live AI models with real buyer questions. Three signals combine into one score."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {SIGNALS.map((s) => (
                <InfoCard
                  key={s.n}
                  index={`Signal ${s.n}`}
                  title={s.title}
                  body={s.body}
                />
              ))}
            </div>
            <p className="mt-12 text-base md:text-lg text-white/45 font-light leading-relaxed max-w-2xl">
              The same discipline runs behind every engagement.{" "}
              <Link
                href="/about#measurement"
                className="text-[#d4620a] hover:text-white transition-colors font-medium"
              >
                See the measurement layer &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ════════════ WHY IT MATTERS ════════════ */}
        <section aria-labelledby="why-h" className="bg-[#050505] py-24 md:py-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="The stakes"
              id="why-h"
              title={
                <>
                  One name in the answer.{" "}
                  <span className="text-white/30">
                    Everyone else competes for memory.
                  </span>
                </>
              }
            />
            <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed max-w-3xl">
              On a ranked list, tenth place still gets a click. In an AI answer,
              there is no tenth place &mdash; and leadership compounds. The first
              business a model learns to trust becomes the default answer, which
              earns more citations, which reinforce the trust. Standings are
              sticky, so the early position is worth fighting for.
            </p>

            <div className="mt-16 md:mt-24 border-l-2 border-[#d4620a] pl-8 md:pl-10">
              <blockquote className="text-3xl md:text-5xl font-light leading-[1.05] tracking-tighter text-white max-w-4xl">
                Search showed ten options. AI returns one recommendation. The
                chart that matters now has one line everyone reads first.
              </blockquote>
              <p className="mt-8 text-[10px] font-mono uppercase tracking-widest text-white/40">
                The Strategi thesis
              </p>
            </div>
          </div>
        </section>

        {/* ════════════ RELATED INSTRUMENTS ════════════ */}
        <section
          aria-labelledby="related-h"
          className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="The measurement layer"
              id="related-h"
              title="More instruments for the recommendation economy."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {LIVE_TOOLS.filter((t) => t.id !== "who-owns-ai").map((t) => (
                <LinkCard
                  key={t.id}
                  href={t.href}
                  kicker={t.kicker}
                  title={t.name}
                  blurb={t.desc}
                  pill={t.availability}
                />
              ))}
            </div>
            <p className="mt-12 text-base md:text-lg text-white/45 font-light leading-relaxed max-w-2xl">
              Strategi is the advisory and measurement layer for AI discovery.{" "}
              <Link
                href="/about"
                className="text-[#d4620a] hover:text-white transition-colors font-medium"
              >
                Read the thesis &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ════════════ CTA ════════════ */}
        <section
          aria-labelledby="cta-h"
          className="relative bg-[#050505] border-t border-white/10 py-24 md:py-40 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-[#d4620a]/[0.03] blur-[140px] pointer-events-none"
          />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <h2
              id="cta-h"
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white max-w-4xl"
            >
              Want to know where you actually{" "}
              <span className="text-[#d4620a]">rank?</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-white/50 font-light max-w-xl leading-relaxed">
              The boards are illustrative. Your real standings come from querying
              live models with the questions your buyers ask. Every engagement
              begins with that AI Visibility Diagnostic.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-[#050505] text-sm font-bold px-8 py-5 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
              >
                Start your diagnostic &rarr;
              </Link>
              <Link
                href="/about"
                className="border border-white/20 text-white text-sm font-medium px-8 py-5 hover:border-white/50 transition-colors text-center"
              >
                How we measure it
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
