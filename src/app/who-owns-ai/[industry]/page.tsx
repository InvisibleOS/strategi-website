import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { INDUSTRIES, getIndustry } from "@/lib/industries";
import { IndustryBoard } from "@/components/geo/Leaderboard";
import { JsonLd, LinkCard, InfoCard } from "@/components/geo/Editorial";

const OG_IMAGE = `${SITE_URL}/strategi.png`;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  const { name } = industry;
  const url = `${SITE_URL}/who-owns-ai/${slug}`;
  const title = `Who Owns AI in ${name}? — GEO for ${name}`;
  const description = `${industry.intro} See how Strategi engineers AI visibility (GEO) for ${name} so AI recommends you when buyers ask.`;

  return {
    title,
    description,
    keywords: [
      `GEO for ${name}`,
      `AI visibility for ${name}`,
      `who owns AI in ${name}`,
      `${name} GEO`,
      `generative engine optimization ${name}`,
      `AI SEO for ${name}`,
      `get recommended by AI ${name}`,
      `${name} AI search optimization`,
      "AI recommendations",
      "AI Presence",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: "Strategi",
      title: `${title} | Strategi`,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 1200, alt: `GEO for ${name} — Strategi` }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@HelloStrategi",
      creator: "@HelloStrategi",
      title: `${title} | Strategi`,
      description,
      images: [OG_IMAGE],
    },
  };
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

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const { name } = industry;
  const url = `${SITE_URL}/who-owns-ai/${slug}`;
  const others = INDUSTRIES.filter((i) => i.slug !== slug);

  const faq = [
    {
      q: `What is GEO for ${name}?`,
      a: `Generative Engine Optimization (GEO) for ${name} is the practice of structuring your business so AI engines — ChatGPT, Gemini, Perplexity, and Claude — understand it, trust it, and recommend it when buyers ask ${name.toLowerCase()} questions. It is not keyword SEO. It is entity clarity, machine-readable structure, and corroborated authority engineered for the way AI selects an answer.`,
    },
    {
      q: `How do I get recommended by AI in ${name}?`,
      a: `Three signals decide inclusion: entity clarity, structural readability, and authoritative corroboration. Strategi engineers all three for ${name} and measures the result. Every engagement begins with an AI Visibility Diagnostic that queries the major models with the questions your buyers actually ask.`,
    },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strategi", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Who Owns AI?", item: `${SITE_URL}/who-owns-ai` },
        { "@type": "ListItem", position: 3, name: name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: `Who Owns AI in ${name}? — GEO for ${name}`,
      description: `${industry.intro} How Strategi engineers AI visibility for ${name}.`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@type": "Thing", name: `AI visibility for ${name}` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      serviceType: "Generative Engine Optimization",
      name: `GEO for ${name} — AI Visibility Advisory`,
      description: `Strategi engineers the entity clarity, machine-readable structure, and authoritative corroboration that make AI engines recommend ${name.toLowerCase()} businesses when buyers ask.`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Place", name: "Worldwide" },
      audience: { "@type": "BusinessAudience", audienceType: name },
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${url}#leaderboard`,
      name: `${name} — illustrative AI standings`,
      description:
        "Example category standings demonstrating Strategi's AI Recommendation Share methodology. Brand names are fictional and shares are modeled, not measured.",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: industry.leaders.length,
      itemListElement: industry.leaders.map((l, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: l.brand,
        item: {
          "@type": "Thing",
          name: l.brand,
          description: `Fictional example entity. Illustrative AI Recommendation Share: ${l.share}%.`,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd schema={schema} />

      <div className="bg-[#050505]">
        {/* ════════════ HERO ════════════ */}
        <section
          className="relative w-full min-h-[80vh] overflow-hidden flex flex-col"
          aria-labelledby="industry-h1"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4620a]/[0.03] blur-[140px] pointer-events-none z-0"
          />
          <div className="flex-1 flex flex-col justify-between w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-36 pb-12 md:pb-16 relative z-10">
            {/* breadcrumb-ish kicker */}
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/30">
              <Link href="/who-owns-ai" className="hover:text-white transition-colors">
                Who Owns AI?
              </Link>{" "}
              <span className="text-white/20">/</span> GEO for {name}
            </p>

            <div className="my-auto py-12">
              <h1
                id="industry-h1"
                className="font-bold tracking-tighter leading-[0.88] text-white text-[clamp(2.75rem,8vw,7.5rem)] max-w-[15ch]"
              >
                Who owns AI in{" "}
                <span className="text-[#d4620a]">{name}?</span>
              </h1>
            </div>

            <div className="border-t border-white/10 pt-7 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <p className="text-sm md:text-base text-white/45 leading-relaxed max-w-md font-light">
                {industry.intro}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto shrink-0">
                <Link
                  href="/#contact"
                  className="bg-white text-[#050505] text-sm font-bold px-7 py-4 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
                >
                  See your real standings &rarr;
                </Link>
                <a
                  href="#board"
                  className="border border-white/20 text-white text-sm font-medium px-7 py-4 hover:border-white/50 transition-colors text-center"
                >
                  View the {name} board
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ THE BOARD ════════════ */}
        <section
          id="board"
          aria-labelledby="board-h"
          className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40 scroll-mt-24"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="The standings"
              id="board-h"
              title={
                <>
                  Who AI recommends in{" "}
                  <span className="text-white/30">{name}.</span>
                </>
              }
              intro="An illustrative board. In the answer, the leader takes the largest share and everyone below competes for what remains."
            />
            <IndustryBoard industry={industry} />
            <div className="mt-10 border border-[#d4620a]/30 bg-[#d4620a]/[0.04] p-5 md:p-6">
              <p className="text-sm text-white/70 font-light leading-relaxed max-w-3xl">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4620a] mr-2">
                  Illustrative
                </span>
                Brand names are fictional and shares are modeled estimates, not a
                measurement of any real {name.toLowerCase()} business. Your real
                standings come from querying live models &mdash; that is the
                diagnostic.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════ HOW WE GEO-OPTIMIZE ════════════ */}
        <section
          aria-labelledby="approach-h"
          className="bg-[#050505] py-24 md:py-40"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow={`GEO for ${name}`}
              id="approach-h"
              title={
                <>
                  How we make AI recommend{" "}
                  <span className="text-white/30">your {name.toLowerCase()} business.</span>
                </>
              }
              intro="Not keywords. We engineer the three signals AI weighs before it puts a name in the answer — tuned to how your buyers ask."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {industry.approach.map((a, i) => (
                <InfoCard
                  key={a.title}
                  index={String(i + 1).padStart(2, "0")}
                  title={a.title}
                  body={a.body}
                />
              ))}
            </div>
            <p className="mt-12 text-base md:text-lg text-white/45 font-light leading-relaxed max-w-2xl">
              The full method runs behind every engagement.{" "}
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
        <section
          aria-labelledby="why-h"
          className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="Why it matters"
              id="why-h"
              title={`Why ${name} is being decided inside AI.`}
            />
            <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed max-w-3xl">
              {industry.why}
            </p>
            <div className="mt-16 md:mt-24 border-l-2 border-[#d4620a] pl-8 md:pl-10">
              <blockquote className="text-3xl md:text-5xl font-light leading-[1.05] tracking-tighter text-white max-w-4xl">
                In {name}, AI returns one answer. The business it names first
                wins; everyone else competes for memory.
              </blockquote>
              <p className="mt-8 text-[10px] font-mono uppercase tracking-widest text-white/40">
                The Strategi thesis
              </p>
            </div>
          </div>
        </section>

        {/* ════════════ FAQ ════════════ */}
        <section aria-labelledby="faq-h" className="bg-[#050505] py-24 md:py-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead eyebrow="Q & A" id="faq-h" title={`GEO for ${name}.`} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {faq.map((item) => (
                <InfoCard key={item.q} title={item.q} body={item.a} />
              ))}
            </div>
            <p className="mt-10 text-base md:text-lg text-white/45 font-light leading-relaxed max-w-2xl">
              Go deeper on how AI discovery works.{" "}
              <Link
                href="/blogs"
                className="text-[#d4620a] hover:text-white transition-colors font-medium"
              >
                Read the latest insights &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ════════════ OTHER INDUSTRIES ════════════ */}
        <section
          aria-labelledby="others-h"
          className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="Who Owns AI?"
              id="others-h"
              title="Explore another industry."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {others.map((o) => (
                <LinkCard key={o.slug} href={`/who-owns-ai/${o.slug}`} title={o.name} />
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/who-owns-ai"
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/55 hover:text-[#d4620a] transition-colors"
              >
                &larr; The full Who Owns AI? index
              </Link>
            </div>
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
              Find out where you rank in{" "}
              <span className="text-[#d4620a]">{name}.</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-white/50 font-light max-w-xl leading-relaxed">
              Every engagement begins with an AI Visibility Diagnostic. We query
              the major AI platforms with the questions your {name.toLowerCase()}{" "}
              buyers ask, and show you exactly who they name today.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-[#050505] text-sm font-bold px-8 py-5 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
              >
                Start your diagnostic &rarr;
              </Link>
              <Link
                href="/who-owns-ai"
                className="border border-white/20 text-white text-sm font-medium px-8 py-5 hover:border-white/50 transition-colors text-center"
              >
                See all industries
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
