import Link from "next/link";
import { getBlogPosts, getCategories, getTags } from "@/lib/cms";
import type { Metadata } from "next";
import type { Post, Category, Tag } from "@/lib/cms";
import { Heart } from "lucide-react";

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

// Progressive "liquid glass" blur running down the cover. Built from stacked,
// masked copies of the image (filter: blur) — not backdrop-filter — so it renders
// on every browser and phone and stays cheap while scrolling (each blurred copy
// is rasterised once, then just composited; never re-blurred per frame).
//
// Coordinates are percentages of the inner wrapper, whose height is exactly twice
// the cover's natural height (the picture plus its mirror): 37.5% is three-quarters
// down the picture (where the blur begins) and 50% is the seam where the mirror
// starts (where the blur reaches full strength). Below the seam the strongest layer
// stays fully opaque, so the blur holds steady. Because both images scale together,
// these fractions hold at any screen size. Each layer fades in (transparent → black)
// across [from%, 50%] with an increasing radius, so the layers crossfade into a
// smooth ramp; the strongest one (last, painted on top) wins below the seam.
const COVER_BLUR_LAYERS = [
  { blur: 4, from: 37.5 },
  { blur: 9, from: 40.6 },
  { blur: 16, from: 43.8 },
  { blur: 26, from: 46.9 },
];

function PostCard({
  post,
  priority,
}: {
  post: Post;
  priority?: boolean;
}) {
  const img = post.featured_image;
  const imgSrc = img?.url_wide || img?.url_card || null;

  // Cover geometry: the picture sits at the TOP of the card at its natural height. Whatever
  // vertical space is left over below it is filled by a vertically-flipped copy of the same
  // image — a mirror reflection — which the card's overflow clips once the space runs out.
  // This self-adjusts to any ratio: a tall image overflows the card (no reflection shows); a
  // short one (e.g. the new 1080px-tall covers) leaves room, so the mirror fills it.


  return (
    <article className="relative aspect-[9/8] overflow-hidden rounded-3xl border border-white/15 bg-[#0a0a0a] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)] transition-colors duration-300 hover:border-white/50">
      <Link
        href={`/blogs/${post.slug}`}
        className="group relative block h-full w-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4620a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
      >
        {/* Cover image + its mirror reflection (see note above). The inner wrapper holds the
            two stacked images so they hover-zoom together as one; the card's overflow clips the
            reflection where the free space ends. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {imgSrc ? (
            <div className="relative transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none">
              {/* The picture: at the top, shown in full at its natural height */}
              <img
                src={imgSrc}
                alt={img?.alt || post.title}
                loading={priority ? "eager" : "lazy"}
                decoding={priority ? "sync" : "async"}
                fetchPriority={priority ? "high" : "auto"}
                className="block w-full h-auto"
              />
              {/* Same image, flipped vertically, directly below — mirrors across the seam and
                  fills the leftover space (clipped by the card once it runs out) */}
              <img
                src={imgSrc}
                alt=""
                loading="lazy"
                decoding="async"
                className="block w-full h-auto -scale-y-100"
              />
              {/* Gradual blur down the cover — masked, stacked copies of the same
                  picture+mirror (see COVER_BLUR_LAYERS). inset-0 spans the full
                  two-image wrapper, so the % stops track the picture, not the card. */}
              {COVER_BLUR_LAYERS.map((layer) => (
                <div
                  key={layer.blur}
                  className="absolute inset-0"
                  style={{
                    filter: `blur(${layer.blur}px)`,
                    WebkitMaskImage: `linear-gradient(to bottom, transparent ${layer.from}%, #000 50%)`,
                    maskImage: `linear-gradient(to bottom, transparent ${layer.from}%, #000 50%)`,
                  }}
                >
                  <img
                    src={imgSrc}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto"
                  />
                  <img
                    src={imgSrc}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto -scale-y-100"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-[#d4620a]/20 via-[#0a0a0a] to-[#0a0a0a]" />
          )}

          {/* Colour wash: clean over the picture, fading to near-black behind the text below */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_30%,rgba(0,0,0,0.6)_52%,rgba(0,0,0,0.9)_72%)]" />

          {/* Hover: subtle darken across the whole card */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10 motion-reduce:transition-none" />
        </div>

        {/* Favourite (decorative) */}
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20"
        >
          <Heart className="h-5 w-5 text-white" strokeWidth={1.75} />
        </span>

        {/* Content occupies the lower portion of the card (from 56.25% down). justify-end keeps
            the title + description close to the button (any extra space goes above the title);
            the button is fully round and pinned to the bottom. */}
        <div className="absolute inset-x-0 top-[56.25%] bottom-0 flex flex-col justify-end px-7 pb-7">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-white line-clamp-2 md:text-2xl">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-3 text-sm leading-relaxed text-white/70 line-clamp-2">
              {post.excerpt}
            </p>
          )}
          {/* Read more — fully round (h-12 → 24px radius, matching the card's rounded-3xl);
              white w/ black text, turns orange w/ white on card hover. The whole card is the link. */}
          <span className="mt-5 flex h-12 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#0a0a0a] transition-colors duration-300 group-hover:bg-[#d4620a] group-hover:text-white motion-reduce:transition-none">
            Read more
          </span>
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
              {posts.map((post, i) => (
                <PostCard key={post.slug} post={post} priority={i < 2} />
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
