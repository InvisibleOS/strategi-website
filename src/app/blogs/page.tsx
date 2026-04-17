import Link from "next/link";
import { getBlogPosts, getCategories, getTags } from "@/lib/cms";
import type { Metadata } from "next";
import type { Post, Category, Tag } from "@/lib/cms";

const SITE_URL = "https://strategi.is";
const OG_IMAGE = `${SITE_URL}/strategi.png`;

export const metadata: Metadata = {
  title: "Blog — AI Presence Insights & Strategies",
  description:
    "Expert insights on AI Presence, GEO optimization, and how established businesses get recommended by ChatGPT, Gemini, and Perplexity. Read the latest strategies.",
  alternates: {
    canonical: `${SITE_URL}/blogs`,
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/blogs`,
    siteName: "Strategi",
    title: "Blog — AI Presence Insights & Strategies | Strategi",
    description:
      "Expert insights on AI Presence, GEO optimization, and how established businesses get recommended by AI systems.",
    images: [
      {
        url: OG_IMAGE,
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
    images: [OG_IMAGE],
  },
};

function BlogJsonLd({
  posts,
  activeCategory,
  activeTag,
}: {
  posts: Post[];
  activeCategory?: string;
  activeTag?: string;
}) {
  const blog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Strategi Blog — AI Presence Insights",
    description:
      "Expert insights on AI Presence, generative engine optimization, and making businesses get recommended by AI systems.",
    url: `${SITE_URL}/blogs`,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Strategi",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/strategi.png`,
      },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strategi",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blogs`,
      },
    ],
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: activeCategory
      ? `Blog — ${activeCategory}`
      : activeTag
        ? `Blog — tagged ${activeTag}`
        : "Strategi Blog",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: posts.length,
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blogs/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blog) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {posts.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
        />
      )}
    </>
  );
}

