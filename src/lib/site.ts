// Shared site data and brand constants.
// Centralized so the homepage, About page, footer, nav, tool pages, llms.txt,
// and JSON-LD all speak with one voice and one set of facts.

export const SITE_URL = "https://strategi.is";
export const SITE_NAME = "Strategi";
export const CONTACT_EMAIL = "hello@strategi.is";

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/strategigtm",
  x: "https://x.com/HelloStrategi",
  instagram: "https://www.instagram.com/strategi.is/",
};

// ─────────────────────────────────────────────────────────────────────────────
// Founders
//   founder-a → Tanissh (brown tee, podcast microphone)
//   founder-b → Adnan (navy polo, glasses)
// Everything that renders founders (About page, Organization JSON-LD, llms.txt)
// reads from this single array.
// ─────────────────────────────────────────────────────────────────────────────

export interface Founder {
  id: string;
  name: string;
  role: string;
  photo: string;
  alt: string;
  linkedin?: string;
  instagram?: string;
  x?: string;
}

export const FOUNDERS: Founder[] = [
  {
    id: "founder-a",
    name: "Tanissh",
    role: "Co-Founder",
    photo: "/founders/founder-a.jpg",
    alt: "Tanissh, Co-Founder of Strategi",
    linkedin: "https://www.linkedin.com/in/tanissh-amit",
    instagram: "https://www.instagram.com/tanisshamit",
  },
  {
    id: "founder-b",
    name: "Adnan",
    role: "Co-Founder",
    photo: "/founders/founder-b.jpg",
    alt: "Adnan, Co-Founder of Strategi",
    linkedin: "https://www.linkedin.com/in/adnan30baig",
    instagram: "https://www.instagram.com/adnan30baig",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// The measurement layer — Strategi's category-defining surface area.
// "live" products have their own routes; "building" products capture interest.
// ─────────────────────────────────────────────────────────────────────────────

export interface IntelligenceProduct {
  id: string;
  name: string;
  kicker: string;
  desc: string;
  href: string;
  status: "live" | "building";
  /** Short label for the status pill / availability. */
  availability: string;
  /** True if href is an external/mailto link. */
  external?: boolean;
}

export const INTELLIGENCE: IntelligenceProduct[] = [
  {
    id: "who-owns-ai",
    name: "Who Owns AI?",
    kicker: "Public leaderboard",
    desc: "Which businesses AI recommends first, ranked by category. The scoreboard for the recommendation economy.",
    href: "/who-owns-ai",
    status: "live",
    availability: "Live",
  },
  {
    id: "ai-answer-demo",
    name: "The AI Answer Demo",
    kicker: "Interactive demo",
    desc: "Ask a real buying question and watch what ChatGPT, Gemini, and Perplexity return — and who gets left out of the answer.",
    href: "/ai-answer-demo",
    status: "live",
    availability: "Live",
  },
  {
    id: "geo-roi-calculator",
    name: "GEO ROI Calculator",
    kicker: "Interactive model",
    desc: "Estimate the AI-referral opportunity your business is leaving on the table while it stays out of the answer.",
    href: "/geo-roi-calculator",
    status: "live",
    availability: "Live",
  },
  {
    id: "ai-visibility-index",
    name: "AI Visibility Index",
    kicker: "Quarterly report",
    desc: "A standing index of which categories — and which kinds of companies — AI recommends most. Backlinks, mentions, authority.",
    href: `mailto:${CONTACT_EMAIL}?subject=AI%20Visibility%20Index%20%E2%80%94%20early%20access`,
    status: "building",
    availability: "In development",
    external: true,
  },
  {
    id: "state-of-ai-discovery",
    name: "State of AI Discovery",
    kicker: "Weekly briefing",
    desc: "Not SEO news. Not AI news. One question, every week: which brands are winning AI recommendations, and why.",
    href: `mailto:${CONTACT_EMAIL}?subject=Subscribe%20%E2%80%94%20State%20of%20AI%20Discovery`,
    status: "building",
    availability: "Subscribe",
    external: true,
  },
  {
    id: "prompt-library",
    name: "The Prompt Library",
    kicker: "Open resource",
    desc: "The real questions buyers ask AI, by industry. See exactly where discovery now happens — and what you are being measured against.",
    href: `mailto:${CONTACT_EMAIL}?subject=Prompt%20Library%20%E2%80%94%20early%20access`,
    status: "building",
    availability: "In development",
    external: true,
  },
];

// The three live, interactive tools — surfaced in nav and cross-links.
export const LIVE_TOOLS = INTELLIGENCE.filter((p) => p.status === "live");

// ─────────────────────────────────────────────────────────────────────────────
// The Strategi manifesto — SEO → GEO contrast lines.
// ─────────────────────────────────────────────────────────────────────────────

export const MANIFESTO: { seo: string; geo: string }[] = [
  { seo: "SEO optimized pages.", geo: "GEO optimizes answers." },
  { seo: "SEO chased rankings.", geo: "GEO earns recommendations." },
  { seo: "SEO was about clicks.", geo: "GEO is about trust." },
  { seo: "SEO put you on a list.", geo: "GEO puts you in the answer." },
  { seo: "SEO measured traffic.", geo: "GEO measures inclusion." },
  { seo: "Search showed ten options.", geo: "AI returns one recommendation." },
];
