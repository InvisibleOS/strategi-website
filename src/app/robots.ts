import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // OpenAI crawlers
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // Anthropic
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Google AI / Search
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      // Bing / Microsoft
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // Meta
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      // Apple
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      // Cohere
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      // Common Crawl (used by many AI training sets)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // You.com
      {
        userAgent: "YouBot",
        allow: "/",
      },
      // Amazon
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      // Bytedance / TikTok AI
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      // Brave Search
      {
        userAgent: "BraveSearch",
        allow: "/",
      },
      // Meta AI
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      // DeepSeek
      {
        userAgent: "Deepseekbot",
        allow: "/",
      },
    ],
    sitemap: "https://strategi.is/sitemap.xml",
    host: "https://strategi.is",
  };
}
