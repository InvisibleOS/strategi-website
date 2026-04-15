import Link from "next/link";
import { getBlogPost, getBlogPosts, cloudinaryTransform } from "@/lib/cms";
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

  return {
    title: post.meta.title,
    description: post.meta.description,
    authors: post.author ? [{ name: post.author.name }] : [],
    openGraph: {
      type: "article",
      locale: "en_US",
      url: post.meta.canonical_url,
      siteName: "Strategi",
      title: post.meta.og_title,
      description: post.meta.og_description,
      images: post.meta.og_image_url
        ? [
            {
              url: post.meta.og_image_url,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
    },
    twitter: {
      card: "summary_large_image",
      site: "@HelloStrategi",
      creator: "@HelloStrategi",
      title: post.meta.og_title,
      description: post.meta.og_description,
      images: post.meta.og_image_url ? [post.meta.og_image_url] : [],
    },
    alternates: {
      canonical: post.meta.canonical_url,
    },
  };
}

function ReadingTime({ html }: { html: string | null }) {
  if (!html) return null;
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return (
    <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
      {minutes} min read
    </span>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema.article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.schema.breadcrumb),
        }}
      />
      {post.schema.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema.faq) }}
        />
      )}

      <div className="relative bg-[#050505] min-h-screen">
        {/* Atmospheric glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[40vh] bg-[#d4620a]/[0.02] blur-[150px] pointer-events-none" />

        <article className="relative z-10">
          {/* Hero header */}
          <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-8">
            {/* Breadcrumb */}
            <nav
              className="mb-8 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="text-white/30 hover:text-white transition-colors"
              >
                Strategi
              </Link>
              <span className="text-white/15">/</span>
              <Link
                href="/blogs"
                className="text-white/30 hover:text-white transition-colors"
              >
                Blog
              </Link>
              {post.category && (
                <>
                  <span className="text-white/15">/</span>
                  <Link
                    href={`/blogs?category=${post.category.slug}`}
                    className="text-white/30 hover:text-white transition-colors"
                  >
                    {post.category.name}
                  </Link>
                </>
              )}
            </nav>

            {/* Category + Date */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {post.category && (
                <Link
                  href={`/blogs?category=${post.category.slug}`}
                  className="text-[10px] font-mono uppercase tracking-widest text-[#d4620a] hover:text-white transition-colors"
                >
                  {post.category.name}
                </Link>
              )}
              <span className="text-[10px] font-mono text-white/15">/</span>
              <time
                dateTime={post.published_at}
                className="text-[10px] font-mono uppercase tracking-widest text-white/30"
              >
                {new Date(post.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-[10px] font-mono text-white/15">/</span>
              <ReadingTime html={post.body_html} />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.92] text-white max-w-4xl mb-8">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-2xl mb-10">
                {post.excerpt}
              </p>
            )}

            {/* Author */}
            {post.author && (
              <div className="flex items-center gap-4 pb-10 border-b border-white/[0.06]">
                {post.author.avatar_url && (
                  <img
                    src={cloudinaryTransform(
                      post.author.avatar_url,
                      "w_80,h_80,c_fill,f_auto,q_auto"
                    )}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="text-sm font-medium text-white">
                    {post.author.name}
                  </p>
                  {post.author.bio && (
                    <p className="text-xs text-white/30 font-light line-clamp-1 max-w-sm">
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
                    srcSet={cloudinaryTransform(
                      post.featured_image.url,
                      "w_800,h_450,c_fill,f_auto,q_auto"
                    )}
                  />
                  <img
                    src={cloudinaryTransform(
                      post.featured_image.url,
                      "w_1400,h_700,c_fill,f_auto,q_auto"
                    )}
                    alt={post.featured_image.alt}
                    width={1400}
                    height={700}
                    className="w-full h-auto rounded-lg"
                  />
                </picture>
              </div>
              {post.featured_image.caption && (
                <figcaption className="mt-3 text-xs text-white/25 font-mono text-center">
                  {post.featured_image.caption}
                </figcaption>
              )}
            </figure>
          ) : (
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 md:mb-16">
              <div className="h-px bg-white/[0.06]" />
            </div>
          )}

          {/* Post body */}
          {post.body_html && (
            <div className="max-w-3xl mx-auto px-6 md:px-12">
              <div
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: post.body_html }}
              />
            </div>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="max-w-3xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/[0.06]">
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-4">
                Tagged
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag.slug}
                    href={`/blogs?tag=${tag.slug}`}
                    className="px-3 py-1.5 text-xs font-mono text-white/40 border border-white/[0.08] rounded-full hover:border-white/20 hover:text-white transition-all duration-300"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to blog */}
          <div className="max-w-3xl mx-auto px-6 md:px-12 mt-16 mb-24">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/30 hover:text-[#d4620a] transition-colors"
            >
              <span className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-[#d4620a] transition-all duration-300" />
              <span>All posts</span>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
