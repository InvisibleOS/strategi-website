import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, CONTACT_EMAIL } from "@/lib/site";
import { JsonLd } from "@/components/geo/Editorial";
import Intelligence from "@/components/sections/Intelligence";

const PAGE_URL = `${SITE_URL}/products`;
const OG_IMAGE = `${SITE_URL}/strategi.png`;

const WAITLIST =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Tolstoy waitlist"
  )}&body=${encodeURIComponent(
    "I'd like early access to Tolstoy. Here is my business:"
  )}`;

export const metadata: Metadata = {
  title: "Products: Tolstoy and Free AI Visibility Tools",
  description:
    "Strategi's products: Tolstoy, our AI Presence platform for tracking how ChatGPT, Gemini, and Perplexity recommend you, plus free GEO tools including the Who Owns AI leaderboard, the AI Answer Demo, and the GEO ROI Calculator.",
  keywords: [
    "Tolstoy",
    "AI Presence platform",
    "AI visibility tool",
    "AI visibility tracker",
    "GEO tools",
    "free GEO tools",
    "AI recommendation tracking",
    "Who Owns AI leaderboard",
    "AI Answer Demo",
    "GEO ROI Calculator",
    "track AI recommendations",
    "generative engine optimization software",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Strategi",
    title: "Products: Tolstoy and Free AI Visibility Tools",
    description:
      "Tolstoy, our AI Presence platform, plus free GEO tools to measure how AI recommends your business.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Strategi Products" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloStrategi",
    creator: "@HelloStrategi",
    title: "Products: Tolstoy and Free AI Visibility Tools",
    description:
      "Tolstoy, our AI Presence platform, plus free GEO tools to measure how AI recommends your business.",
    images: [OG_IMAGE],
  },
};

const tolstoyFeatures = [
  {
    id: "01",
    title: "Track every AI answer",
    desc: "Tolstoy queries ChatGPT, Gemini, and Perplexity with the questions your buyers actually ask and records whether your business shows up in the answer.",
  },
  {
    id: "02",
    title: "Benchmark your competitors",
    desc: "See who AI names first in your category, how often, and how that share shifts as models update. Know exactly where you stand against the businesses winning the recommendation.",
  },
  {
    id: "03",
    title: "Find the gaps that cost you",
    desc: "Tolstoy pinpoints the prompts where AI overlooks you and shows why, so your next move is informed by data instead of guesswork.",
  },
  {
    id: "04",
    title: "Watch your presence compound",
    desc: "Measure prompt coverage over time and see your AI Presence grow as your authority deepens. The metric that matters is inclusion, and Tolstoy makes it visible.",
  },
];

function Schemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strategi", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: PAGE_URL },
    ],
  };

  const tolstoy = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${PAGE_URL}#tolstoy`,
    name: "Tolstoy",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Tolstoy is Strategi's AI Presence platform. It tracks how ChatGPT, Gemini, and Perplexity describe and recommend your business, benchmarks competitors, and measures your prompt coverage over time.",
    url: PAGE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return <JsonLd schema={[breadcrumb, tolstoy]} />;
}

export default function ProductsPage() {
  return (
    <>
      <Schemas />
      <main className="bg-[#050505] text-white">
        {/* Hero */}
        <section
          aria-label="Strategi products overview"
          className="relative overflow-hidden border-b border-white/10 px-6 md:px-12 pt-36 md:pt-44 pb-20 md:pb-28"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4620a]/[0.03] blur-[120px] pointer-events-none z-0" />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-8">
              Products / Built by Strategi
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] font-bold tracking-tighter leading-[0.9] text-white max-w-5xl">
              See and grow{" "}
              <span className="text-white/30">your AI visibility.</span>
            </h1>
            <p className="mt-8 text-base md:text-lg text-white/50 font-light max-w-2xl leading-relaxed">
              Meet Tolstoy, our AI Presence platform for tracking how AI
              recommends you, plus a suite of free GEO tools to measure where you
              stand in AI search today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WAITLIST}
                className="bg-white text-[#050505] text-sm font-bold px-8 py-4 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
              >
                Join the Tolstoy waitlist &rarr;
              </a>
              <a
                href="#free-tools"
                className="border border-white/20 text-white/85 text-sm font-medium px-8 py-4 hover:border-white/40 hover:text-white transition-colors text-center"
              >
                Open the free tools
              </a>
            </div>
          </div>
        </section>

        {/* Tolstoy showcase */}
        <section
          id="tolstoy"
          aria-label="Tolstoy: Strategi's AI Presence platform"
          className="px-6 md:px-12 py-24 md:py-40 border-b border-white/10"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-20 flex flex-col md:flex-row gap-12 justify-between items-start">
              <div className="md:w-1/3">
                <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a]">
                  Tolstoy / AI Presence platform
                </p>
                <span className="mt-4 inline-block text-[10px] font-mono uppercase tracking-widest px-2 py-1 border text-[#d4620a] border-[#d4620a]/40">
                  Early access
                </span>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                  Meet <span className="text-[#d4620a]">Tolstoy.</span>
                </h2>
                <p className="text-base md:text-lg text-white/50 font-light max-w-xl leading-relaxed">
                  Tolstoy is the product behind our thesis. It turns AI visibility
                  from a guess into a number. Where the free tools give you a
                  snapshot, Tolstoy gives you a continuous read on how ChatGPT,
                  Gemini, and Perplexity describe and recommend your business, and
                  how that changes over time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-white/10 bg-white/10">
              {tolstoyFeatures.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-[#050505] p-8 md:p-12 hover:bg-[#0a0a0a] transition-colors duration-500"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#d4620a] transition-colors duration-500" />
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                      {item.id}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/40 leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4620a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-white/10 pt-10">
              <p className="text-base md:text-lg text-white/50 font-light max-w-md leading-relaxed">
                Tolstoy is rolling out to a first group of established businesses.
                Join the waitlist and we will reach out with early access.
              </p>
              <a
                href={WAITLIST}
                className="bg-white text-[#050505] text-sm font-bold px-8 py-4 hover:bg-[#d4620a] hover:text-white transition-colors text-center shrink-0"
              >
                Join the Tolstoy waitlist &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Free tools (the measurement layer) */}
        <div id="free-tools">
          <Intelligence />
        </div>

        {/* Waitlist CTA band */}
        <section
          aria-label="Join the Tolstoy waitlist"
          className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10"
        >
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white max-w-3xl">
              Start measuring your{" "}
              <span className="text-white/30">AI Presence.</span>
            </h2>
            <a
              href={WAITLIST}
              className="bg-white text-[#050505] text-sm font-bold px-8 py-4 hover:bg-[#d4620a] hover:text-white transition-colors text-center shrink-0"
            >
              Join the Tolstoy waitlist &rarr;
            </a>
          </div>
          <p className="max-w-[1400px] mx-auto mt-8 text-sm text-white/40 font-light">
            Want the done-for-you version?{" "}
            <Link
              href="/services"
              className="text-[#d4620a] hover:text-white transition-colors font-medium"
            >
              Explore our services
            </Link>{" "}
            and book a call.
          </p>
        </section>
      </main>
    </>
  );
}
