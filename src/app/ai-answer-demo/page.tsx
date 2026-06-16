import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { SITE_URL, CONTACT_EMAIL, LIVE_TOOLS } from "@/lib/site";
import { JsonLd, LinkCard, InfoCard } from "@/components/geo/Editorial";
import Demo from "./Demo";

const PAGE_URL = `${SITE_URL}/ai-answer-demo`;
const OG_IMAGE = `${SITE_URL}/strategi.png`;

export const metadata: Metadata = {
  title: "The AI Answer Demo — What AI Says About You",
  description:
    "Ask a real buying question and watch what ChatGPT, Gemini, and Perplexity return. AI names two or three businesses and leaves the rest out. See the Before/After contrast when Strategi puts you in the answer.",
  keywords: [
    "AI answer demo",
    "what does AI say about my business",
    "ChatGPT recommendation",
    "Gemini recommendation",
    "Perplexity citation",
    "AI visibility",
    "AI Presence",
    "generative engine optimization",
    "GEO",
    "get recommended by AI",
    "AI search results",
    "why isn't my business in AI answers",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Strategi",
    title: "The AI Answer Demo — See What AI Says About Your Category",
    description:
      "Ask a real buying question and watch what ChatGPT, Gemini, and Perplexity return — and who gets left out of the answer.",
    images: [
      { url: OG_IMAGE, width: 1200, height: 1200, alt: "Strategi — The AI Answer Demo" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloStrategi",
    creator: "@HelloStrategi",
    title: "The AI Answer Demo — See What AI Says About Your Category",
    description:
      "Ask a real buying question and watch what ChatGPT, Gemini, and Perplexity return — and who gets left out of the answer.",
    images: [OG_IMAGE],
  },
};

const DEMO_FAQ = [
  {
    q: "Is this real AI output?",
    a: "No. The AI Answer Demo is an illustrative simulation, not live AI output. The questions are real buying questions, but the answers are hand-written to show how AI engines behave: they synthesize one recommendation or a curated set of two or three names, rather than returning a list of links. Every brand shown is fictional and used only as an example. We built it this way so the mechanic is unmistakable: an answer either includes your business or it does not.",
  },
  {
    q: "Why isn't my business in the answer?",
    a: "Because AI does not rank pages, it models entities and weighs trust. When you are absent from an AI answer, it is almost always one of three things: your business is not a clearly defined entity the model recognizes, your website is not structured for machines to extract and attribute your claims, or you lack the corroborated third-party signals AI cross-references before it recommends. A business that ranks well on Google can still be invisible to ChatGPT. The two systems measure completely different things.",
  },
  {
    q: "How do I get included in AI answers?",
    a: "Three signals decide inclusion: entity clarity (one canonical name, one clear category, unambiguous differentiators), structural readability (schema, semantic HTML, and architecture that lets a model extract and cite you), and authoritative corroboration (consistent, verifiable mentions across the third-party sources AI trusts). Strategi engineers all three. Every engagement begins with an AI Visibility Diagnostic that queries the major models with the questions your buyers actually ask, then maps the distance between where you are and consistent recommendation.",
  },
  {
    q: "Do ChatGPT, Gemini, and Perplexity really differ this much?",
    a: "Yes. They draw on different training data, different live sources, and different ranking of signals, so the same buying question can surface different businesses on each. Perplexity leans heavily on citable web sources; ChatGPT and Gemini synthesize from a broader internal representation. That is exactly why AI visibility has to be engineered and measured across every engine, not optimized for one.",
  },
];

function Schemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strategi", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "The AI Answer Demo", item: PAGE_URL },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "The AI Answer Demo — See What AI Says About Your Category",
    description:
      "An interactive, illustrative simulation of what ChatGPT, Gemini, and Perplexity return for real buying questions — and how Strategi changes who appears in the answer.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    inLanguage: "en-US",
    primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
    datePublished: "2026-06-03",
    dateModified: "2026-06-03",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: DEMO_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return <JsonLd schema={[breadcrumb, webPage, faq]} />;
}

// The three inclusion signals — rendered server-side so they are crawlable.
const SIGNALS: { n: string; title: string; body: string }[] = [
  {
    n: "i.",
    title: "Entity clarity",
    body: "AI models entities, not keywords — one canonical name and one clear category, or the model leaves you out.",
  },
  {
    n: "ii.",
    title: "Structural readability",
    body: "Schema, semantic HTML, and clean hierarchy decide how much a model can extract; beautiful to a human can be invisible to AI.",
  },
  {
    n: "iii.",
    title: "Authoritative corroboration",
    body: "Your claim counts only when the third-party sources AI trusts corroborate it — consistent mentions move share, not on-page tricks.",
  },
];

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

export default function AiAnswerDemoPage() {
  // Other live tools to cross-link (exclude this page).
  const relatedTools = LIVE_TOOLS.filter((t) => t.id !== "ai-answer-demo");

  return (
    <>
      <Schemas />
      <div className="bg-[#050505]">
        {/* ════════════ HERO ════════════ */}
        <section
          className="relative w-full min-h-[80vh] overflow-hidden flex flex-col"
          aria-labelledby="demo-h1"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4620a]/[0.025] blur-[140px] pointer-events-none z-0"
          />
          <div className="flex-1 flex flex-col justify-between w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-36 pb-10 md:pb-14 relative z-10">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/30">
              The AI Answer Demo &mdash; Illustrative simulation
            </p>

            <div className="my-auto py-12">
              <h1
                id="demo-h1"
                className="font-bold tracking-tighter leading-[0.88] text-white text-[clamp(2.75rem,8vw,7.5rem)] max-w-[15ch]"
              >
                See what AI says about{" "}
                <span className="text-[#d4620a]">your category.</span>
              </h1>
            </div>

            <div className="border-t border-white/10 pt-7 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <p className="text-sm md:text-base text-white/45 leading-relaxed max-w-md font-light">
                Ask a real buying question and watch ChatGPT, Gemini, and
                Perplexity answer. They don&apos;t hand back ten links &mdash;
                they name two or three businesses and leave the rest out. Toggle{" "}
                <span className="text-white/85">Before</span> and{" "}
                <span className="text-[#d4620a]">After Strategi</span> to see the
                difference.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto shrink-0">
                <Link
                  href="/#contact"
                  className="bg-white text-[#050505] text-sm font-bold px-7 py-4 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
                >
                  Find out if AI recommends you &rarr;
                </Link>
                <a
                  href="#demo"
                  className="border border-white/20 text-white text-sm font-medium px-7 py-4 hover:border-white/50 transition-colors text-center"
                >
                  Run the demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ THE DEMO (client island) ════════════ */}
        <section
          id="demo"
          aria-labelledby="demo-h2"
          className="bg-[#050505] py-24 md:py-40 scroll-mt-24"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="Interactive"
              id="demo-h2"
              title={
                <>
                  Ask a question. Read the answer.{" "}
                  <span className="text-white/30">Find yourself missing.</span>
                </>
              }
              intro="A real buying question, the kind of answer AI actually returns, and a Before / After Strategi toggle. Every brand shown is fictional and illustrative."
            />
            <Demo />
          </div>
        </section>

        {/* ════════════ WHY THIS HAPPENS ════════════ */}
        <section
          id="why"
          aria-labelledby="why-h2"
          className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40 scroll-mt-24"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="The mechanic"
              id="why-h2"
              title={
                <>
                  AI returns answers, not lists.{" "}
                  <span className="text-white/30">That changes everything.</span>
                </>
              }
              intro="You used to type a query and choose from ten links. Now AI returns one answer — a name, or a curated few. The question is no longer “do we rank?” but “are we in the answer?” Three signals decide inclusion."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {SIGNALS.map((s) => (
                <InfoCard
                  key={s.n}
                  index={s.n}
                  title={s.title}
                  body={s.body}
                />
              ))}
            </div>

            <p className="mt-12 text-base md:text-lg text-white/45 font-light leading-relaxed max-w-xl">
              This is how Strategi measures and engineers AI visibility.{" "}
              <Link
                href="/about#measurement"
                className="text-white/85 hover:text-[#d4620a] transition-colors underline underline-offset-4 decoration-white/30"
              >
                See the measurement layer &rarr;
              </Link>
            </p>

            <figure className="mt-16 md:mt-24 border-l-2 border-[#d4620a] pl-6 md:pl-8 max-w-3xl">
              <blockquote className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-white">
                &ldquo;SEO put you on a list. AI puts one business in the answer.
                The first business AI learns to trust in your category
                wins.&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[10px] font-mono uppercase tracking-widest text-white/40">
                The Strategi thesis
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ════════════ FAQ ════════════ */}
        <section
          id="faq"
          aria-labelledby="faq-h2"
          className="bg-[#050505] py-24 md:py-40 scroll-mt-24"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead eyebrow="Q & A" id="faq-h2" title="About this demo." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {DEMO_FAQ.map((item) => (
                <InfoCard key={item.q} title={item.q} body={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ RELATED TOOLS ════════════ */}
        <section
          id="tools"
          aria-labelledby="tools-h2"
          className="bg-white/[0.01] border-y border-white/5 py-24 md:py-40 scroll-mt-24"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHead
              eyebrow="The measurement layer"
              id="tools-h2"
              title={
                <>
                  More ways to see{" "}
                  <span className="text-white/30">
                    how AI ranks your category.
                  </span>
                </>
              }
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {relatedTools.map((p) => (
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
            <p className="mt-12 text-base md:text-lg text-white/45 font-light leading-relaxed max-w-xl">
              Strategi is the advisory and measurement layer for AI discovery.{" "}
              <Link
                href="/about"
                className="text-white/85 hover:text-[#d4620a] transition-colors underline underline-offset-4 decoration-white/30"
              >
                Read the thesis &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ════════════ CTA ════════════ */}
        <section
          aria-labelledby="cta-h2"
          className="relative bg-[#050505] border-t border-white/10 py-24 md:py-40 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-[#d4620a]/[0.03] blur-[140px] pointer-events-none"
          />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <h2
              id="cta-h2"
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white max-w-4xl"
            >
              This was a simulation. Your real answer is one query away{" "}
              <span className="text-[#d4620a]">&mdash; let&apos;s run it.</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-white/50 font-light max-w-xl leading-relaxed">
              Every engagement begins with an AI Visibility Diagnostic. We query
              the major AI platforms with the questions your buyers actually ask,
              and show you exactly what they return today. No pitch &mdash; a
              clear-eyed read on where you stand inside AI.
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
