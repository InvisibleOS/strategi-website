import { getLlmsTxt } from "@/lib/cms";

export const revalidate = 86400;

export async function GET() {
  try {
    const text = await getLlmsTxt();
    return new Response(text, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control":
          "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return new Response("# Unavailable\n", {
      status: 503,
      headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
  }
}
