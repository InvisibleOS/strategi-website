import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/geo/Editorial";
import Methodology from "@/components/sections/Methodology";
import Tracks from "@/components/sections/Tracks";

const PAGE_URL = `${SITE_URL}/services`;
const OG_IMAGE = `${SITE_URL}/strategi.png`;

export const metadata: Metadata = {
  title: "AI Presence Services: GEO, YouTube and Website Builds",
  description:
    "Strategi's done-for-you AI Presence services: omni-channel Generative Engine Optimization (GEO), YouTube as an AI source, GEO blogs, and SEO + GEO website builds that make ChatGPT, Gemini, and Perplexity recommend you.",
  keywords: [
    "AI Presence services",
    "generative engine optimization services",
    "GEO agency",
    "GEO services",
    "AI visibility services",
    "YouTube GEO",
    "YouTube for AI search",
    "GEO blogs",
    "SEO and GEO website",
    "AI search optimization",
    "omni-channel GEO",
    "get recommended by ChatGPT",
    "secure website development",
    "website cybersecurity",
    "secure web development",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Strategi",
    title: "AI Presence Services: GEO, YouTube and Website Builds",
    description:
      "Done-for-you AI Presence: omni-channel GEO, YouTube, GEO blogs, and SEO + GEO website builds that make AI recommend your business.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Strategi Services" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloStrategi",
    creator: "@HelloStrategi",
    title: "AI Presence Services: GEO, YouTube and Website Builds",
    description:
      "Done-for-you AI Presence: omni-channel GEO, YouTube, GEO blogs, and SEO + GEO website builds.",
    images: [OG_IMAGE],
  },
};

const channels = [
  {
    id: "01",
    title: "GEO-optimized websites",
    desc: "Sites of every kind, engineered for SEO and GEO: fast, schema-rich, and machine-readable.",
  },
  {
    id: "02",
    title: "YouTube as an AI source",
    desc: "Video built as a primary AI channel, with the dense transcripts AI reads, trusts, and quotes.",
  },
  {
    id: "03",
    title: "GEO blogs and authority content",
    desc: "Structured, citable editorial built around the questions buyers actually ask AI.",
  },
  {
    id: "04",
    title: "Off-site signals and trust",
    desc: "The mentions, citations, reviews, and structured data AI cross-checks before it recommends you.",
  },
];

function Schemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strategi", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "AI Presence Services",
    serviceType: "Generative Engine Optimization (GEO)",
    provider: { "@id": `${SITE_URL}/#organization` },
    description:
      "Omni-channel AI Presence services: GEO-optimized websites, YouTube, GEO blogs, entity and schema engineering, and authority building that make AI systems recommend established businesses.",
    url: PAGE_URL,
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Strategi Services",
      itemListElement: channels.map((c) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: c.title, description: c.desc },
      })),
    },
  };

  return <JsonLd schema={[breadcrumb, service]} />;
}

