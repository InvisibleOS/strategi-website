import Link from "next/link";
import { getBlogPosts, getCategories, cloudinaryTransform } from "@/lib/cms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI Presence Insights & Strategies",
  description:
    "Expert insights on AI Presence, GEO optimization, and how established businesses get recommended by ChatGPT, Gemini, Perplexity, and other AI systems.",
  alternates: {
    canonical: "https://strategi.is/blogs",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strategi.is/blogs",
    siteName: "Strategi",
    title: "Blog — AI Presence Insights & Strategies | Strategi",
    description:
      "Expert insights on AI Presence, GEO optimization, and how established businesses get recommended by AI systems.",
    images: [
      {
        url: "https://strategi.is/strategi.png",
        width: 1200,
        height: 630,
        alt: "Strategi Blog — AI Presence Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloStrategi",
    creator: "@HelloStrategi",
    title: "Blog — AI Presence Insights & Strategies | Strategi",
    description:
      "Expert insights on AI Presence, GEO optimization, and how established businesses get recommended by AI systems.",
    images: ["https://strategi.is/strategi.png"],
  },
};

function BlogJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Strategi Blog",
    description:
      "Expert insights on AI Presence, generative engine optimization, and making businesses get recommended by AI systems.",
    url: "https://strategi.is/blogs",
    publisher: {
      "@type": "Organization",
      name: "Strategi",
      url: "https://strategi.is",
      logo: {
        "@type": "ImageObject",
        url: "https://strategi.is/strategi.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ cursor?: string; category?: string }>;
}) {
  const resolvedParams = await searchParams;

  const [postsData, categoriesData] = await Promise.all([
    getBlogPosts({
      limit: 12,
      cursor: resolvedParams.cursor,
      category: resolvedParams.category,
    }),
    getCategories(),
  ]);

  const { posts, next_cursor, total } = postsData;
  const { categories } = categoriesData;
  const activeCategory = resolvedParams.category;

  return (
    <>
      <BlogJsonLd />

      <section className="relative bg-[#050505] min-h-screen">
        {/* Atmospheric glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-[#d4620a]/[0.03] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20">
          {/* Header */}
          <header className="mb-16 md:mb-24">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-6">
              Insights & Strategy
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white mb-6">
              The Strategi Blog
            </h1>
            <p className="text-base md:text-lg text-white/40 max-w-xl font-light leading-relaxed">
              Deep dives into AI Presence, generative engine optimization, and
              the strategies that make businesses get recommended by AI.
            </p>
          </header>

          {/* Category filter */}
          {categories.length > 0 && (
            <nav
              className="mb-12 md:mb-16 flex flex-wrap gap-2"
              aria-label="Filter by category"
            >
              <Link
                href="/blogs"
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border rounded-full transition-all duration-300 ${
                  !activeCategory
                    ? "bg-white text-[#050505] border-white"
                    : "text-white/50 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                All
              </Link>
              {categories
                .filter((c) => c.post_count > 0)
                .map((category) => (
                  <Link
                    key={category.slug}
                    href={`/blogs?category=${category.slug}`}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border rounded-full transition-all duration-300 ${
                      activeCategory === category.slug
                        ? "bg-white text-[#050505] border-white"
                        : "text-white/50 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {category.name}
                  </Link>
                ))}
            </nav>
          )}

          {/* Post grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post, i) => (
                <article
                  key={post.slug}
                  className={`group relative flex flex-col bg-white/[0.02] border border-white/[0.06] rounded-lg overflow-hidden hover:border-white/15 transition-all duration-500 ${
                    i === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="flex flex-col h-full"
                  >
                    {/* Image */}
                    {post.featured_image && (
                      <div
                        className={`relative overflow-hidden ${
                          i === 0 ? "aspect-[16/9]" : "aspect-[16/10]"
                        }`}
                      >
                        <img
                          src={cloudinaryTransform(
                            post.featured_image.url,
                            i === 0
                              ? "w_900,h_506,c_fill,f_auto,q_auto"
                              : "w_500,h_312,c_fill,f_auto,q_auto"
                          )}
                          alt={post.featured_image.alt}
                          width={i === 0 ? 900 : 500}
                          height={i === 0 ? 506 : 312}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading={i < 3 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 md:p-6">
                      {/* Category + Date */}
                      <div className="flex items-center gap-3 mb-4">
                        {post.category && (
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4620a]">
                            {post.category.name}
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-white/20">
                          /
                        </span>
                        <time
                          dateTime={post.published_at}
                          className="text-[10px] font-mono uppercase tracking-widest text-white/30"
                        >
                          {new Date(post.published_at).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </time>
                      </div>

                      <h2
                        className={`font-bold tracking-tight leading-tight text-white group-hover:text-[#d4620a] transition-colors duration-300 mb-3 ${
                          i === 0
                            ? "text-2xl md:text-3xl"
                            : "text-lg md:text-xl"
                        }`}
                      >
                        {post.title}
                      </h2>

                      <p className="text-sm text-white/40 font-light leading-relaxed line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Author + Read more */}
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/[0.06]">
                        {post.author && (
                          <div className="flex items-center gap-2">
                            {post.author.avatar_url && (
                              <img
                                src={cloudinaryTransform(
                                  post.author.avatar_url,
                                  "w_32,h_32,c_fill,f_auto"
                                )}
                                alt={post.author.name}
                                width={16}
                                height={16}
                                className="rounded-full"
                              />
                            )}
                            <span className="text-xs text-white/30 font-light">
                              {post.author.name}
                            </span>
                          </div>
                        )}
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 group-hover:text-[#d4620a] transition-colors">
                          Read &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6">
                <span className="text-2xl text-white/20">0</span>
              </div>
              <p className="text-white/40 font-light text-lg mb-2">
                No posts yet
              </p>
              <p className="text-white/20 text-sm">
                {activeCategory
                  ? "No posts in this category. Try a different filter."
                  : "Content is on the way. Check back soon."}
              </p>
            </div>
          )}

          {/* Pagination */}
          {(next_cursor || total > 0) && posts.length > 0 && (
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-white/[0.06]">
              <p className="text-xs font-mono text-white/20 uppercase tracking-widest">
                {posts.length} of {total} posts
              </p>
              {next_cursor && (
                <Link
                  href={`/blogs?cursor=${next_cursor}${
                    activeCategory ? `&category=${activeCategory}` : ""
                  }`}
                  className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                >
                  <span>Load more</span>
                  <span className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-[#d4620a] transition-all duration-300" />
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
