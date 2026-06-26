import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/cms";
import { INDUSTRIES } from "@/lib/industries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://strategi.is";

  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${baseUrl}/who-owns-ai/${i.slug}`,
    lastModified: new Date("2026-06-03"),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-06-13"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date("2026-06-13"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-06-03"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/who-owns-ai`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    ...industryRoutes,
    {
      url: `${baseUrl}/geo-roi-calculator`,
      lastModified: new Date("2026-06-03"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ai-answer-demo`,
      lastModified: new Date("2026-06-03"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-06-22"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-06-22"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  try {
    const { posts } = await getBlogPosts({ limit: 50 });
    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.updated_at),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    return [...staticRoutes, ...blogRoutes];
  } catch {
    return staticRoutes;
  }
}