export default function ServicesPage() {
  return (
    <>
      <Schemas />
      <main className="bg-[#050505] text-white">
        {/* Hero */}
        <section
          aria-label="AI Presence services overview"
          className="relative overflow-hidden border-b border-white/10 px-6 md:px-12 pt-36 md:pt-44 pb-20 md:pb-28"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4620a]/[0.03] blur-[120px] pointer-events-none z-0" />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-8">
              Services / Done-for-you AI Presence
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] font-bold tracking-tighter leading-[0.9] text-white max-w-5xl">
              AI Presence services for businesses{" "}
              <span className="text-white/30">AI keeps leaving out.</span>
            </h1>
            <p className="mt-8 text-base md:text-lg text-white/50 font-light max-w-2xl leading-relaxed">
              We build your AI Presence across every place AI reads: websites,
              YouTube, and authority content, all engineered with Generative
              Engine Optimization (GEO).
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-[#050505] text-base md:text-lg font-bold px-10 py-5 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
              >
                Book a call &rarr;
              </Link>
              <Link
                href="/products"
                className="border border-white/20 text-white/85 text-base md:text-lg font-medium px-10 py-5 hover:border-white/40 hover:text-white transition-colors text-center"
              >
                See our products &amp; tools
              </Link>
            </div>
          </div>
        </section>

        {/* Omni-channel thesis */}
        <section
          aria-label="Omni-channel AI Presence: every touchpoint AI learns from"
          className="px-6 md:px-12 py-24 md:py-40 border-b border-white/10"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-12 justify-between items-start">
              <div className="md:w-1/3">
                <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a]">
                  The Thesis / Omni-channel GEO
                </p>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                  AI reads everywhere.{" "}
                  <span className="text-white/30">So we publish everywhere.</span>
                </h2>
                <p className="text-base md:text-lg text-white/50 font-light max-w-xl leading-relaxed">
                  AI builds its answer from every signal it can find, not just
                  your homepage. Most agencies optimize one surface. We engineer
                  all of them, so the picture AI assembles of you stays
                  consistent and complete.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-white/10 bg-white/10">
              {channels.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-[#050505] p-8 md:p-10 min-h-[200px] flex flex-col justify-between hover:bg-[#0a0a0a] transition-colors duration-500"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#d4620a] transition-colors duration-500" />
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                      {item.id}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/40 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4620a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Breather */}
        <section className="px-6 md:px-12 py-28 md:py-40 border-b border-white/10">
          <p className="max-w-[1400px] mx-auto text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-white">
            One business.{" "}
            <span className="text-white/30">Every surface AI reads.</span>
          </p>
        </section>

        {/* Methodology */}
        <Methodology />

        {/* YouTube thesis */}
        <section
          aria-label="Why YouTube is becoming a primary AI source"
          className="px-6 md:px-12 py-24 md:py-40 border-t border-white/10"
        >
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-8">
                YouTube GEO / Additional service
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                Why YouTube could become{" "}
                <span className="text-white/30">AI&apos;s biggest source.</span>
              </h2>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                We run YouTube as a dedicated service, not an afterthought. Our
                thesis: video is becoming one of the richest inputs AI learns
                from.
              </p>
            </div>
            <div className="space-y-8 lg:pt-20">
              {[
                {
                  h: "Transcripts are dense and structured",
                  p: "A single video is minutes of clear, entity-rich speech, exactly the structured text AI parses and cites.",
                },
                {
                  h: "It is the second-largest search engine",
                  p: "Buyers research on YouTube, and it is owned by the same company training Gemini: a direct line into AI answers.",
                },
                {
                  h: "Video earns trust signals at scale",
                  p: "Views and watch time are authority signals, so your expertise becomes a source AI quotes, not a footnote.",
                },
              ].map((item) => (
                <div key={item.h} className="border-l-2 border-[#d4620a]/40 pl-6">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-3">
                    {item.h}
                  </h3>
                  <p className="text-sm md:text-base text-white/40 font-light leading-relaxed">
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GEO blogs and authority content */}
        <section
          aria-label="GEO blogs and authority content built to be cited by AI"
          className="px-6 md:px-12 py-24 md:py-40 border-t border-white/10"
        >
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-8">
                GEO Blogs / Authority content
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                Content engineered to be{" "}
                <span className="text-white/30">the source AI quotes.</span>
              </h2>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                AI answers are assembled from content models can trust and
                extract. We publish editorial built around the real questions
                buyers ask AI, structured so a model can lift your answer and
                attribute it to you. Authority, not blog filler.
              </p>
            </div>
            <div className="space-y-8 lg:pt-20">
              {[
                {
                  h: "Built around real buyer questions",
                  p: "We map the prompts buyers actually ask AI in your category and write the definitive answer to each, so you become the source the model reaches for.",
                },
                {
                  h: "Structured to be extracted and cited",
                  p: "Clear claims, definitions, stats, comparisons, and FAQ blocks with schema. We format content the way AI parses it, so it can quote and attribute you.",
                },
                {
                  h: "Authority that compounds",
                  p: "A focused library of genuinely useful, in-depth pieces beats a content mill. Each one deepens your topical authority and earns more citations over time.",
                },
              ].map((item) => (
                <div key={item.h} className="border-l-2 border-[#d4620a]/40 pl-6">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-3">
                    {item.h}
                  </h3>
                  <p className="text-sm md:text-base text-white/40 font-light leading-relaxed">
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Websites — the highlight */}
        <section
          aria-label="Websites built for SEO, GEO, and security"
          className="relative overflow-hidden border-t border-white/10 px-6 md:px-12 py-24 md:py-40 bg-white/[0.01]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-1/3 right-0 h-[60vh] w-[55vw] rounded-full bg-[#d4620a]/[0.05] blur-[160px]"
          />

          <div className="relative z-10 mx-auto max-w-[1400px]">
            {/* header */}
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-12 justify-between items-start">
              <div className="md:w-1/3">
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#d4620a]">
                  Websites / Design &middot; SEO + GEO &middot; Security
                </p>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                  Websites built to rank, to be cited,{" "}
                  <span className="text-white/30">and to stay secure.</span>
                </h2>
                <p className="text-base md:text-lg text-white/50 font-light max-w-xl leading-relaxed">
                  Your website is the first thing AI reads, and the first thing
                  attackers probe. We design and build sites of every kind, from
                  marketing sites to full platforms, engineered for SEO and GEO
                  and hardened against threats from day one.
                </p>
              </div>
            </div>

            {/* build pillars — sharp hairline grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border border-white/10 bg-white/10">
              {[
                {
                  title: "Bespoke design & build",
                  desc: "Custom design and clean, modern code. No bloated templates.",
                },
                {
                  title: "SEO + GEO optimized",
                  desc: "Complete schema and machine-readable structure that Google ranks and AI cites.",
                },
                {
                  title: "Fast & accessible",
                  desc: "Strong Core Web Vitals, responsive on every device, accessible by standard.",
                },
                {
                  title: "Scalable & easy to run",
                  desc: "A CMS your team can actually use, built to grow with you.",
                },
              ].map((f, i) => (
                <div
                  key={f.title}
                  className="group relative bg-[#050505] p-8 md:p-10 min-h-[240px] flex flex-col justify-between hover:bg-[#0a0a0a] transition-colors duration-500"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#d4620a] transition-colors duration-500" />
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-white mb-3">
                      {f.title}
                    </h3>
                    <p className="text-sm text-white/40 font-light leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4620a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              ))}
            </div>

            {/* cybersecurity — editorial copy + live-headers terminal */}
            <div className="mt-24 md:mt-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4620a] mb-6">
                  Cybersecurity / Secure by default
                </p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
                  Hardened from day one,{" "}
                  <span className="text-white/30">not as an afterthought.</span>
                </h3>
                <p className="text-base md:text-lg text-white/50 font-light leading-relaxed max-w-xl mb-10">
                  Every site we ship is locked down out of the box. A site
                  customers and AI trust is one that cannot be quietly defaced,
                  hijacked, or leaked.
                </p>
                <ul className="space-y-4 max-w-md">
                  {[
                    "HTTPS everywhere with HSTS preload",
                    "Strict Content-Security-Policy and hardened response headers",
                    "Cross-origin isolation against injection and clickjacking",
                    "Dependency audits and DDoS-resistant hosting",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1.5 h-1.5 bg-[#d4620a] shrink-0"
                      />
                      <span className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* terminal */}
              <div
                className="relative bg-[#0a0a0a] border border-white/15 shadow-2xl font-mono"
                role="img"
                aria-label="Terminal showing the security response headers every Strategi website ships with"
              >
                <div className="flex items-center justify-between border-b border-white/15 px-4 py-3 bg-white/[0.02]">
                  <div className="flex gap-2" aria-hidden="true">
                    <div className="w-2 h-2 bg-white/20" />
                    <div className="w-2 h-2 bg-white/20" />
                    <div className="w-2 h-2 bg-white/20" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/30">
                    Security headers // scan
                  </span>
                </div>
                <div className="p-5 md:p-6 text-xs md:text-[13px] leading-relaxed overflow-x-auto">
                  <p className="text-white/45">
                    $ curl -sI https://yourbusiness.com
                  </p>
                  <p className="text-[#d4620a] mt-3">HTTP/2 200</p>
                  {[
                    [
                      "strict-transport-security",
                      "max-age=63072000; includeSubDomains; preload",
                    ],
                    ["content-security-policy", "default-src 'self'; object-src 'none'"],
                    ["x-frame-options", "DENY"],
                    ["x-content-type-options", "nosniff"],
                    ["cross-origin-opener-policy", "same-origin"],
                    ["referrer-policy", "strict-origin-when-cross-origin"],
                    ["permissions-policy", "camera=(), geolocation=()"],
                  ].map(([k, v]) => (
                    <p key={k} className="whitespace-nowrap">
                      <span className="text-white/70">{k}:</span>{" "}
                      <span className="text-white/35">{v}</span>
                    </p>
                  ))}
                  <p className="text-emerald-400/80 mt-3">
                    &#10003; Hardened by default. No open doors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <Tracks />

        {/* CTA band */}
        <section
          aria-label="Book an AI Presence strategy call"
          className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10"
        >
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white max-w-3xl">
              Ready to be the answer{" "}
              <span className="text-white/30">AI recommends?</span>
            </h2>
            <Link
              href="/#contact"
              className="bg-white text-[#050505] text-base md:text-lg font-bold px-10 py-5 hover:bg-[#d4620a] hover:text-white transition-colors text-center shrink-0"
            >
              Book a call &rarr;
            </Link>
          </div>
          <p className="max-w-[1400px] mx-auto mt-8 text-sm text-white/40 font-light">
            Looking for our free GEO tools and Tolstoy instead?{" "}
            <Link
              href="/products"
              className="text-[#d4620a] hover:text-white transition-colors font-medium"
            >
              Visit our products
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
}
