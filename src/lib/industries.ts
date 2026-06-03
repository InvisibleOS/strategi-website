// Industry definitions for the "Who Owns AI?" hub and the per-industry
// "GEO for [industry]" landing pages (/who-owns-ai/[industry]).
//
// These pages are SEO + ad-campaign destinations: each targets "GEO for X" /
// "AI visibility for X" intent, shows an illustrative leaderboard for the
// category, and sells how Strategi engineers AI visibility for that industry.
//
// All brand names are FICTIONAL and all shares are MODELED estimates — never a
// measurement of a real company. The shared disclaimer makes this explicit.

export interface IndustryLeader {
  brand: string;
  /** Illustrative AI Recommendation Share, %. */
  share: number;
}

export interface IndustryApproach {
  title: string;
  body: string;
}

export interface Industry {
  slug: string;
  /** Short display name, e.g. "Real Estate". */
  name: string;
  /** Short label for chips/cards. */
  short: string;
  /** A representative high-intent buyer question. */
  prompt: string;
  /** One-line positioning shown under the hero. */
  intro: string;
  /** Why AI visibility matters specifically in this industry. */
  why: string;
  /** Three industry-specific GEO moves (the sellable bit). */
  approach: IndustryApproach[];
  /** Illustrative leaderboard (fictional brands, modeled shares). */
  leaders: IndustryLeader[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    short: "Real Estate",
    prompt: "“Who are the most trusted luxury property developers?”",
    intro:
      "Buyers no longer start at a portal. They ask AI which developer to trust, which project to tour, which area holds value — and they act on the names it returns.",
    why:
      "Property is a high-consideration, high-trust purchase, and AI now mediates the shortlist. Most developers are invisible in it — described vaguely, confused with a competitor, or left out of the answer entirely. The developer AI names first wins the tour.",
    approach: [
      {
        title: "Project & entity clarity",
        body: "We make every project, tower, and the parent developer a clean, distinct entity AI can recognise — so your inventory is never blended with a competitor's.",
      },
      {
        title: "Location authority",
        body: "We build the structured, corroborated signals — specs, approvals, amenities, location context — that let AI recommend you for high-intent “best developer in [area]” questions.",
      },
      {
        title: "Reputation corroboration",
        body: "We align the listings, press, and directories AI cross-references, so your reputation reads consistently everywhere the model looks.",
      },
    ],
    leaders: [
      { brand: "Meridian Group", share: 41 },
      { brand: "Atlas Reserve", share: 28 },
      { brand: "Harborstone Estates", share: 17 },
      { brand: "Northwind Properties", share: 9 },
      { brand: "Solene Living", share: 5 },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    short: "Hospitality",
    prompt: "“Where should I stay for a luxury coastal retreat?”",
    intro:
      "Travellers ask AI where to stay before they ever open a booking site. The property AI names is the property they book.",
    why:
      "Hospitality lives and dies on discovery. When AI answers “best boutique hotel in [city]” with two or three names, occupancy follows. Most properties are described by stale third-party blurbs, not by their own positioning.",
    approach: [
      {
        title: "Property & experience clarity",
        body: "We define what makes the property distinct — design, location, experience — in language AI can extract and recommend, not just an amenities list.",
      },
      {
        title: "Experience-intent coverage",
        body: "We expand inclusion from “hotels in [city]” to the experience queries that actually convert: romantic, coastal, business, family.",
      },
      {
        title: "Reviews & guide corroboration",
        body: "We align the review platforms and travel guides AI trusts, so your property surfaces with an accurate, current story.",
      },
    ],
    leaders: [
      { brand: "Solene Resorts", share: 36 },
      { brand: "Harborstone Collection", share: 27 },
      { brand: "Vantage Hotels", share: 18 },
      { brand: "Atlas Reserve Hotels", share: 12 },
      { brand: "Kestrel Stays", share: 7 },
    ],
  },
  {
    slug: "legal",
    name: "Legal",
    short: "Legal",
    prompt: "“Who are the leading firms for cross-border M&A?”",
    intro:
      "General counsel and founders increasingly ask AI to shortlist firms before they ever make a call. Legal is one of the fastest-moving categories in AI discovery.",
    why:
      "Law is YMYL — AI weighs corroborated authority heavily before it names a firm. That rewards firms with real track records and quietly punishes those with thin or inconsistent digital footprints, however strong their reputation is offline.",
    approach: [
      {
        title: "Practice-area entity clarity",
        body: "We make each practice a recognisable entity, so AI recommends you for the specific matter — M&A, IP, disputes — not just “a law firm”.",
      },
      {
        title: "Authority & credential corroboration",
        body: "We surface the rankings, representative matters, and authoritative coverage AI cross-references for high-stakes legal queries.",
      },
      {
        title: "Jurisdiction & specialty coverage",
        body: "We expand inclusion across the jurisdictions and niches your buyers actually ask about.",
      },
    ],
    leaders: [
      { brand: "Harborstone Partners", share: 43 },
      { brand: "Meridian Legal", share: 25 },
      { brand: "Atlas Counsel", share: 16 },
      { brand: "Northwind LLP", share: 10 },
      { brand: "Solene Advisory", share: 6 },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    short: "Healthcare",
    prompt: "“What is the best private hospital for cardiac care?”",
    intro:
      "Patients ask AI which hospital, which specialist, which clinic to trust — and AI is deliberately cautious about who it names.",
    why:
      "Healthcare is the deepest YMYL category. AI demands accreditation, outcomes, and corroborated authority before it recommends a provider. Get those signals right and you become the trusted default; get them wrong and you are simply absent.",
    approach: [
      {
        title: "Specialty & accreditation clarity",
        body: "We make your specialties, accreditations, and outcomes machine-readable, so AI recommends you for specific care — not just “a hospital near me”.",
      },
      {
        title: "Trust-signal corroboration",
        body: "We align the authoritative medical sources AI weighs, so your credibility reads consistently across the web.",
      },
      {
        title: "Local & specialty coverage",
        body: "We build inclusion across the “best [specialty] near me” questions that drive patient choice.",
      },
    ],
    leaders: [
      { brand: "Kestrel Health", share: 38 },
      { brand: "Vantage Medical Centre", share: 31 },
      { brand: "Harborstone Clinic", share: 16 },
      { brand: "Northwind Care", share: 10 },
      { brand: "Solene Hospital", share: 5 },
    ],
  },
  {
    slug: "education",
    name: "Education",
    short: "Education",
    prompt: "“Which universities are strongest for computer science?”",
    intro:
      "Prospective students and parents ask AI which programs are strongest before they ever request a brochure.",
    why:
      "Education decisions are researched obsessively through AI now. The institutions AI recommends for “best [program]” shape application pipelines — and rankings alone no longer decide who gets named.",
    approach: [
      {
        title: "Program entity clarity",
        body: "We make each program a distinct, citable entity, so AI recommends you for the specific field — not just the institution's name.",
      },
      {
        title: "Outcomes & authority corroboration",
        body: "We surface the outcomes, research, and authoritative coverage AI cross-references.",
      },
      {
        title: "Intent coverage",
        body: "We expand inclusion from rankings queries to the outcome- and fit-based questions students actually ask.",
      },
    ],
    leaders: [
      { brand: "Atlas University", share: 44 },
      { brand: "Meridian Institute", share: 24 },
      { brand: "Kestrel College", share: 15 },
      { brand: "Northwind Polytechnic", share: 11 },
      { brand: "Vantage Academy", share: 6 },
    ],
  },
  {
    slug: "b2b-saas",
    name: "B2B SaaS",
    short: "B2B SaaS",
    prompt: "“What is the best platform for revenue operations?”",
    intro:
      "B2B buyers research vendors through AI long before they hit your site or talk to sales. The shortlist AI builds is the shortlist you compete on.",
    why:
      "Software is bought on comparison. When AI answers “best platform for [use case]”, it synthesises from docs, reviews, and third-party coverage. Most vendors are strong on their own docs and invisible everywhere AI actually looks.",
    approach: [
      {
        title: "Category & use-case clarity",
        body: "We position you as the answer to specific use-case queries — not a generic “tool” — so AI recommends you for the jobs you win.",
      },
      {
        title: "Comparison-content readiness",
        body: "We build the structured, citable capability and comparison content AI synthesises into recommendations.",
      },
      {
        title: "Third-party corroboration",
        body: "We align the review sites and analyst coverage AI weighs, so you surface in the consideration set.",
      },
    ],
    leaders: [
      { brand: "Vantage Systems", share: 39 },
      { brand: "Northwind Cloud", share: 26 },
      { brand: "Meridian Labs", share: 19 },
      { brand: "Kestrel Software", share: 11 },
      { brand: "Atlas Stack", share: 5 },
    ],
  },
  {
    slug: "wealth-management",
    name: "Wealth Management",
    short: "Wealth",
    prompt: "“Which firms are best for managing generational wealth?”",
    intro:
      "High-net-worth clients and founders ask AI who to trust with serious money before they take a single meeting.",
    why:
      "Wealth is YMYL and relationship-driven, but discovery still starts with AI. The firm AI names for “managing generational wealth” or “post-exit planning” earns the introduction — and most firms are entity-ambiguous across regions.",
    approach: [
      {
        title: "Specialty & entity clarity",
        body: "We make your advisory specialties — liquidity events, family office, concentrated stock — distinct entities AI recommends for the right client.",
      },
      {
        title: "Authority corroboration",
        body: "We align the credentials and authoritative coverage AI cross-references for high-trust financial queries.",
      },
      {
        title: "Segment coverage",
        body: "We expand inclusion across the client segments and planning needs your buyers ask about.",
      },
    ],
    leaders: [
      { brand: "Atlas Reserve Capital", share: 40 },
      { brand: "Kestrel Wealth", share: 29 },
      { brand: "Vantage Private", share: 16 },
      { brand: "Meridian Trust", share: 10 },
      { brand: "Harborstone Partners Wealth", share: 5 },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
