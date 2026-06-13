import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, CONTACT_EMAIL } from "@/lib/site";
import { JsonLd } from "@/components/geo/Editorial";
import Intelligence from "@/components/sections/Intelligence";

const PAGE_URL = `${SITE_URL}/products`;
const OG_IMAGE = `${SITE_URL}/strategi.png`;

const WAITLIST = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Tolstoy early access"
)}&body=${encodeURIComponent(
  "I'd like early access to Tolstoy. Here is my business:"
)}`;

export const metadata: Metadata = {
  title: "Products: Tolstoy GEO Content Platform + Free Tools",
  description:
    "Strategi's products: Tolstoy, our GEO content platform that turns a brief into deeply-researched, fact-grounded blog posts engineered to be cited by AI answer engines, plus free GEO tools including the Who Owns AI leaderboard, the AI Answer Demo, and the GEO ROI Calculator.",
  keywords: [
    "Tolstoy",
    "GEO content platform",
    "AI content generation",
    "answer engine optimization",
    "AEO",
    "GEO software",
    "AI-citable content",
    "fact-grounded content",
    "generative engine optimization software",
    "free GEO tools",
    "Who Owns AI leaderboard",
    "GEO ROI Calculator",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Strategi",
    title: "Products: Tolstoy GEO Content Platform + Free Tools",
    description:
      "Tolstoy turns a brief into deeply-researched, fact-grounded blog posts engineered to be cited by AI, plus free GEO tools.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Strategi Products" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloStrategi",
    creator: "@HelloStrategi",
    title: "Products: Tolstoy GEO Content Platform + Free Tools",
    description:
      "Tolstoy turns a brief into deeply-researched, fact-grounded blog posts engineered to be cited by AI, plus free GEO tools.",
    images: [OG_IMAGE],
  },
};

const tolstoyFeatures = [
  {
    id: "01",
    title: "Grounded in real sources",
    desc: "Every factual claim is traced to a real source and verified verbatim before a post can publish. Tolstoy refuses to ship a claim it cannot ground.",
  },
  {
    id: "02",
    title: "Engineered to be cited by AI",
    desc: "Quick-answer blocks, atomic answers, FAQs, comparison tables, and query fan-out, structured the way answer engines extract and quote.",
  },
  {
    id: "03",
    title: "Your brand and founder voice",
    desc: "A versioned brand profile drives research, outline, and draft, with banned-word and style rules enforced and a voice check on every piece.",
  },
  {
    id: "04",
    title: "You stay in editorial control",
    desc: "Two human approval gates, outline and final, with bounded revisions and a grounding report plus full sources on every draft.",
  },
  {
    id: "05",
    title: "Plan a month, generate on demand",
    desc: "Build a content plan of up to 20 items and turn any of them into a fully-researched blog with one click.",
  },
  {
    id: "06",
    title: "Export anywhere",
    desc: "Deliver finished posts as Markdown, HTML, or Word, through secure expiring links. No CMS lock-in.",
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
    applicationSubCategory: "AI content generation",
    operatingSystem: "Web",
    description:
      "Tolstoy is Strategi's GEO content platform. It turns a content brief into a deeply-researched, fact-grounded, publication-ready blog post engineered to be cited by AI answer engines (AEO/GEO), with human review gates, brand-voice matching, and export to Markdown, HTML, and Word.",
    url: PAGE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
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
              Win the{" "}
              <span className="text-white/30">AI answer.</span>
            </h1>
            <p className="mt-8 text-base md:text-lg text-white/50 font-light max-w-2xl leading-relaxed">
              Meet Tolstoy, our platform that turns a brief into deeply-researched,
              fact-grounded blog content engineered to be cited by AI answer
              engines, plus free GEO tools to measure where you stand today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WAITLIST}
                className="bg-white text-[#050505] text-base md:text-lg font-bold px-10 py-5 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
              >
                Get early access &rarr;
              </a>
              <a
                href="#free-tools"
                className="border border-white/20 text-white/85 text-base md:text-lg font-medium px-10 py-5 hover:border-white/40 hover:text-white transition-colors text-center"
              >
                Open the free tools
              </a>
            </div>
          </div>
        </section>

        {/* Tolstoy showcase */}
        <section
          id="tolstoy"
          aria-label="Tolstoy: Strategi's GEO content platform"
          className="px-6 md:px-12 py-24 md:py-40 border-b border-white/10"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-20 flex flex-col md:flex-row gap-12 justify-between items-start">
              <div className="md:w-1/3">
                <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a]">
                  Tolstoy / GEO content engine
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
                  Tolstoy turns a single brief into a deeply-researched,
                  fact-grounded, publication-ready blog post engineered to be
                  cited by AI answer engines. Describe your brand once; Tolstoy
                  researches, outlines, drafts, and quality-checks every piece,
                  with you approving at each gate, then exports it ready to
                  publish.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-white/10 bg-white/10">
              {tolstoyFeatures.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-[#050505] p-8 md:p-10 hover:bg-[#0a0a0a] transition-colors duration-500"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#d4620a] transition-colors duration-500" />
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                      {item.id}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/40 leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4620a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              ))}
            </div>

            {/* How it works — the pipeline */}
            <div className="mt-16 md:mt-20 border-t border-white/10 pt-12">
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-8">
                How it works
              </p>
              <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px border border-white/10 bg-white/10">
                {[
                  "Research",
                  "Outline",
                  "You approve",
                  "Draft",
                  "Quality edit",
                  "You publish",
                ].map((step, i) => (
                  <li
                    key={step}
                    className="bg-[#050505] p-5 md:p-6 flex flex-col gap-3"
                  >
                    <span className="font-mono text-[10px] text-[#d4620a] tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm md:text-base font-medium text-white/80 leading-snug">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-white/40 font-light max-w-2xl">
                Two human gates keep you in editorial control, and a draft that
                fails grounding cannot be approved, so you never ship a fabricated
                claim.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-white/10 pt-10">
              <p className="text-base md:text-lg text-white/50 font-light max-w-md leading-relaxed">
                Tolstoy is rolling out to a first group of established businesses,
                invite-only. Join the waitlist and we will reach out with early
                access.
              </p>
              <a
                href={WAITLIST}
                className="bg-white text-[#050505] text-base md:text-lg font-bold px-10 py-5 hover:bg-[#d4620a] hover:text-white transition-colors text-center shrink-0"
              >
                Get early access &rarr;
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
          aria-label="Get early access to Tolstoy"
          className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10"
        >
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white max-w-3xl">
              Start publishing{" "}
              <span className="text-white/30">content AI cites.</span>
            </h2>
            <a
              href={WAITLIST}
              className="bg-white text-[#050505] text-base md:text-lg font-bold px-10 py-5 hover:bg-[#d4620a] hover:text-white transition-colors text-center shrink-0"
            >
              Get early access &rarr;
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
