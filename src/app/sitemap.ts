import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://strategi.is";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
