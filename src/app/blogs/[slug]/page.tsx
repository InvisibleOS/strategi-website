import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/cms";
import type { Post, RelatedPost } from "@/lib/cms";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  try {
    const { posts } = await getBlogPosts({ limit: 50 });
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  const ogImage = post.featured_image?.url_card || post.meta.og_image_url;

  return {
    title: post.meta.title,
    description: post.meta.description,
    authors: post.author ? [{ name: post.author.name }] : [],
    keywords: post.tags.length ? post.tags.map((t) => t.name) : undefined,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: post.meta.canonical_url,
      siteName: "Strategi",
      title: post.meta.og_title,
      description: post.meta.og_description,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: post.featured_image?.alt || post.title,
            },
          ]
        : [],
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      authors: post.author ? [post.author.name] : undefined,
      tags: post.tags.map((t) => t.name),
    },
    twitter: {
      card: "summary_large_image",
      site: "@HelloStrategi",
      creator: "@HelloStrategi",
      title: post.meta.twitter_title || post.meta.og_title,
      description:
        post.meta.twitter_description || post.meta.og_description,
      images: post.meta.twitter_image
        ? [post.meta.twitter_image]
        : ogImage
          ? [ogImage]
          : undefined,
    },
    alternates: {
      canonical: post.meta.canonical_url,
      types: {
        "application/rss+xml": "https://strategi.is/feed.xml",
      },
    },
  };
}

