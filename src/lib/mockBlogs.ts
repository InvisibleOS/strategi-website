/**
 * ============================================================================
 *  MOCK_BLOGS — TEMPORARY FAKE BLOG DATA  (⚠️ DELETE BEFORE MERGE)
 * ----------------------------------------------------------------------------
 *  Local placeholder posts so /blogs (and individual /blogs/[slug] pages)
 *  render without the CMS backend running.
 *
 *  The mock activates automatically whenever CMS_BASE_URL is not set, and is
 *  bypassed the moment you configure a real CMS. See src/lib/cms.ts.
 *
 *  TO REMOVE EVERYTHING (2 steps):
 *    1. Delete this file:            src/lib/mockBlogs.ts
 *    2. Delete the marked blocks in: src/lib/cms.ts
 *       → run: grep -n MOCK_BLOGS src/lib/cms.ts
 * ============================================================================
 */
import type { Post, PostListResponse, Category, Tag, FeaturedImage } from "./cms";

function makePost(p: {
  title: string;
  slug: string;
  excerpt: string;
  category: { name: string; slug: string };
  tags: { name: string; slug: string }[];
  published_at: string;
  body_html: string;
}): Post {
  const words = p.body_html.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  return {
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    body_html: p.body_html,
    published_at: p.published_at,
    updated_at: p.published_at,
    reading_time_minutes: Math.max(1, Math.ceil(words / 200)),
    author: {
      name: "Tanissh Amit",
      bio: "Writing on AI Presence and generative engine optimization at Strategi.",
      avatar_url: null,
      url: null,
    },
    category: p.category,
    tags: p.tags,
    featured_image: null,
    citations: [],
    meta: {
      title: `${p.title} | Strategi`,
      description: p.excerpt,
      canonical_url: `https://strategi.is/blogs/${p.slug}`,
      og_title: p.title,
      og_description: p.excerpt,
      og_image_url: "https://strategi.is/strategi.png",
      twitter_card: "summary_large_image",
      twitter_title: p.title,
      twitter_description: p.excerpt,
      twitter_image: null,
    },
    schema: {
      article: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: p.title,
        description: p.excerpt,
        datePublished: p.published_at,
      },
      faq: null,
      breadcrumb: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Blog", item: "https://strategi.is/blogs" },
          { "@type": "ListItem", position: 2, name: p.title, item: `https://strategi.is/blogs/${p.slug}` },
        ],
      },
    },
    related: [],
  };
}

function makeCover(src: string, alt: string): FeaturedImage {
  return { url: src, alt, caption: "", url_thumbnail: src, url_card: src, url_wide: src };
}