function PostCard({
  post,
  featured,
  priority,
}: {
  post: Post;
  featured?: boolean;
  priority?: boolean;
}) {
  const date = new Date(post.published_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const img = post.featured_image;
  // Pre-built variants from the CMS: url_card (1200x630) for featured hero,
  // url_thumbnail (400x400) for regular cards.
  const imgSrc = img ? (featured ? img.url_card : img.url_thumbnail) : null;

  return (
    <article
      className={`group relative flex flex-col bg-white/[0.02] border border-white/[0.06] rounded-lg overflow-hidden hover:border-white/20 focus-within:border-[#d4620a]/60 transition-colors duration-500 motion-reduce:transition-none ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <Link
        href={`/blogs/${post.slug}`}
        className="flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded-lg"
      >
        {imgSrc ? (
          <div
            className={`relative overflow-hidden ${
              featured ? "aspect-[16/9]" : "aspect-[16/10]"
            }`}
          >
            <img
              src={imgSrc}
              alt={img?.alt || post.title}
              width={featured ? 1200 : 400}
              height={featured ? 630 : 400}
              loading={priority ? "eager" : "lazy"}
              decoding={priority ? "sync" : "async"}
              fetchPriority={priority ? "high" : "auto"}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent"
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className={`relative ${
              featured ? "aspect-[16/9]" : "aspect-[16/10]"
            } bg-gradient-to-br from-[#d4620a]/10 via-[#050505] to-[#050505] flex items-center justify-center`}
          >
            <span className="text-[#d4620a]/20 text-6xl font-bold tracking-tighter select-none">
              S
            </span>
          </div>
        )}

        <div className="flex flex-col flex-1 p-5 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            {post.category && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4620a]">
                {post.category.name}
              </span>
            )}
            <span aria-hidden="true" className="text-[10px] font-mono text-white/30">
              /
            </span>
            <time
              dateTime={post.published_at}
              className="text-[10px] font-mono uppercase tracking-widest text-white/50"
            >
              {date}
            </time>
          </div>

          <h2
            className={`font-bold tracking-tight leading-tight text-white group-hover:text-[#d4620a] transition-colors duration-300 motion-reduce:transition-none mb-3 ${
              featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
            }`}
          >
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="text-sm text-white/60 font-light leading-relaxed line-clamp-2 mb-4">
              {post.excerpt}
            </p>
          )}

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/[0.06]">
            {post.author ? (
              <div className="flex items-center gap-2">
                {post.author.avatar_url && (
                  <img
                    src={post.author.avatar_url}
                    alt=""
                    width={20}
                    height={20}
                    loading="lazy"
                    decoding="async"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                )}
                <span className="text-xs text-white/60 font-light">
                  {post.author.name}
                </span>
              </div>
            ) : (
              <span />
            )}
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 group-hover:text-[#d4620a] transition-colors">
              Read&nbsp;&rarr;
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

function CategoryFilters({
  categories,
  active,
  activeTag,
}: {
  categories: Category[];
  active?: string;
  activeTag?: string;
}) {
  const visible = categories.filter((c) => c.post_count > 0);
  if (visible.length === 0 && !activeTag) return null;

  return (
    <nav
      className="mb-12 md:mb-16 flex flex-wrap gap-2"
      aria-label="Filter by category"
    >
      <Link
        href="/blogs"
        aria-current={!active && !activeTag ? "page" : undefined}
        className={`min-h-11 inline-flex items-center px-4 py-2 text-xs font-mono uppercase tracking-widest border rounded-full transition-colors duration-300 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
          !active && !activeTag
            ? "bg-white text-[#050505] border-white"
            : "text-white/70 border-white/15 hover:border-white/40 hover:text-white"
        }`}
      >
        All
      </Link>
      {visible.map((category) => (
        <Link
          key={category.slug}
          href={`/blogs?category=${category.slug}`}
          aria-current={active === category.slug ? "page" : undefined}
          className={`min-h-11 inline-flex items-center px-4 py-2 text-xs font-mono uppercase tracking-widest border rounded-full transition-colors duration-300 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
            active === category.slug
              ? "bg-white text-[#050505] border-white"
              : "text-white/70 border-white/15 hover:border-white/40 hover:text-white"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}

function ActiveTagBanner({ tag }: { tag: Tag | undefined }) {
  if (!tag) return null;
  return (
    <div className="mb-12 md:mb-16 flex items-center gap-3 text-sm">
      <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
        Filtered by tag
      </span>
      <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-white bg-[#d4620a]/15 border border-[#d4620a]/30 rounded-full">
        #{tag.name}
        <Link
          href="/blogs"
          aria-label="Clear tag filter"
          className="text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] rounded-full"
        >
          &times;
        </Link>
      </span>
    </div>
  );
}

export default async function BlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ cursor?: string; category?: string; tag?: string }>;
}) {
  const resolvedParams = await searchParams;

  let posts: Post[] = [];
  let next_cursor: string | null = null;
  let total = 0;
  let categories: Category[] = [];
  let tags: Tag[] = [];

  try {
    const [postsData, categoriesData, tagsData] = await Promise.all([
      getBlogPosts({
        limit: 12,
        cursor: resolvedParams.cursor,
        category: resolvedParams.category,
        tag: resolvedParams.tag,
      }),
      getCategories(),
      getTags(),
    ]);
    posts = postsData.posts;
    next_cursor = postsData.next_cursor;
    total = postsData.total;
    categories = categoriesData.categories;
    tags = tagsData.tags;
  } catch {
    // CMS unavailable — render empty state
  }

  const activeCategory = resolvedParams.category;
  const activeTagSlug = resolvedParams.tag;
  const activeTag = activeTagSlug
    ? tags.find((t) => t.slug === activeTagSlug)
    : undefined;

  return (
    <>
      <BlogJsonLd
        posts={posts}
        activeCategory={
          categories.find((c) => c.slug === activeCategory)?.name
        }
        activeTag={activeTag?.name}
      />

      <section className="relative bg-[#050505] min-h-screen">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-[#d4620a]/[0.03] blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20">
          <header className="mb-16 md:mb-24">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-6">
              Insights &amp; Strategy
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white mb-6">
              AI Presence Insights
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-xl font-light leading-relaxed">
              Deep dives into AI Presence, generative engine optimization, and
              the strategies that make businesses get recommended by AI.
            </p>
          </header>

          <CategoryFilters
            categories={categories}
            active={activeCategory}
            activeTag={activeTagSlug}
          />
          <ActiveTagBanner tag={activeTag} />

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post, i) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  featured={i === 0}
                  priority={i === 0}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div
                aria-hidden="true"
                className="w-16 h-16 rounded-full border border-white/15 flex items-center justify-center mb-6"
              >
                <span className="text-2xl text-white/40">0</span>
              </div>
              <p className="text-white/60 font-light text-lg mb-2">
                No posts yet
              </p>
              <p className="text-white/40 text-sm">
                {activeCategory || activeTagSlug
                  ? "Nothing matches this filter. Try another."
                  : "Content is on the way. Check back soon."}
              </p>
            </div>
          )}

          {posts.length > 0 && (next_cursor || total > 0) && (
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-white/[0.06]">
              <p className="text-xs font-mono text-white/50 uppercase tracking-widest">
                {posts.length} of {total} posts
              </p>
              {next_cursor && (
                <Link
                  href={`/blogs?cursor=${next_cursor}${
                    activeCategory ? `&category=${activeCategory}` : ""
                  }${activeTagSlug ? `&tag=${activeTagSlug}` : ""}`}
                  className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded-full px-3 py-2 min-h-11 transition-colors motion-reduce:transition-none"
                >
                  <span>Load more</span>
                  <span
                    aria-hidden="true"
                    className="w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-[#d4620a] transition-all duration-300 motion-reduce:transition-none"
                  />
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
