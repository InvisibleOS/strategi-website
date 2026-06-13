import { NextRequest, NextResponse } from "next/server";

// Early-access waitlist endpoint. The browser posts the form here; this route
// (server-side only) forwards it to the configured sheet webhook so the
// credential is never exposed to the client.
//
// Configure in .env.local:
//   EARLY_ACCESS_WEBHOOK=<POST url that appends a row to the sheet>
//   EARLY_ACCESS_TOKEN=<optional bearer token / api key, if your provider needs one>

export async function POST(request: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const str = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

  const name = str(data.name, 200);
  const email = str(data.email, 200);
  const company = str(data.company, 300);
  const note = str(data.note, 2000);
  const honeypot = str(data.website, 200); // bots fill this hidden field

  // Silently accept and drop obvious bot submissions.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 }
    );
  }

  const endpoint = process.env.EARLY_ACCESS_WEBHOOK;
  if (!endpoint) {
    return NextResponse.json(
      { error: "The waitlist is not connected yet. Please email us instead." },
      { status: 503 }
    );
  }

  const payload = {
    name,
    email,
    company,
    note,
    source: "products-early-access",
    submittedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.EARLY_ACCESS_TOKEN
          ? { Authorization: `Bearer ${process.env.EARLY_ACCESS_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Could not save your request. Please try again." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Could not save your request. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
