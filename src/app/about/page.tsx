import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/geo/Editorial";
import AboutContent, { type AboutFaqItem } from "./AboutContent";

const PAGE_URL = `${SITE_URL}/about`;
const OG_IMAGE = `${SITE_URL}/strategi.png`;

export const metadata: Metadata = {
  title: "About Strategi — The AI Visibility Authority",
  description:
    "Strategi is the advisory and measurement layer for AI discovery. Read the thesis and see how we make the right businesses get recommended by ChatGPT, Gemini, Perplexity, and Claude.",
  keywords: [
    "About Strategi",
    "AI visibility authority",
    "AI Presence advisory",
    "GEO agency",
    "generative engine optimization",
    "AI recommendation tracking",
    "AI visibility measurement",
    "who gets recommended by AI",
    "AI discovery",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Strategi",
    title: "About Strategi — The AI Visibility Authority",
    description:
      "The advisory and measurement layer for AI discovery. Read the thesis behind Strategi.",
    images: [{ url: OG_IMAGE, width: 1200, height: 1200, alt: "Strategi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloStrategi",
    creator: "@HelloStrategi",
    title: "About Strategi — The AI Visibility Authority",
    description:
      "The advisory and measurement layer for AI discovery. Read the thesis behind Strategi.",
    images: [OG_IMAGE],
  },
};

const ABOUT_FAQ: AboutFaqItem[] = [
  {
    q: "What does Strategi do?",
    a: "Strategi makes the right businesses get recommended by artificial intelligence. When someone asks ChatGPT, Gemini, Perplexity, or Claude for a recommendation in your category, you are either in the answer or you are not. We engineer the entity clarity, machine-readable structure, and authority signals that put established businesses in that answer — and we measure it.",
  },
  {
    q: "Is Strategi an SEO or GEO agency?",
    a: "Neither, in the conventional sense. Most GEO agencies are former SEO firms selling the same keyword playbook under a new acronym. Strategi is a strategic advisory built natively around AI Presence, and increasingly the measurement layer for the whole category. We do not chase rankings. We earn recommendations and track them.",
  },
  {
    q: "Why does Strategi build public tools like the leaderboard and ROI calculator?",
    a: "Because the company that owns the measurement of AI visibility becomes more valuable than the companies selling the service. Public instruments — the Who Owns AI? leaderboard, the AI Answer Demo, the GEO ROI Calculator, the AI Visibility Index — make the category legible and make Strategi the name people think of when they ask how visible they are inside AI.",
  },
  {
    q: "What does an engagement with Strategi cost?",
    a: "Engagements are custom and phase-based, not off-the-shelf packages. Scope depends on your category, your current AI visibility, and how much of the six-phase methodology you need — most run as focused 3-to-6-month programs. We do not publish fixed pricing because no two AI Presence problems are the same. The AI Visibility Diagnostic is where we scope the work and the investment, so that is where to start.",
  },
  {
    q: "How do you prove results without publishing case studies?",
    a: "We report one number you can feel: prompt coverage — of the questions buyers ask AI in your category, how many return your business. We show the movement, for example from 2 of 50 prompts to 18 of 50, and benchmark it live against competitors inside your diagnostic. We keep client outcomes confidential because AI recommendation is a near-zero-sum position: publishing a client's playbook hands it to their rivals. Detailed results are shared, under NDA, during the diagnostic.",
  },
];

function Schemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strategi", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: PAGE_URL },
    ],
  };

  const aboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "About Strategi — The AI Visibility Authority",
    description:
      "Strategi is the advisory and measurement layer for AI discovery. Read the thesis.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    mainEntity: { "@id": `${SITE_URL}/#organization` },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    inLanguage: "en-US",
    primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: ABOUT_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return <JsonLd schema={[breadcrumb, aboutPage, faq]} />;
}

export default function AboutPage() {
  return (
    <>
      <Schemas />
      <AboutContent faq={ABOUT_FAQ} />
    </>
  );
}
