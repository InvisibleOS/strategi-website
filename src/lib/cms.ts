const CMS_BASE_URL = process.env.CMS_BASE_URL!;
const CMS_API_KEY = process.env.CMS_API_KEY!;
const CMS_SITE = process.env.CMS_SITE!;

async function cmsRequest(
  path: string,
  revalidate: number = 3600
): Promise<Response> {
  const url = `${CMS_BASE_URL}${path}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${CMS_API_KEY}`,
    },
    next: { revalidate },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(
      `CMS API error ${response.status}: ${errorBody.error || response.statusText}`
    );
  }

  return response;
}

export interface FeaturedImage {
  url: string;
  alt: string;
  caption: string;
  url_thumbnail: string;
  url_card: string;
  url_wide: string;
}

export interface RelatedPost {
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  featured_image_url: string | null;
  category: { name: string; slug: string } | null;
}

export interface Citation {
  number: number;
  url: string;
  title: string | null;
  publisher: string | null;
  date: string | null;
  quote: string | null;
}

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  body_html: string | null;
  published_at: string;
  updated_at: string;
  // Authoritative reading time from the CMS. Prefer this over counting words
  // in body_html — that markup includes the auto-injected byline, FAQ JSON,
  // and Sources section, which inflate a local estimate.
  reading_time_minutes: number | null;
  author: {
    name: string;
    bio: string | null;
    avatar_url: string | null;
    url: string | null;
  } | null;
  category: { name: string; slug: string } | null;
  tags: Array<{ name: string; slug: string }>;
  featured_image: FeaturedImage | null;
  citations?: Citation[];
  meta: {
    title: string;
    description: string;
    canonical_url: string;
    og_title: string;
    og_description: string;
    og_image_url: string;
    twitter_card: string;
    twitter_title: string;
    twitter_description: string;
    twitter_image: string | null;
  };
  schema: {
    article: Record<string, unknown>;
    faq: Record<string, unknown> | null;
    breadcrumb: Record<string, unknown>;
  };
  related?: RelatedPost[];
}

export interface PostListResponse {
  posts: Post[];
  next_cursor: string | null;
  total: number;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  post_count: number;
}

export interface Tag {
  name: string;
  slug: string;
  post_count: number;
}

export interface ContentMapResponse {
  total: number;
  published: number;
  in_draft: number;
  gaps: number;
  queries: Array<{
    query: string;
    priority: string;
    status: string;
    post_slug: string | null;
    post_title: string | null;
  }>;
}

export async function getBlogPosts(
  params: {
    limit?: number;
    cursor?: string;
    category?: string;
    tag?: string;
  } = {}
): Promise<PostListResponse> {
  const searchParams = new URLSearchParams({ site: CMS_SITE });
  if (params.limit) searchParams.set("limit", String(params.limit));
  if (params.cursor) searchParams.set("cursor", params.cursor);
  if (params.category) searchParams.set("category", params.category);
  if (params.tag) searchParams.set("tag", params.tag);

  const res = await cmsRequest(`/posts?${searchParams}`);
  return res.json();
}

export async function getBlogPost(slug: string): Promise<Post | null> {
  try {
    const res = await cmsRequest(`/posts/${slug}`);
    return res.json();
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes("404")) return null;
    throw err;
  }
}

export async function getCategories(): Promise<{ categories: Category[] }> {
  const res = await cmsRequest("/categories");
  return res.json();
}

export async function getTags(): Promise<{ tags: Tag[] }> {
  const res = await cmsRequest("/tags");
  return res.json();
}

export async function getContentMap(): Promise<ContentMapResponse> {
  const res = await cmsRequest("/content-map", 1800);
  return res.json();
}

export async function getBlogSitemap(): Promise<string> {
  const res = await cmsRequest("/sitemap", 86400);
  return res.text();
}

export async function getFeedXml(): Promise<string> {
  const res = await cmsRequest("/feed.xml", 86400);
  return res.text();
}

export async function getLlmsTxt(): Promise<string> {
  const res = await cmsRequest("/llms.txt", 86400);
  return res.text();
}

export function cloudinaryTransform(
  baseUrl: string,
  transforms: string
): string {
  return baseUrl.replace("/image/upload/", `/image/upload/${transforms}/`);
}
