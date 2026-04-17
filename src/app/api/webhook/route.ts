import crypto from "crypto";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Webhook payload shape (see CMS API docs §2.7)
interface WebhookPayload {
  event: "post.published" | "post.updated" | "post.deleted";
  post?: { slug?: string };
}

function verifySignature(body: string, signature: string, secret: string): boolean {
  const expected = crypto.createHmac("sha256", secret).update(body).digest("hex");
  try {
    const a = Buffer.from(signature, "hex");
    const b = Buffer.from(expected, "hex");
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const secret = process.env.CMS_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  const signature = request.headers.get("x-webhook-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 401 });
  }

  const body = await request.text();
  if (!verifySignature(body, signature, secret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload: WebhookPayload;
  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Revalidate everything that depends on CMS content.
  const revalidated: string[] = [];

  revalidatePath("/blogs");
  revalidated.push("/blogs");

  if (payload.post?.slug) {
    revalidatePath(`/blogs/${payload.post.slug}`);
    revalidated.push(`/blogs/${payload.post.slug}`);
  }

  revalidatePath("/feed.xml");
  revalidated.push("/feed.xml");
  revalidatePath("/llms.txt");
  revalidated.push("/llms.txt");
  revalidatePath("/sitemap.xml");
  revalidated.push("/sitemap.xml");

  return NextResponse.json({
    ok: true,
    event: payload.event,
    revalidated,
  });
}
