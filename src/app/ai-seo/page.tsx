import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://strategi.is";
const PAGE_URL = `${SITE_URL}/ai-seo`;
const OG_IMAGE = `${SITE_URL}/strategi.png`;

export const metadata: Metadata = {
  title: "AI SEO Advisory for Established Businesses",
  description:
    "AI SEO is the practice of getting recommended by ChatGPT, Gemini, and Perplexity. Strategi engineers AI Presence so AI cites you, not your competitors.",
  keywords: [
    "AI SEO",
    "AI SEO agency",
    "AI SEO advisory",
    "AI search optimization",
    "AI Presence",
    "generative engine optimization",
    "GEO",
    "GEO agency",
    "answer engine optimization",
    "AEO",
    "ChatGPT SEO",
    "Perplexity SEO",
    "Gemini SEO",
    "AI visibility",
    "AI citation optimization",
    "machine-readable website",
    "how to rank in AI answers",
    "how to get cited by ChatGPT",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Strategi",
    title: "AI SEO Advisory for Established Businesses | Strategi",
    description:
      "AI SEO is the practice of getting recommended by ChatGPT, Gemini, and Perplexity. Strategi engineers AI Presence so AI cites you, not your competitors.",
    images: [
      { url: OG_IMAGE, width: 1200, height: 1200, alt: "Strategi AI SEO Advisory" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloStrategi",
    creator: "@HelloStrategi",
    title: "AI SEO Advisory for Established Businesses | Strategi",
    description:
      "AI SEO is the practice of getting recommended by ChatGPT, Gemini, and Perplexity. Strategi engineers AI Presence so AI cites you, not your competitors.",
    images: [OG_IMAGE],
  },
};

const FAQ_ITEMS = [
  {
    q: "What is AI SEO?",
    a: "AI SEO is the practice of structuring a business so that AI engines such as ChatGPT, Gemini, Perplexity, and Claude understand it, trust it, and recommend it inside the answers they generate. It also covers AI features inside traditional search, including Google AI Overviews. The mechanics are different from SEO. Traditional SEO competes for a position on a list of links. AI SEO competes for inclusion inside a synthesised answer. The dominant signals shift from backlinks and keyword density to entity clarity, structured data, semantic consistency across the open web, third-party corroboration, and the depth and citability of your content. A page that ranks #1 on Google can still be invisible to ChatGPT, and vice versa.",
  },
  {
    q: "How is AI SEO different from traditional SEO?",
    a: "Traditional SEO is built for ranked lists. AI SEO is built for synthesised answers. The 2024 Princeton GEO research paper showed structured optimisation for generative engines lifts visibility by up to 40%, with mechanics that have little overlap with classical SEO. SEO weighs backlink graphs, keyword targeting, and on-page CTR. AI SEO weighs entity definition, schema completeness, citation density across third-party sources, and the structural readability of your content for language models. The same page can excel on one and fail on the other. AI SEO is also faster-moving. AI models retrain and re-index continuously, so changes to your AI representation can appear within weeks, not the months it typically takes for traditional SEO.",
  },
  {
    q: "How do I get my product recommended in AI answers?",
    a: "Follow four steps in order. First, run an AI Visibility Audit by querying ChatGPT, Gemini, Perplexity, and Claude with the questions your buyers actually ask. Document what AI says about you, your competitors, and your category. Second, fix entity clarity. Use one canonical name everywhere, define your category, articulate your differentiators in language a model can parse without ambiguity. Third, restructure your website for machine readability. Implement Article, Service, FAQPage, BreadcrumbList, and HowTo schema. Use clear H2/H3 hierarchy, short paragraphs, lists, and tables. Fourth, build the authority layer. AI engines cross-reference. Get your business cited consistently across third-party sources, structured directories, and authoritative publications. Citation density and source corroboration are what move recommendation share, not on-page tricks.",
  },
  {
    q: "Is AI SEO the same as GEO or AEO?",
    a: "The terms substantially overlap. AI SEO, Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO) all describe the same shift from ranked lists to AI-synthesised answers. GEO was coined in academic research in November 2023 by Aggarwal et al. at Princeton. AEO predates AI engines and originally referred to optimising for featured snippets in Google. AI SEO is the broader umbrella that has emerged as the most-searched term in 2026. Strategi treats all three as facets of a single broader practice we call AI Presence. AI SEO is one part of the work. The acronym matters less than the underlying mechanics: entity clarity, structural readability, and authoritative trust signals.",
  },
  {
    q: "Are SEO rankings still relevant in the AI era?",
    a: "SEO rankings still matter, but their value is shrinking. According to a 2026 Ahrefs study of 300,000 keywords, Google AI Overviews reduce click-through rates on top-ranking pages by 58%. The Conductor 2026 AEO/GEO Benchmarks Report found Google AI Overviews now appear on 25% of searches across 13,770 enterprise domains. Pages still rank, but more searches end inside an AI answer instead of a click to a website. Traditional SEO continues to drive intent-rich traffic at the bottom of the funnel. The discovery layer at the top of the funnel is migrating to AI. The right strategy in 2026 is to maintain SEO for converting traffic and add AI SEO to capture the discovery layer that AI now dominates.",
  },
  {
    q: "What is the difference between an AI SEO agency and a GEO agency?",
    a: "There is no functional difference in scope. Both target AI inclusion. The difference is positioning. Most GEO agencies are former SEO firms with a relabeled service. They sell the same keyword playbook under a new name. Most AI SEO agencies position as broader, covering both AI search engines and AI features inside traditional search. Strategi is neither a GEO agency nor an SEO firm with a new acronym. We are a strategic advisory built around AI Presence, which is a more comprehensive practice that includes AI SEO and GEO but extends to entity architecture, brand strategy, and continuous monitoring across every AI surface.",
  },
  {
    q: "How long does AI SEO take to show results?",
    a: "Most engagements show measurable changes within 60 to 90 days. AI models retrain and re-crawl on faster cycles than Google indexes new content, so changes register sooner. The Strategi methodology front-loads the highest-leverage interventions, entity clarity, schema architecture, and content systems. These are typically the fastest to register with AI systems. Authority work and citation building compound more slowly, often visible at the 90 to 180 day mark. Comprehensive results across all major AI platforms develop over 3 to 6 months of continuous execution as your authority compounds and AI models update with new training data.",
  },
  {
    q: "Will AI SEO replace traditional SEO?",
    a: "No, but the centre of gravity is shifting. Traditional SEO still wins intent-rich traffic at the conversion stage. AI SEO is winning the discovery layer at the awareness stage, where prospects first hear about a category. The Conductor 2026 report found AI referral traffic is currently 1.08% of total web traffic on average, growing about 1% month over month. ChatGPT alone accounts for 87.4% of that AI referral volume. The volume looks small today but the growth curve is steep, and the qualitative impact is larger than the volume suggests because every AI recommendation displaces a competitor. The honest answer: invest in both, weight your investment toward AI SEO if your category is shifting fast.",
  },
  {
    q: "What kind of business benefits most from AI SEO?",
    a: "Established businesses with genuine substance and category credibility. AI engines reward verifiable authority. They cross-reference claims across multiple sources before they recommend. If your business has a track record, a clear category position, real customers, and consistent third-party mentions, AI SEO compounds those signals into reliable inclusion. AI SEO is not a growth hack for early-stage startups without a body of evidence behind them. There is little for AI to corroborate. YMYL industries (Your Money, Your Life: legal, finance, healthcare) show the biggest AI adoption. Conductor's 2026 data shows legal at 11.9x the average AI traffic growth rate, finance and health at 2.9x.",
  },
  {
    q: "What does the AI SEO engagement begin with?",
    a: "Every Strategi engagement begins with an AI Visibility Diagnostic. We query every major AI platform (ChatGPT, Gemini, Perplexity, Claude) with the actual questions your buyers ask. We document what AI says about you, what it says about your competitors, and where the gaps, inaccuracies, and blind spots are. The diagnostic produces an AI Visibility Report. This report maps the precise distance between where you are today and consistent recommendation in your category. It is the foundation for every subsequent decision. Without it, AI SEO interventions are guesswork, and most agencies skip the diagnostic because they do not have the playbook to act on what it reveals.",
  },
];

function Schemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strategi", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "AI SEO", item: PAGE_URL },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI SEO Advisory",
    alternateName: [
      "Generative Engine Optimization",
      "Answer Engine Optimization",
      "AI Search Optimization",
    ],
    serviceType: "AI SEO",
    description:
      "AI SEO advisory for established businesses. Strategi engineers the entity clarity, structural readability, and authoritative trust signals that make AI engines (ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews) consistently recommend a business when it answers.",
    provider: {
      "@type": "Organization",
      name: "Strategi",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/strategi.png` },
      sameAs: [
        "https://www.linkedin.com/company/strategigtm",
        "https://x.com/HelloStrategi",
      ],
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Established businesses with category credibility",
    },
    url: PAGE_URL,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "The Strategi System",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Visibility Audit" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Positioning & Clarity Engineering" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Structuring for AI Readability" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Systems for AI Inclusion" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Authority & Trust Layer Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Continuous Optimization" } },
      ],
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to get your business recommended in AI answers",
    description:
      "A six-phase methodology for getting a business recommended by ChatGPT, Gemini, Perplexity, and Claude.",
    totalTime: "P6M",
    step: [
      { "@type": "HowToStep", position: 1, name: "Diagnose", text: "Audit how AI currently represents your business by querying every major AI platform with the questions your customers ask." },
      { "@type": "HowToStep", position: 2, name: "Define", text: "Define how your business should be understood by machines through entity definition, category mapping, and a Machine Positioning Statement." },
      { "@type": "HowToStep", position: 3, name: "Structure", text: "Restructure your website for AI comprehension via schema, content hierarchy, and semantic structuring." },
      { "@type": "HowToStep", position: 4, name: "Build", text: "Produce structured content designed to be cited by AI, plus external trust signals through strategic information distribution." },
      { "@type": "HowToStep", position: 5, name: "Reinforce", text: "Build self-reinforcing authority loops where each AI citation increases the probability of future citations." },
      { "@type": "HowToStep", position: 6, name: "Monitor", text: "Track AI recommendation status across every major model and respond to shifts with targeted interventions." },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI SEO Advisory for Established Businesses",
    url: PAGE_URL,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: "Strategi", url: SITE_URL },
    primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
    about: { "@type": "Thing", name: "AI SEO" },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    datePublished: "2026-04-25",
    dateModified: "2026-04-25",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Editorial primitives
// ─────────────────────────────────────────────────────────────────────────────

function SectionHeader({
  number,
  eyebrow,
  title,
  id,
}: {
  number: string;
  eyebrow: string;
  title: string;
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

function SectionRule() {
  return (
    <div className="my-24 md:my-32 grid grid-cols-12 gap-6">
      <div className="col-span-2 h-px bg-[#d4620a]" />
      <div className="col-span-10 h-px bg-white/10" />
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="hidden md:block md:col-span-2" aria-hidden="true" />
      <div className="col-span-12 md:col-span-9 lg:col-span-8 space-y-5 text-lg md:text-xl text-white/85 leading-relaxed font-light">
        {children}
      </div>
    </div>
  );
}

function PullQuote({ children, attribution }: { children: React.ReactNode; attribution?: string }) {
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

// ─────────────────────────────────────────────────────────────────────────────

export default function AiSeoPage() {
  return (
    <>
      <Schemas />

      <main className="relative bg-[#050505] min-h-screen text-white">
        {/* Atmospheric glow */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#d4620a]/[0.025] blur-[160px] pointer-events-none"
        />

        {/* Top spec bar */}
        <div className="relative z-10 border-b border-white/[0.06]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-white/55">
            <span>AI SEO Advisory</span>
            <span className="hidden sm:inline">Edition 2026.01</span>
            <span>strategi.is/ai-seo</span>
          </div>
        </div>

        <article
          className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 pb-32"
          aria-labelledby="ai-seo-h1"
        >
          {/* Breadcrumb */}
          <nav
            className="mt-10 mb-12 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="text-white/55 hover:text-white transition-colors">
              Strategi
            </Link>
            <span aria-hidden="true" className="text-white/30">/</span>
            <span className="text-white/85">AI SEO</span>
          </nav>

          {/* ───────── §01 HERO ───────── */}
          <section className="grid grid-cols-12 gap-6 mb-12 md:mb-20">
            <div className="col-span-12 md:col-span-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d4620a]">
                §01
              </p>
              <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
                Definition
              </p>
            </div>
            <div className="col-span-12 md:col-span-10">
              <h1
                id="ai-seo-h1"
                className="font-bold tracking-tighter leading-[0.92] text-white text-[clamp(3rem,8vw,7.5rem)]"
              >
                AI SEO is how
                <br />
                established businesses
                <br />
                <span className="text-[#d4620a]">get recommended</span>
                <br />
                by AI.
              </h1>
            </div>
          </section>

          {/* Abstract / TL;DR */}
          <aside
            aria-label="Abstract"
            className="grid grid-cols-12 gap-6 mb-20 md:mb-28"
          >
            <div className="col-span-12 md:col-span-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
                Abstract
              </p>
            </div>
            <div className="col-span-12 md:col-span-10">
              <p className="text-xl md:text-2xl text-white/90 font-light leading-snug max-w-[60ch] tracking-tight">
                AI SEO is the discipline of structuring a business so AI
                engines cite it inside the answers they generate. ChatGPT now
                reaches 900 million weekly users. Google AI Overviews appear
                on 25% of searches and reduce top-rank click-through by 58%.
                Strategi engineers AI Presence through six phases so AI
                chooses you, not your competitors.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center min-h-[48px] bg-white text-[#050505] text-xs font-bold uppercase tracking-widest px-8 hover:bg-[#d4620a] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                >
                  Find out if AI recommends you &rarr;
                </Link>
                <a
                  href="#methodology"
                  className="inline-flex items-center justify-center min-h-[48px] border border-white/20 text-xs font-medium uppercase tracking-widest text-white/85 px-8 hover:border-white/40 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                >
                  See the methodology
                </a>
              </div>
            </div>
          </aside>

          <SectionRule />

          {/* ───────── §02 HERO STAT MOMENT ───────── */}
          <section className="mb-24" aria-labelledby="stats-h2">
            <SectionHeader
              number="02"
              eyebrow="Why now"
              title="The discovery layer is migrating to AI."
              id="stats-h2"
            />

            {/* The hero stat */}
            <div className="grid grid-cols-12 gap-6 mb-16">
              <div className="hidden md:block md:col-span-2" aria-hidden="true" />
              <div className="col-span-12 md:col-span-10">
                <a
                  href="https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]"
                >
                  <p className="font-bold tracking-tighter leading-none text-[#d4620a] text-[clamp(5rem,16vw,16rem)] tabular-nums">
                    900M
                  </p>
                  <p className="mt-4 text-lg md:text-2xl text-white/85 font-light max-w-2xl leading-snug">
                    weekly active users on ChatGPT as of February 2026,
                    more than double the 400 million reported a year earlier.
                  </p>
                  <p className="mt-3 text-[10px] font-mono uppercase tracking-widest text-white/50 group-hover:text-[#d4620a] transition-colors">
                    OpenAI announcement &middot; TechCrunch &rarr;
                  </p>
                </a>
              </div>
            </div>

            {/* Supporting stats: tabular, not cards */}
            <div className="grid grid-cols-12 gap-6">
              <div className="hidden md:block md:col-span-2" aria-hidden="true" />
              <div className="col-span-12 md:col-span-10">
                <dl className="border-t border-white/15">
                  {[
                    {
                      v: "58%",
                      l: "drop in click-through on top-ranking pages when Google AI Overviews appear",
                      s: "Ahrefs (300k keywords)",
                      h: "https://www.medianama.com/2026/02/223-google-ai-overviews-click-through-rates-58-study/",
                    },
                    {
                      v: "40%",
                      l: "visibility lift in generative engines from structured GEO optimisation",
                      s: "Princeton GEO, KDD '24",
                      h: "https://arxiv.org/abs/2311.09735",
                    },
                    {
                      v: "25%",
                      l: "of Google searches now trigger an AI Overview",
                      s: "Conductor 2026 (13,770 domains)",
                      h: "https://www.conductor.com/academy/aeo-geo-benchmarks-report/",
                    },
                    {
                      v: "87.4%",
                      l: "of all AI referral traffic comes from ChatGPT alone",
                      s: "Conductor 2026",
                      h: "https://www.conductor.com/academy/aeo-geo-benchmarks-report/",
                    },
                    {
                      v: "11.9×",
                      l: "AI traffic growth in legal vs cross-industry average. Legal leads YMYL adoption",
                      s: "Conductor 2026",
                      h: "https://www.conductor.com/academy/aeo-geo-benchmarks-report/",
                    },
                  ].map((row, i) => (
                    <a
                      key={i}
                      href={row.h}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid grid-cols-12 gap-4 py-5 border-b border-white/15 hover:bg-white/[0.02] transition-colors focus:outline-none focus-visible:bg-white/[0.04] focus-visible:ring-1 focus-visible:ring-[#d4620a]"
                    >
                      <dt className="col-span-3 sm:col-span-2 text-2xl md:text-3xl font-bold tracking-tight text-white tabular-nums">
                        {row.v}
                      </dt>
                      <dd className="col-span-9 sm:col-span-7 text-base text-white/80 leading-snug font-light">
                        {row.l}
                      </dd>
                      <dd className="hidden sm:block sm:col-span-3 text-[10px] font-mono uppercase tracking-widest text-white/55 group-hover:text-[#d4620a] transition-colors self-center">
                        {row.s} &rarr;
                      </dd>
                    </a>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <SectionRule />

          {/* ───────── §03 WHAT IS AI SEO ───────── */}
          <section className="mb-24" aria-labelledby="what-is">
            <SectionHeader
              number="03"
              eyebrow="The discipline"
              title="What is AI SEO?"
              id="what-is"
            />
            <Prose>
              <p>
                <strong className="text-white font-semibold">AI SEO</strong>{" "}
                is the practice of structuring a business so that AI engines
                such as ChatGPT, Gemini, Perplexity, and Claude understand it,
                trust it, and recommend it inside the answers they generate.
                It also covers AI features inside traditional search,
                including Google AI Overviews and Bing Copilot.
              </p>
              <p>
                AI engines do not return ranked lists. They return one answer,
                or a curated set of two or three. If your business is not in
                that answer, you do not exist in the fastest-growing
                discovery channel on the planet.
              </p>
              <p>
                Strategi is an AI SEO advisory for established businesses. We
                do not chase keywords. We engineer the entity clarity,
                structured data, and authoritative trust signals that make AI
                consistently choose you over competitors.
              </p>
            </Prose>

            <PullQuote attribution="Strategi messaging library">
              SEO gets you on the list. AI SEO gets you in the answer.
            </PullQuote>
          </section>

          <SectionRule />

          {/* ───────── §04 SEO vs AI SEO ───────── */}
          <section className="mb-24" aria-labelledby="vs">
            <SectionHeader
              number="04"
              eyebrow="The shift"
              title="From ranking on a list to inclusion in an answer."
              id="vs"
            />
            <div className="grid grid-cols-12 gap-6">
              <div className="hidden md:block md:col-span-2" aria-hidden="true" />
              <div className="col-span-12 md:col-span-10 overflow-x-auto">
                <table className="w-full text-left border-collapse text-base md:text-lg">
                  <thead>
                    <tr className="border-b-2 border-white/20">
                      <th className="py-4 pr-6 text-[10px] font-mono uppercase tracking-widest text-white/50 font-medium">
                        Traditional SEO
                      </th>
                      <th className="py-4 pl-6 text-[10px] font-mono uppercase tracking-widest text-[#d4620a] font-medium">
                        AI SEO
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Ranking on a list", "Inclusion in an answer"],
                      ["Optimising for keywords", "Positioning for comprehension"],
                      ["Backlink count", "Citation density across sources"],
                      ["Click-through rate", "Recommendation share"],
                      ["Website as destination", "AI as the intermediary"],
                      ["Months to reindex", "Weeks to recrawl"],
                    ].map(([a, b]) => (
                      <tr key={a} className="border-b border-white/10">
                        <td className="py-5 pr-6 text-white/55 font-light line-through decoration-white/15">
                          {a}
                        </td>
                        <td className="py-5 pl-6 text-white font-medium">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <SectionRule />

          {/* ───────── §05 ACRONYM CLARIFICATION ───────── */}
          <section className="mb-24" aria-labelledby="acronyms">
            <SectionHeader
              number="05"
              eyebrow="Acronyms"
              title="AI SEO vs GEO vs AEO. Same shift, different labels."
              id="acronyms"
            />
            <div className="grid grid-cols-12 gap-6">
              <div className="hidden md:block md:col-span-2" aria-hidden="true" />
              <div className="col-span-12 md:col-span-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                {[
                  {
                    abbr: "SEO",
                    full: "Search Engine Optimization",
                    body:
                      "The legacy practice. Optimises pages for ranked lists in Google and Bing. Still drives intent-rich traffic at the conversion stage. Increasingly cannibalised by AI features inside the search result.",
                    accent: false,
                  },
                  {
                    abbr: "AI SEO",
                    full: "AI Search Optimization",
                    body:
                      "The umbrella term. Optimises a business for citation across both AI-native engines (ChatGPT, Perplexity, Claude) and AI-augmented search (Google AI Overviews, Bing Copilot). The most-searched variant in 2026.",
                    accent: true,
                  },
                  {
                    abbr: "GEO",
                    full: "Generative Engine Optimization",
                    body:
                      "Coined in academic research in November 2023 by Aggarwal et al. at Princeton. Focused on optimising content for inclusion in generative model output. A subset of AI SEO in practice.",
                    accent: false,
                  },
                  {
                    abbr: "AEO",
                    full: "Answer Engine Optimization",
                    body:
                      "Predates AI engines. Originally meant optimising for Google featured snippets. Now used interchangeably with GEO. Same practical scope: getting selected as the answer.",
                    accent: false,
                  },
                ].map((it) => (
                  <div key={it.abbr}>
                    <p
                      className={`text-5xl md:text-6xl font-bold tracking-tighter ${
                        it.accent ? "text-[#d4620a]" : "text-white/90"
                      }`}
                    >
                      {it.abbr}
                    </p>
                    <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-white/55">
                      {it.full}
                    </p>
                    <p className="mt-4 text-base text-white/80 leading-relaxed font-light">
                      {it.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <PullQuote attribution="Strategi positioning">
              AI SEO is one piece. AI Presence is the whole.
            </PullQuote>
          </section>

          <SectionRule />

          {/* ───────── §06 THREE SIGNALS ───────── */}
          <section className="mb-24" aria-labelledby="signals">
            <SectionHeader
              number="06"
              eyebrow="Mechanics"
              title="Three signals decide whether AI cites you."
              id="signals"
            />
            <Prose>
              <p>
                AI engines do not crawl your site the way search engines do.
                They build internal representations of entities and weigh
                authority signals that look very different from PageRank.
                Three categories of signal dominate.
              </p>
            </Prose>

            <div className="mt-16 space-y-16">
              {[
                {
                  n: "i.",
                  title: "Entity clarity",
                  body: [
                    "AI does not match strings. It models entities. If your business shows up under three slightly different names with three different category claims, AI either picks one version, blends them incorrectly, or treats them as separate entities.",
                    "Entity clarity is the foundation. Everything else is less effective without it. Use one canonical name everywhere. Define your category. Articulate your differentiators in language a language model can parse without ambiguity.",
                  ],
                },
                {
                  n: "ii.",
                  title: "Structural readability",
                  body: [
                    "Your website is a machine document, not just a human experience. Heading hierarchy, schema markup, semantic HTML, and content architecture decide how much of your content AI can extract, attribute, and cite.",
                    "A page that reads beautifully to a human can be functionally invisible to a language model if its structure is ambiguous. Schema is necessary but not sufficient. The full architecture is what matters.",
                  ],
                },
                {
                  n: "iii.",
                  title: "Authoritative corroboration",
                  body: [
                    "AI weighs trust differently from search engines. Backlinks matter less. Consistent, corroborated information across multiple authoritative sources matters more.",
                    "A claim made on your own website carries weight only when it shows up in third-party coverage, structured data on independent sites, and consistent entity information across the platforms AI models trust. We call this the trust layer. Most businesses have none of it.",
                  ],
                },
              ].map((s) => (
                <div key={s.n} className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-2">
                    <p className="text-3xl md:text-4xl font-mono text-[#d4620a]">
                      {s.n}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-9 lg:col-span-8">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                      {s.title}
                    </h3>
                    {s.body.map((p, i) => (
                      <p
                        key={i}
                        className="text-lg text-white/80 leading-relaxed font-light mb-3"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <SectionRule />

          {/* ───────── §07 METHODOLOGY (vertical timeline) ───────── */}
          <section
            id="methodology"
            className="mb-24 scroll-mt-32"
            aria-labelledby="methodology-h2"
          >
            <SectionHeader
              number="07"
              eyebrow="The Strategi system"
              title="Six phases. One outcome: you become the answer."
              id="methodology-h2"
            />

            <div className="grid grid-cols-12 gap-6">
              <div className="hidden md:block md:col-span-2" aria-hidden="true" />
              <div className="col-span-12 md:col-span-10 relative">
                {/* timeline rule */}
                <div
                  aria-hidden="true"
                  className="absolute left-[14px] sm:left-4 top-2 bottom-2 w-px bg-white/15"
                />

                <ol className="space-y-14">
                  {[
                    {
                      n: "01",
                      t: "Diagnose",
                      sub: "Audit AI Visibility",
                      d: "Query every major AI platform with the questions your customers ask. Document what AI says about your business, your competitors, and your category. Output: an AI Visibility Report mapping the precise distance between your current position and consistent recommendation.",
                    },
                    {
                      n: "02",
                      t: "Define",
                      sub: "Clarify Positioning",
                      d: "Use the diagnostic to define how your business should be understood by machines. Entity definition, category mapping, differentiator articulation, and a Machine Positioning Statement that becomes the foundation for every downstream decision.",
                    },
                    {
                      n: "03",
                      t: "Structure",
                      sub: "Make Your Business Machine-Readable",
                      d: "Restructure your digital presence for AI comprehension. Website architecture, schema implementation, content hierarchy, semantic structuring. The goal is not SEO-friendly. The goal is machine-readable. This phase typically produces the most immediate impact.",
                    },
                    {
                      n: "04",
                      t: "Build",
                      sub: "Content & Signals",
                      d: "Produce strategically structured material designed to be cited by AI. Comprehensive category content, authoritative thought leadership, structured data assets. In parallel, begin building external trust signals through strategic information distribution.",
                    },
                    {
                      n: "05",
                      t: "Reinforce",
                      sub: "Authority Loops",
                      d: "Build self-reinforcing authority loops. Each AI citation becomes a signal for future citations. Expand the scope of queries that trigger your business as a recommendation, moving from core category queries into adjacent and long-tail territory.",
                    },
                    {
                      n: "06",
                      t: "Monitor",
                      sub: "AI Presence Tracking",
                      d: "Track which queries trigger your business as a recommendation. Track which competitors gain or lose AI share. Track which model updates affect your positioning. Respond to detected shifts with targeted interventions. This is intelligence, not a reporting dashboard.",
                    },
                  ].map((p) => (
                    <li key={p.n} className="relative pl-12 sm:pl-16">
                      {/* node */}
                      <div
                        aria-hidden="true"
                        className="absolute left-0 top-3 w-7 h-7 rounded-full bg-[#050505] border border-[#d4620a] flex items-center justify-center"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#d4620a]" />
                      </div>
                      <div className="grid grid-cols-12 gap-4 items-baseline">
                        <p className="col-span-12 sm:col-span-2 text-[10px] font-mono uppercase tracking-widest text-[#d4620a] tabular-nums">
                          Phase {p.n}
                        </p>
                        <div className="col-span-12 sm:col-span-10">
                          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                            {p.t}.{" "}
                            <span className="text-white/55 font-normal">
                              {p.sub}.
                            </span>
                          </h3>
                          <p className="mt-3 text-base md:text-lg text-white/80 leading-relaxed font-light max-w-[60ch]">
                            {p.d}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <SectionRule />

          {/* ───────── §08 WHAT AI SEO IS NOT ───────── */}
          <section className="mb-24" aria-labelledby="not">
            <SectionHeader
              number="08"
              eyebrow="Boundaries"
              title="Five things AI SEO is routinely confused with."
              id="not"
            />
            <div className="grid grid-cols-12 gap-6">
              <div className="hidden md:block md:col-span-2" aria-hidden="true" />
              <div className="col-span-12 md:col-span-10">
                <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                  {[
                    ["AI rewrites of existing content", "Generic AI-rewritten copy is the opposite of what AI engines cite. They look for distinctive, verifiable, well-attributed information. Recycled prose with no original signal is dead weight."],
                    ["Stuffing 'AI' into existing keywords", "Targeting 'best AI plumber' or 'AI law firm' treats AI engines like keyword-matching search. They do not work that way. They match concepts and entities, not strings."],
                    ["Buying citations or paying for inclusion", "There is no sponsored answer in ChatGPT or Perplexity today. Anyone selling guaranteed citation is misrepresenting the mechanism. Inclusion comes from comprehension and corroboration."],
                    ["Adding a chatbot to your website", "A site-embedded LLM does not influence how external AI engines represent your business. The AI surfaces that decide recommendation are not the ones running on your domain."],
                    ["A one-time project", "AI models update. Competitor positioning shifts. Schema standards evolve. AI SEO is a continuous practice with a feedback loop, not a 12-month repeat."],
                  ].map(([title, body], i) => (
                    <li key={title} className="py-7 grid grid-cols-12 gap-4">
                      <p className="col-span-12 sm:col-span-1 text-[10px] font-mono uppercase tracking-widest text-white/45 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <div className="col-span-12 sm:col-span-11">
                        <p className="text-lg md:text-xl font-medium text-white">
                          <span className="text-[#d4620a] mr-2">×</span> {title}
                        </p>
                        <p className="mt-2 text-base text-white/75 leading-relaxed font-light max-w-[68ch]">
                          {body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <SectionRule />

          {/* ───────── §09 WHAT WORKING LOOKS LIKE ───────── */}
          <section className="mb-24" aria-labelledby="works">
            <SectionHeader
              number="09"
              eyebrow="Outcomes"
              title="What it looks like when AI SEO is working."
              id="works"
            />
            <div className="grid grid-cols-12 gap-6">
              <div className="hidden md:block md:col-span-2" aria-hidden="true" />
              <div className="col-span-12 md:col-span-10">
                <ol className="space-y-8">
                  {[
                    ["Your business appears in AI answers for category queries.", "Genuine recommendations, initially inconsistent across models, then stabilising as authority signals corroborate."],
                    ["AI representation matches reality.", "When AI describes what you do, the description is accurate, current, and reflects your actual positioning rather than a blended impression of your competitors."],
                    ["Citation depth increases.", "AI engines do not just name you. They reference specific pages, claims, or capabilities. Citation density is a better leading indicator of trust than mention count."],
                    ["Recommendation expands beyond core queries.", "You start showing up in adjacent and long-tail queries you were not targeting. The authority loop is reinforcing itself."],
                    ["Competitor share of recommendation declines in your favour.", "AI recommendation is a zero-sum surface for the top one to three slots. As your inclusion grows, someone else's shrinks. That displacement is the moat AI SEO builds."],
                  ].map(([t, body], i) => (
                    <li key={i} className="grid grid-cols-12 gap-4">
                      <p className="col-span-12 sm:col-span-1 text-[10px] font-mono uppercase tracking-widest text-[#d4620a] tabular-nums pt-2">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <div className="col-span-12 sm:col-span-11">
                        <p className="text-lg md:text-xl font-medium text-white leading-snug">
                          {t}
                        </p>
                        <p className="mt-2 text-base text-white/75 leading-relaxed font-light max-w-[68ch]">
                          {body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <SectionRule />

          {/* ───────── §10 WHO FOR ───────── */}
          <section className="mb-24" aria-labelledby="for">
            <SectionHeader
              number="10"
              eyebrow="Audience"
              title="Who AI SEO is for."
              id="for"
            />
            <Prose>
              <p>
                Established businesses with substance and category
                credibility. AI engines reward verifiable authority. They
                corroborate claims across the open web before they
                recommend.
              </p>
              <p>
                If your business has real history, real customers, and real
                category credibility, AI SEO compounds those signals into
                consistent recommendation. We are not the right partner for
                early-stage startups looking for a growth hack. We are not
                the right partner for businesses without a track record AI
                can verify.
              </p>
            </Prose>
          </section>

          <SectionRule />

          {/* ───────── §11 FAQ ───────── */}
          <section className="mb-24" aria-labelledby="faq-h2">
            <SectionHeader
              number="11"
              eyebrow="Q & A"
              title="Frequently asked questions about AI SEO."
              id="faq-h2"
            />
            <div className="grid grid-cols-12 gap-6">
              <div className="hidden md:block md:col-span-2" aria-hidden="true" />
              <div className="col-span-12 md:col-span-10">
                <dl className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                  {FAQ_ITEMS.map((item, i) => (
                    <div key={i} className="py-7 grid grid-cols-12 gap-4">
                      <p className="col-span-12 sm:col-span-1 text-[10px] font-mono uppercase tracking-widest text-[#d4620a] tabular-nums">
                        Q{String(i + 1).padStart(2, "0")}
                      </p>
                      <div className="col-span-12 sm:col-span-11">
                        <dt className="text-xl md:text-2xl font-semibold tracking-tight text-white leading-snug">
                          {item.q}
                        </dt>
                        <dd className="mt-3 text-base md:text-lg text-white/80 leading-relaxed font-light max-w-[70ch]">
                          {item.a}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <SectionRule />

          {/* ───────── §12 CTA ───────── */}
          <section
            className="mb-20 grid grid-cols-12 gap-6"
            aria-labelledby="cta-h2"
          >
            <div className="hidden md:block md:col-span-2" aria-hidden="true">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d4620a]">
                §12
              </p>
              <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
                Begin
              </p>
            </div>
            <div className="col-span-12 md:col-span-10">
              <h2
                id="cta-h2"
                className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] max-w-3xl"
              >
                The first business AI learns to trust in your category{" "}
                <span className="text-[#d4620a]">wins.</span>
                <br />
                Everyone else competes for second.
              </h2>
              <p className="mt-6 text-lg md:text-xl text-white/75 font-light max-w-xl leading-relaxed">
                Every Strategi engagement begins with an AI Visibility
                Diagnostic. No pitch. A clear-eyed read on where your
                business stands with AI today, and what it takes to change
                it.
              </p>
              <div className="mt-10">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center min-h-[56px] bg-[#d4620a] text-white text-sm font-bold uppercase tracking-widest px-12 hover:bg-white hover:text-[#050505] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                >
                  Start your AI Presence diagnostic &rarr;
                </Link>
                <p className="mt-6 text-[10px] font-mono uppercase tracking-widest text-white/50">
                  Or read{" "}
                  <Link
                    href="/blogs"
                    className="text-white/80 hover:text-[#d4620a] transition-colors underline-offset-4 underline decoration-white/30"
                  >
                    Strategi Insights on AI SEO &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* ───────── §13 SOURCES (footnote style) ───────── */}
          <section
            className="mt-24 pt-10 border-t border-white/[0.12] grid grid-cols-12 gap-6"
            aria-labelledby="sources-h2"
          >
            <div className="col-span-12 md:col-span-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d4620a]">
                §13
              </p>
              <p
                id="sources-h2"
                className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/55"
              >
                References
              </p>
            </div>
            <div className="col-span-12 md:col-span-10">
              <ol className="space-y-3 text-sm text-white/70 font-mono list-decimal pl-5 marker:text-[#d4620a]/70">
                <li>
                  Aggarwal, P. et al. (2024).{" "}
                  <a
                    href="https://arxiv.org/abs/2311.09735"
                    className="underline underline-offset-2 hover:text-[#d4620a] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GEO: Generative Engine Optimization. KDD &lsquo;24, Princeton.
                  </a>
                </li>
                <li>
                  OpenAI announcement, Feb 2026 via{" "}
                  <a
                    href="https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/"
                    className="underline underline-offset-2 hover:text-[#d4620a] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TechCrunch: ChatGPT reaches 900M weekly active users.
                  </a>
                </li>
                <li>
                  Ahrefs analysis, Feb 2026 via{" "}
                  <a
                    href="https://www.medianama.com/2026/02/223-google-ai-overviews-click-through-rates-58-study/"
                    className="underline underline-offset-2 hover:text-[#d4620a] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medianama: Google AI Overviews reduce clicks by 58%.
                  </a>
                </li>
                <li>
                  Conductor (2026).{" "}
                  <a
                    href="https://www.conductor.com/academy/aeo-geo-benchmarks-report/"
                    className="underline underline-offset-2 hover:text-[#d4620a] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AEO/GEO Benchmarks Report 2026 (13,770 enterprise domains).
                  </a>
                </li>
              </ol>
              <p className="mt-8 text-[10px] font-mono uppercase tracking-widest text-white/40">
                Last updated: April 25, 2026 &middot; strategi.is
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
