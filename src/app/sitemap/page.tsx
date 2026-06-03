import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/cms";
import type { Post } from "@/lib/cms";
import { INDUSTRIES } from "@/lib/industries";

const SITE_URL = "https://strategi.is";
const PAGE_URL = `${SITE_URL}/sitemap`;

export const metadata: Metadata = {
  title: "Sitemap — AI Presence Advisory",
  description:
    "Every page on Strategi. A complete index of insights, services, and resources for AI Presence advisory.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Strategi",
    title: "Sitemap | Strategi",
    description: "A complete index of every page on strategi.is.",
  },
  twitter: {
    card: "summary",
    site: "@HelloStrategi",
    title: "Sitemap | Strategi",
    description: "A complete index of every page on strategi.is.",
  },
};

interface Section {
  label: string;
  items: { href: string; label: string; date?: string; category?: string | null }[];
}

function CollectionSchema({ sections }: { sections: Section[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Strategi sitemap",
    url: PAGE_URL,
    description: "Complete index of pages on strategi.is",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sections.flatMap((s, sIdx) =>
        s.items.map((item, iIdx) => ({
          "@type": "ListItem",
          position: sIdx * 1000 + iIdx + 1,
          url: item.href.startsWith("http") ? item.href : `${SITE_URL}${item.href}`,
          name: item.label,
        }))
      ),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function SectionBlock({ section, number }: { section: Section; number: string }) {
  return (
    <section className="mb-16 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-2">
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d4620a]">
          §{number}
        </p>
        <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/55">
          {section.label}
        </p>
        <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-white/35 tabular-nums">
          {section.items.length} {section.items.length === 1 ? "entry" : "entries"}
        </p>
      </div>
      <div className="col-span-12 md:col-span-10">
        <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {section.items.map((item) => {
            const isExternal = item.href.startsWith("http");
            const Component = isExternal ? "a" : Link;
            const externalProps = isExternal
              ? { target: "_blank", rel: "noopener noreferrer" as const }
              : {};
            return (
              <li key={item.href}>
                <Component
                  href={item.href}
                  {...externalProps}
                  className="group grid grid-cols-12 gap-4 py-4 items-baseline hover:bg-white/[0.02] transition-colors focus:outline-none focus-visible:bg-white/[0.04] focus-visible:ring-1 focus-visible:ring-[#d4620a]"
                >
                  <span className="col-span-12 sm:col-span-7 text-base md:text-lg text-white group-hover:text-[#d4620a] transition-colors">
                    {item.label}
                    {isExternal && (
                      <span
                        aria-hidden="true"
                        className="ml-2 text-[10px] font-mono text-white/40"
                      >
                        ↗
                      </span>
                    )}
                  </span>
                  {item.category && (
                    <span className="hidden sm:inline col-span-2 text-[10px] font-mono uppercase tracking-widest text-[#d4620a] self-center">
                      {item.category}
                    </span>
                  )}
                  <span
                    className={`hidden sm:inline ${item.category ? "col-span-3" : "col-span-5"} text-[10px] font-mono uppercase tracking-widest text-white/45 self-center text-right tabular-nums`}
                  >
                    {item.date ?? item.href}
                  </span>
                </Component>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default async function SitemapPage() {
  let posts: Post[] = [];
  try {
    const data = await getBlogPosts({ limit: 50 });
    posts = data.posts;
  } catch {
    // CMS unavailable; render the rest of the sitemap
  }

  const sections: Section[] = [
    {
      label: "Pages",
      items: [
        { href: "/", label: "Home", date: "Always current" },
        { href: "/about", label: "About Strategi", date: "Always current" },
        { href: "/blogs", label: "Insights", date: "Always current" },
      ],
    },
    {
      label: "Intelligence",
      items: [
        { href: "/who-owns-ai", label: "Who Owns AI? — The Index", date: "Live" },
        { href: "/ai-answer-demo", label: "The AI Answer Demo", date: "Live" },
        { href: "/geo-roi-calculator", label: "GEO ROI Calculator", date: "Live" },
        { href: "/about#manifesto", label: "The Manifesto", date: "Always current" },
      ],
    },
    {
      label: "Who Owns AI — by industry",
      items: INDUSTRIES.map((i) => ({
        href: `/who-owns-ai/${i.slug}`,
        label: `GEO for ${i.name}`,
        date: "Live",
      })),
    },
    {
      label: "Insights",
      items: posts.map((p) => ({
        href: `/blogs/${p.slug}`,
        label: p.title,
        date: new Date(p.published_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        category: p.category?.name ?? null,
      })),
    },
    {
      label: "Machine-readable",
      items: [
        { href: "/sitemap.xml", label: "XML sitemap", date: "Auto-generated" },
        { href: "/robots.txt", label: "robots.txt", date: "Auto-generated" },
        { href: "/llms.txt", label: "llms.txt (brand description)", date: "Static" },
        { href: "/llms-full.txt", label: "llms-full.txt (detailed)", date: "Static" },
        { href: "/blogs/llms.txt", label: "llms.txt (blog index)", date: "CMS-driven" },
        { href: "/feed.xml", label: "RSS feed", date: "CMS-driven" },
      ],
    },
    {
      label: "Network",
      items: [
        {
          href: "https://www.linkedin.com/company/strategigtm",
          label: "LinkedIn",
        },
        { href: "https://x.com/HelloStrategi", label: "X (Twitter)" },
        {
          href: "https://www.instagram.com/strategi.is/",
          label: "Instagram",
        },
      ],
    },
  ];

  // Drop the Insights section if the CMS is empty so we don't render an empty block.
  const renderable = sections.filter((s) => s.items.length > 0);

  return (
    <>
      <CollectionSchema sections={renderable} />

      <main className="relative bg-[#050505] min-h-screen text-white">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-[#d4620a]/[0.025] blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 border-b border-white/[0.06]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-white/55">
            <span>Sitemap</span>
            <span className="hidden sm:inline">strategi.is</span>
            <Link href="/sitemap.xml" className="hover:text-[#d4620a] transition-colors">
              XML version &rarr;
            </Link>
          </div>
        </div>

        <article className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 pb-32">
          <nav
            className="mt-10 mb-12 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="text-white/55 hover:text-white transition-colors">
              Strategi
            </Link>
            <span aria-hidden="true" className="text-white/30">
              /
            </span>
            <span className="text-white/85">Sitemap</span>
          </nav>

          <header className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
            <div className="col-span-12 md:col-span-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d4620a]">
                §00
              </p>
              <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/55">
                Index
              </p>
            </div>
            <div className="col-span-12 md:col-span-10">
              <h1 className="font-bold tracking-tighter leading-[0.92] text-white text-[clamp(2.5rem,7vw,6rem)]">
                Every page on{" "}
                <span className="text-[#d4620a]">strategi.is</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-[60ch]">
                A human-readable index of every page on this site. The
                machine-readable version is at{" "}
                <Link
                  href="/sitemap.xml"
                  className="text-white underline underline-offset-4 decoration-[#d4620a]/60 hover:decoration-[#d4620a]"
                >
                  /sitemap.xml
                </Link>
                .
              </p>
            </div>
          </header>

          {renderable.map((section, i) => (
            <SectionBlock
              key={section.label}
              section={section}
              number={String(i + 1).padStart(2, "0")}
            />
          ))}

          <footer className="mt-24 pt-10 border-t border-white/[0.12] text-[10px] font-mono uppercase tracking-widest text-white/45">
            Last generated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            <span className="mx-3 text-white/20">|</span>
            Pages auto-update from the CMS via webhook.
          </footer>
        </article>
      </main>
    </>
  );
}
