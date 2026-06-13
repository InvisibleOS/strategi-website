import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, CONTACT_EMAIL } from "@/lib/site";
import { JsonLd } from "@/components/geo/Editorial";

const PAGE_URL = `${SITE_URL}/products`;
const OG_IMAGE = `${SITE_URL}/strategi.png`;

const WAITLIST = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Tolstoy early access"
)}&body=${encodeURIComponent(
  "I'd like early access to Tolstoy. Here is my business:"
)}`;

export const metadata: Metadata = {
  title: "Tolstoy: GEO Content Platform by Strategi",
  description:
    "Tolstoy turns a short content brief into a deeply-researched, fact-grounded, publication-ready blog post engineered to be cited by AI answer engines. Every claim is traced to a real source and verified before it can publish, with two human review gates and export to Markdown, HTML, and Word.",
  keywords: [
    "Tolstoy",
    "GEO content platform",
    "AI content generation",
    "answer engine optimization",
    "AEO",
    "fact-grounded content",
    "AI-citable content",
    "generative engine optimization software",
    "automated blog writing",
    "content generation SaaS",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Strategi",
    title: "Tolstoy: GEO Content Platform by Strategi",
    description:
      "Tolstoy turns a brief into a deeply-researched, fact-grounded blog post engineered to be cited by AI answer engines.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Tolstoy by Strategi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloStrategi",
    creator: "@HelloStrategi",
    title: "Tolstoy: GEO Content Platform by Strategi",
    description:
      "Tolstoy turns a brief into a deeply-researched, fact-grounded blog post engineered to be cited by AI answer engines.",
    images: [OG_IMAGE],
  },
};

const pillars = [
  {
    id: "01",
    title: "Grounded, citable content",
    desc: "Every factual claim is traced to a real source and verified verbatim before a post can publish. The output is purpose-built to be quoted by AI answer engines.",
  },
  {
    id: "02",
    title: "Hard cost control",
    desc: "Every workspace has mandatory spend ceilings enforced at the database layer before any AI call is made. The system physically cannot overspend a limit.",
  },
  {
    id: "03",
    title: "Secure multi-tenancy",
    desc: "Strict per-customer data isolation at the database level, invite-only access, and mandatory two-factor authentication for platform operators.",
  },
];

const stages = [
  {
    id: "01",
    title: "Research",
    desc: "Three operations run in parallel: Brave web search, a Perplexity Sonar Pro deep-research report, and AI curation. Sources are tiered toward government, academic, and tier-1, every finding is captured with a verbatim quote, and the reader's likely follow-up questions are predicted (query fan-out).",
  },
  {
    id: "02",
    title: "Outline",
    desc: "A binding content plan before any prose: title options, 3 to 10 sections with purpose and word budget, fit-scored product placements, an FAQ spec, comparison tables, and atomic-answer requirements. A malformed outline is blocked before drafting.",
  },
  {
    id: "03",
    title: "Draft",
    desc: "A complete Markdown post: a 100 to 150 word Quick Answer, a TL;DR, body sections, FAQ, and a Sources block, with a claim-provenance map tagging every assertion to its source. Any claim it cannot ground is stripped, not shipped.",
  },
  {
    id: "04",
    title: "Quality edit",
    desc: "A Pass, Warn, or Block verdict from deterministic checks plus one AI editorial pass. The verdict is computed in code, not by the model, and a Block cannot be approved by a human reviewer.",
  },
];

const capabilities = [
  {
    id: "01",
    title: "Versioned brand profile",
    desc: "A guided wizard builds a structured, versioned brand profile (mission, products, ideal customer, differentiators, tone, competitors, target questions). It feeds every stage, and editing it is free.",
  },
  {
    id: "02",
    title: "Monthly content planning",
    desc: "Plan up to 20 posts a month on an interactive board, then turn any planned item into a blog with one click.",
  },
  {
    id: "03",
    title: "Brand and founder voice",
    desc: "Drafts honor your brand and founder voice, banned-word lists, and style constraints, with an editorial voice check on every piece.",
  },
  {
    id: "04",
    title: "Intelligent product placement",
    desc: "Your products are woven in with one of four fit-scored patterns. Featured products are enforced, vetoed products cannot appear.",
  },
  {
    id: "05",
    title: "Two human review gates",
    desc: "You approve the outline and the final draft, with a bounded rewrite allowance. The publish-block is enforced, so a draft that fails grounding cannot be approved.",
  },
  {
    id: "06",
    title: "Export and live status",
    desc: "Export to Markdown, HTML, or Word through short-lived private links. The workspace updates live as a post moves through the pipeline.",
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
      "Tolstoy is Strategi's GEO content platform. It turns a content brief into a deeply-researched, fact-grounded, publication-ready blog post engineered to be cited by AI answer engines, with parallel research, a two-gate human review flow, an automated Pass/Warn/Block quality gate, brand-voice matching, and export to Markdown, HTML, and Word.",
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
          aria-label="Tolstoy overview"
          className="relative overflow-hidden border-b border-white/10 px-6 md:px-12 pt-36 md:pt-44 pb-20 md:pb-28"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4620a]/[0.03] blur-[120px] pointer-events-none z-0" />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-8">
              Tolstoy / GEO content platform
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] font-bold tracking-tighter leading-[0.9] text-white max-w-5xl">
              Content engineered{" "}
              <span className="text-white/30">to be cited by AI.</span>
            </h1>
            <p className="mt-8 text-base md:text-lg text-white/50 font-light max-w-2xl leading-relaxed">
              Tolstoy turns a short content brief into a deeply-researched,
              fact-grounded, publication-ready blog post built to be quoted by AI
              answer engines. Describe your brand once, then plan a month of
              content or request one-off posts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WAITLIST}
                className="bg-white text-[#050505] text-base md:text-lg font-bold px-10 py-5 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
              >
                Get early access &rarr;
              </a>
              <a
                href="#pipeline"
                className="border border-white/20 text-white/85 text-base md:text-lg font-medium px-10 py-5 hover:border-white/40 hover:text-white transition-colors text-center"
              >
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section
          aria-label="What Tolstoy is"
          className="px-6 md:px-12 py-24 md:py-32 border-b border-white/10"
        >
          <div className="max-w-[1400px] mx-auto">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-12 md:mb-16">
              What Tolstoy is
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-white/10 bg-white/10">
              {pillars.map((p) => (
                <div
                  key={p.id}
                  className="group relative bg-[#050505] p-8 md:p-10 min-h-[260px] flex flex-col justify-between hover:bg-[#0a0a0a] transition-colors duration-500"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#d4620a] transition-colors duration-500" />
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                      {p.id}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-4">
                      {p.title}
                    </h2>
                    <p className="text-sm md:text-base text-white/40 font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4620a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section
          id="pipeline"
          aria-label="How Tolstoy works: the generation pipeline"
          className="px-6 md:px-12 py-24 md:py-40 border-b border-white/10"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-20 flex flex-col md:flex-row gap-12 justify-between items-start">
              <div className="md:w-1/3">
                <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a]">
                  The pipeline
                </p>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                  From a one-line brief{" "}
                  <span className="text-white/30">
                    to a publication-ready post.
                  </span>
                </h2>
                <p className="text-base md:text-lg text-white/50 font-light max-w-xl leading-relaxed">
                  A brief flows through four metered AI stages with two human
                  review gates, producing a finished post with full source
                  provenance.
                </p>
              </div>
            </div>

            {/* step strip */}
            <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px border border-white/10 bg-white/10 mb-px">
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

            {/* stage detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-x border-b border-white/10 bg-white/10">
              {stages.map((s) => (
                <div
                  key={s.id}
                  className="group relative bg-[#050505] p-8 md:p-10 hover:bg-[#0a0a0a] transition-colors duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#d4620a] transition-colors duration-500" />
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                      Stage {s.id}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-4">
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/40 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality gate — grounded or it doesn't ship */}
        <section
          aria-label="Tolstoy's grounding and quality gate"
          className="px-6 md:px-12 py-24 md:py-40 border-b border-white/10 bg-white/[0.01]"
        >
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4620a] mb-6">
                The quality gate
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
                Grounded,{" "}
                <span className="text-white/30">or it does not ship.</span>
              </h2>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed max-w-xl mb-8">
                Every web-sourced claim&apos;s quote must verbatim-match the
                research it came from. Fabricated or overstated citations fail and
                block, and a blocked draft cannot be approved. The verdict is
                computed in code, not by the model, which makes the publish gate
                predictable and auditable.
              </p>
              <ul className="space-y-4 max-w-md">
                {[
                  "Verbatim claim grounding against captured sources",
                  "Every cited URL present in the Sources block",
                  "Around 50 AI-tell cliche patterns caught and blocked",
                  "Em-dash ban, FAQ, atomic-answer, and table checks",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 w-1.5 h-1.5 bg-[#d4620a] shrink-0"
                    />
                    <span className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* verdict terminal */}
            <div
              className="relative bg-[#0a0a0a] border border-white/15 shadow-2xl font-mono"
              role="img"
              aria-label="Quality gate verdict showing all checks passing"
            >
              <div className="flex items-center justify-between border-b border-white/15 px-4 py-3 bg-white/[0.02]">
                <div className="flex gap-2" aria-hidden="true">
                  <div className="w-2 h-2 bg-white/20" />
                  <div className="w-2 h-2 bg-white/20" />
                  <div className="w-2 h-2 bg-white/20" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/30">
                  Quality gate // verdict
                </span>
              </div>
              <div className="p-5 md:p-6 text-xs md:text-[13px] leading-relaxed space-y-1.5">
                {[
                  ["claim grounding", "verbatim match"],
                  ["sources coverage", "all URLs present"],
                  ["AI-tell detection", "~50 patterns"],
                  ["em-dash ban", "clean"],
                  ["atomic answers", "present"],
                  ["comparison tables", "per contract"],
                ].map(([k, v]) => (
                  <p key={k} className="flex items-center gap-2 whitespace-nowrap">
                    <span className="text-emerald-400/80">&#10003;</span>
                    <span className="text-white/70">{k}</span>
                    <span className="text-white/25">{v}</span>
                  </p>
                ))}
                <p className="pt-3 text-[#d4620a]">verdict: PASS</p>
                <p className="text-white/35">
                  # a BLOCK cannot be approved by a reviewer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section
          aria-label="Tolstoy capabilities"
          className="px-6 md:px-12 py-24 md:py-40 border-b border-white/10"
        >
          <div className="max-w-[1400px] mx-auto">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-12 md:mb-16">
              In the client portal
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-white/10 bg-white/10">
              {capabilities.map((c) => (
                <div
                  key={c.id}
                  className="group relative bg-[#050505] p-8 md:p-10 min-h-[240px] flex flex-col justify-between hover:bg-[#0a0a0a] transition-colors duration-500"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#d4620a] transition-colors duration-500" />
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">
                      {c.id}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-white mb-3">
                      {c.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/40 font-light leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4620a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust: cost control + security */}
        <section
          aria-label="Cost control and security"
          className="px-6 md:px-12 py-24 md:py-40 border-b border-white/10"
        >
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="border-l-2 border-[#d4620a]/40 pl-6 md:pl-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4620a] mb-5">
                Cost control
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-5">
                The system cannot overspend a limit.
              </h3>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                Each workspace runs under admin-set limits: a monthly blog quota,
                a per-blog spend cap, a mandatory monthly ceiling, a rewrite
                allowance, and a concurrency cap, all enforced before money is
                spent. Hitting a budget pauses a post at a resumable checkpoint
                rather than failing it, so no work is lost.
              </p>
            </div>
            <div className="border-l-2 border-[#d4620a]/40 pl-6 md:pl-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4620a] mb-5">
                Security
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-5">
                Isolated, invite-only, and audited.
              </h3>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                Every customer&apos;s data is isolated at the database layer with
                row-level security. Access is invite-only with strong passwords,
                mandatory two-factor for operators, multi-layer rate limiting, and
                a Content-Security-Policy with per-request nonces. Audit logs are
                append-only.
              </p>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section
          aria-label="Get early access to Tolstoy"
          className="px-6 md:px-12 py-24 md:py-32"
        >
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white max-w-3xl">
              Tolstoy is rolling out,{" "}
              <span className="text-white/30">invite-only.</span>
            </h2>
            <a
              href={WAITLIST}
              className="bg-white text-[#050505] text-base md:text-lg font-bold px-10 py-5 hover:bg-[#d4620a] hover:text-white transition-colors text-center shrink-0"
            >
              Get early access &rarr;
            </a>
          </div>
          <p className="max-w-[1400px] mx-auto mt-8 text-sm text-white/40 font-light">
            Want done-for-you content and AI Presence instead?{" "}
            <Link
              href="/services"
              className="text-[#d4620a] hover:text-white transition-colors font-medium"
            >
              Explore our services
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
}