const MOCK_POSTS: Post[] = [
  makePost({
    title: "GEO, AEO, AIO, LLMO: A Field Guide to the Terms",
    slug: "geo-aeo-aio-llmo-field-guide",
    excerpt:
      "GEO, AEO, AIO, LLMO explained: four names for one shift from ranking to being the AI answer. A plain field guide to what actually differs.",
    category: { name: "Educational Content", slug: "educational-content" },
    tags: [
      { name: "GEO", slug: "geo" },
      { name: "AEO", slug: "aeo" },
    ],
    published_at: "2026-06-15T12:00:00.000Z",
    body_html:
      "<p>GEO. AEO. AIO. LLMO. Four acronyms, one underlying shift: from ranking on a results page to being the answer an AI gives. Here's what each term actually means.</p>" +
      "<h2>The one shift behind every acronym</h2><p>Every one of these names describes the same move — earning a place inside the model's answer instead of a link below it.</p>" +
      "<h2>Where the terms differ</h2><p>GEO is the broad discipline; AEO focuses on answer engines; AIO on AI overviews; LLMO on the models themselves. The emphasis differs, the goal doesn't.</p>" +
      "<h2>What to actually do</h2><p>Pick the language your team understands and focus on the fundamentals: clear entities, citable claims, and answer-shaped content.</p>",
  }),
  makePost({
    title: "AI Presence vs. SEO: Why Ranking Doesn't Make AI Recommend You",
    slug: "ai-presence-vs-seo",
    excerpt:
      "SEO ranks your links. AI Presence gets you named inside the answer buyers read. Here's why ranking first no longer guarantees the recommendation.",
    category: { name: "Educational Content", slug: "educational-content" },
    tags: [
      { name: "AI Presence", slug: "ai-presence" },
      { name: "SEO", slug: "seo" },
    ],
    published_at: "2026-06-15T12:00:00.000Z",
    body_html:
      "<p>SEO ranks your links. AI Presence gets you named inside the answer buyers actually read. Ranking first no longer guarantees the recommendation.</p>" +
      "<h2>Ranking is not recommendation</h2><p>A model synthesizes an answer and names a few sources. Position ten on a results page is invisible inside that answer.</p>" +
      "<h2>What earns a mention</h2><p>Authority, consensus across trusted sources, and clarity the model can parse and trust.</p>",
  }),
  makePost({
    title: "The Recommendation Economy, Defined",
    slug: "the-recommendation-economy-defined",
    excerpt:
      "How AI systems decide which companies get recommended to buyers, why trust beats ad budgets, and what that means for how you grow.",
    category: { name: "Educational Content", slug: "educational-content" },
    tags: [
      { name: "AI Presence", slug: "ai-presence" },
      { name: "Recommendation", slug: "recommendation" },
    ],
    published_at: "2026-06-14T12:00:00.000Z",
    body_html:
      "<p>How AI systems decide which companies get recommended to buyers — why trust beats ad budgets, and what that means for how you grow.</p>" +
      "<h2>Trust over spend</h2><p>You can't buy your way into an AI recommendation the way you buy ads. The currency is credibility.</p>" +
      "<h2>Building for the answer</h2><p>Earn citations, define your entity clearly, and publish claims worth quoting.</p>",
  }),
];

// Randomly assign the Title/ cover images (copied into /public/blog-covers) to
// the 3 cards — a random permutation so each card gets a distinct image.
const COVER_IMAGES = ["/blog-covers/1.png", "/blog-covers/2.png", "/blog-covers/3.png"];
const shuffledCovers = [...COVER_IMAGES];
for (let i = shuffledCovers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledCovers[i], shuffledCovers[j]] = [shuffledCovers[j], shuffledCovers[i]];
}
MOCK_POSTS.forEach((post, i) => {
  post.featured_image = makeCover(shuffledCovers[i % shuffledCovers.length], post.title);
});

const MOCK_CATEGORIES: Category[] = [
  {
    name: "Educational Content",
    slug: "educational-content",
    description: "Plain-language explainers on AI Presence and GEO.",
    post_count: 3,
  },
];

const MOCK_TAGS: Tag[] = [
  { name: "GEO", slug: "geo", post_count: 1 },
  { name: "AEO", slug: "aeo", post_count: 1 },
  { name: "AI Presence", slug: "ai-presence", post_count: 2 },
  { name: "SEO", slug: "seo", post_count: 1 },
  { name: "Recommendation", slug: "recommendation", post_count: 1 },
];

export function mockGetBlogPosts(
  params: { limit?: number; cursor?: string; category?: string; tag?: string } = {}
): PostListResponse {
  let posts = MOCK_POSTS;
  if (params.category) posts = posts.filter((p) => p.category?.slug === params.category);
  if (params.tag) posts = posts.filter((p) => p.tags.some((t) => t.slug === params.tag));
  return { posts, next_cursor: null, total: posts.length };
}

export function mockGetBlogPost(slug: string): Post | null {
  return MOCK_POSTS.find((p) => p.slug === slug) ?? null;
}

export function mockGetCategories(): { categories: Category[] } {
  return { categories: MOCK_CATEGORIES };
}

export function mockGetTags(): { tags: Tag[] } {
  return { tags: MOCK_TAGS };
}
