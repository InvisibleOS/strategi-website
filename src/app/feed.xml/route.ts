import { getFeedXml } from "@/lib/cms";

export const revalidate = 86400;

export async function GET() {
  try {
    const xml = await getFeedXml();
    return new Response(xml, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control":
          "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return new Response("Feed unavailable", { status: 503 });
  }
}