function getReadingTime(html: string | null): number {
  if (!html) return 1;
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

// Build a Table of Contents from H2s in the CMS body_html.
// Only shown for posts with >=3 H2s to avoid clutter.
function buildToc(html: string | null): { id: string; text: string }[] {
  if (!html) return [];
  const h2Regex = /<h2(?:\s[^>]*)?>([\s\S]*?)<\/h2>/gi;
  const items: { id: string; text: string }[] = [];
  const seen = new Set<string>();
  let match: RegExpExecArray | null;
  while ((match = h2Regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    if (!text) continue;
    const base =
      text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 60) || "section";
    let id = base;
    let n = 2;
    while (seen.has(id)) {
      id = `${base}-${n++}`;
    }
    seen.add(id);
    items.push({ id, text });
  }
  return items;
}

// Inject stable id attributes onto H2s (matching the TOC ids) so the
// anchor links scroll to the right section.
function injectHeadingIds(
  html: string | null,
  toc: { id: string; text: string }[]
): string | null {
  if (!html || toc.length === 0) return html;
  let index = 0;
  return html.replace(/<h2(\s[^>]*)?>/gi, (_full, attrs: string | undefined) => {
    const item = toc[index++];
    if (!item) return `<h2${attrs || ""}>`;
    if (attrs && /\sid\s*=/.test(attrs)) {
      return `<h2${attrs}>`;
    }
    return `<h2${attrs || ""} id="${item.id}">`;
  });
}

function RelatedSection({ related }: { related: RelatedPost[] }) {
  if (!related.length) return null;
  return (
    <aside
      aria-labelledby="related-heading"
      className="max-w-5xl mx-auto px-6 md:px-12 mt-20 mb-24"
    >
      <h2
        id="related-heading"
        className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-6"
      >
        Read next
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {related.slice(0, 4).map((r) => (
          <li key={r.slug}>
            <Link
              href={`/blogs/${r.slug}`}
              className="group flex gap-4 items-start p-4 rounded-lg border border-white/[0.06] hover:border-white/20 transition-colors motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            >
              {r.featured_image_url ? (
                <img
                  src={r.featured_image_url}
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 rounded-md object-cover flex-shrink-0"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="w-20 h-20 rounded-md bg-gradient-to-br from-[#d4620a]/15 to-[#050505] flex-shrink-0"
                />
              )}
              <div className="min-w-0">
                {r.category && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4620a]">
                    {r.category.name}
                  </span>
                )}
                <p className="text-sm font-medium text-white group-hover:text-[#d4620a] transition-colors line-clamp-2 mt-1">
                  {r.title}
                </p>
                <time
                  dateTime={r.published_at}
                  className="text-[10px] font-mono uppercase tracking-widest text-white/50 mt-1 block"
                >
                  {new Date(r.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function TableOfContents({
  items,
}: {
  items: { id: string; text: string }[];
}) {
  if (items.length < 3) return null;
  return (
    <nav
      aria-label="Table of contents"
      className="mb-10 p-5 rounded-lg border border-white/[0.08] bg-white/[0.02]"
    >
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-3">
        On this page
      </p>
      <ol className="space-y-2">
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-3 text-sm">
            <span
              aria-hidden="true"
              className="text-[10px] font-mono text-white/40 pt-1 w-5 shrink-0"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${item.id}`}
              className="text-white/70 hover:text-[#d4620a] transition-colors motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: Post | null = await getBlogPost(slug);
  if (!post) notFound();

  const readingTime = getReadingTime(post.body_html);
  const publishedDate = new Date(post.published_at).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const toc = buildToc(post.body_html);
  const bodyHtml = injectHeadingIds(post.body_html, toc);
  const related = post.related ?? [];

  return (
    <>
      {/* JSON-LD structured data (Article, Breadcrumb, FAQ pre-built by CMS) */}
      {post.schema.article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post.schema.article),
          }}
        />
      )}
      {post.schema.breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post.schema.breadcrumb),
          }}
        />
      )}
      {post.schema.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema.faq) }}
        />
      )}

      <div className="relative bg-[#050505] min-h-screen">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[40vh] bg-[#d4620a]/[0.02] blur-[150px] pointer-events-none"
        />

        <article
          className="relative z-10"
          aria-labelledby="post-title"
        >
          {/* Header */}
          <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-8">
            {/* Breadcrumb */}
            <nav
              className="mb-8 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="text-white/50 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded"
              >
                Strategi
              </Link>
              <span aria-hidden="true" className="text-white/30">
                /
              </span>
              <Link
                href="/blogs"
                className="text-white/50 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded"
              >
                Blog
              </Link>
              {post.category && (
                <>
                  <span aria-hidden="true" className="text-white/30">
                    /
                  </span>
                  <Link
                    href={`/blogs?category=${post.category.slug}`}
                    className="text-white/50 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded"
                  >
                    {post.category.name}
                  </Link>
                </>
              )}
            </nav>

            {/* Meta line */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {post.category && (
                <>
                  <Link
                    href={`/blogs?category=${post.category.slug}`}
                    className="text-[10px] font-mono uppercase tracking-widest text-[#d4620a] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] rounded"
                  >
                    {post.category.name}
                  </Link>
                  <span aria-hidden="true" className="text-[10px] font-mono text-white/30">
                    /
                  </span>
                </>
              )}
              <time
                dateTime={post.published_at}
                className="text-[10px] font-mono uppercase tracking-widest text-white/50"
              >
                {publishedDate}
              </time>
              <span aria-hidden="true" className="text-[10px] font-mono text-white/30">
                /
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                {readingTime} min read
              </span>
            </div>

            {/* Title */}
            <h1
              id="post-title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.92] text-white max-w-4xl mb-8"
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mb-10">
                {post.excerpt}
              </p>
            )}

            {/* Author */}
            {post.author && (
              <div className="flex items-center gap-4 pb-10 border-b border-white/[0.06]">
                {post.author.avatar_url ? (
                  <img
                    src={post.author.avatar_url}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full bg-[#d4620a]/20 flex items-center justify-center text-[#d4620a] text-sm font-bold"
                  >
                    {post.author.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-white">
                    {post.author.name}
                  </p>
                  {post.author.bio && (
                    <p className="text-xs text-white/60 font-light line-clamp-1 max-w-sm">
                      {post.author.bio}
                    </p>
                  )}
                </div>
              </div>
            )}
          </header>

          {/* Featured image */}
          {post.featured_image ? (
            <figure className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 md:mb-16">
              <div className="relative rounded-lg overflow-hidden">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={post.featured_image.url_card}
                  />
                  <img
                    src={post.featured_image.url_wide}
                    alt={post.featured_image.alt || post.title}
                    width={1600}
                    height={900}
                    loading="eager"
                    decoding="sync"
                    fetchPriority="high"
                    className="w-full h-auto rounded-lg"
                  />
                </picture>
              </div>
              {post.featured_image.caption && (
                <figcaption className="mt-3 text-xs text-white/60 font-mono text-center">
                  {post.featured_image.caption}
                </figcaption>
              )}
            </figure>
          ) : (
            <div className="max-w-3xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
              <div aria-hidden="true" className="h-px bg-white/[0.06]" />
            </div>
          )}

          {/* Post body + optional TOC */}
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <TableOfContents items={toc} />
            {bodyHtml ? (
              <div
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />
            ) : (
              <p className="text-white/60 italic">No content available.</p>
            )}
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="max-w-3xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/[0.06]">
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-4">
                Tagged
              </p>
              <ul className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li key={tag.slug}>
                    <Link
                      href={`/blogs?tag=${tag.slug}`}
                      className="min-h-11 inline-flex items-center px-3 py-2 text-xs font-mono text-white/70 border border-white/[0.12] rounded-full hover:border-white/30 hover:text-white transition-colors motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                    >
                      #{tag.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related posts */}
          <RelatedSection related={related} />

          {/* Back to blog */}
          <div className="max-w-3xl mx-auto px-6 md:px-12 mt-4 mb-24">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-[#d4620a] transition-colors motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded-full px-3 py-2 min-h-11"
            >
              <span
                aria-hidden="true"
                className="w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-[#d4620a] transition-all duration-300 motion-reduce:transition-none"
              />
              <span>All posts</span>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
