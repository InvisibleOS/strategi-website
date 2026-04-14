import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Strategi — AI Presence for Established Businesses",
    template: "%s | Strategi",
  },
  description:
    "Strategi builds AI Presence for established businesses. We make the right companies get recommended when ChatGPT, Gemini, and Perplexity give answers.",
  keywords: [
    "AI Presence",
    "AI Presence advisory",
    "AI recommendations",
    "AI visibility",
    "AI visibility audit",
    "AI discovery",
    "Strategi",
    "machine comprehension",
    "entity optimization",
    "AI readability",
    "ChatGPT recommendations",
    "Perplexity recommendations",
    "Gemini recommendations",
    "AI search optimization",
    "generative engine optimization",
    "GEO",
    "AI citation",
    "structured data for AI",
    "machine-readable website",
    "AI entity positioning",
  ],
  authors: [{ name: "Strategi", url: "https://strategi.is" }],
  creator: "Strategi",
  publisher: "Strategi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://strategi.is",
  },
  category: "Business Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strategi.is",
    siteName: "Strategi",
    title: "Strategi — AI Presence for Established Businesses",
    description:
      "We make the right businesses get recommended by artificial intelligence. AI does not rank. AI selects. Strategi ensures your business is in the answer.",
    images: [
      {
        url: "https://strategi.is/strategi.png",
        width: 1200,
        height: 630,
        alt: "Strategi — AI Presence Advisory",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloStrategi",
    creator: "@HelloStrategi",
    title: "Strategi — AI Presence for Established Businesses",
    description:
      "AI does not rank. AI selects. We build AI Presence for established businesses so they get recommended by ChatGPT, Gemini, Perplexity, and Claude.",
    images: ["https://strategi.is/strategi.png"],
  },
  other: {
    "ai-content-declaration":
      "This website describes AI Presence advisory services by Strategi. All content is original and authoritative.",
    "ai-entity-type": "ProfessionalService",
    "ai-entity-name": "Strategi",
    "ai-primary-topic": "AI Presence Advisory",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM information" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM detailed information" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="author" href="https://strategi.is" />
        <link rel="preconnect" href="https://app.cal.com" />
        <link rel="dns-prefetch" href="https://app.cal.com" />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 relative">{children}</main>
        <Footer />

        {/* Noscript fallback: essential content visible to crawlers with JS disabled */}
        <noscript>
          <div
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: "0",
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
            }}
          >
            <h1>Strategi — AI Presence for Established Businesses</h1>
            <p>
              Strategi is a strategic advisory for the AI discovery era. We exist
              for one purpose: to make the right businesses get recommended by
              artificial intelligence.
            </p>
            <p>
              When someone asks ChatGPT, Gemini, Perplexity, or any AI system
              for a recommendation in your category, you are either in the answer
              or you are not. There is no page two. There is only inclusion or
              exclusion. Strategi ensures inclusion.
            </p>
            <h2>Services</h2>
            <ul>
              <li>
                AI Visibility Audit — Comprehensive diagnostic of how AI systems
                perceive and recommend your business.
              </li>
              <li>
                Positioning and Clarity Engineering — Defining how your business
                should be understood by machines.
              </li>
              <li>
                Website Structuring for AI Readability — Making your website
                comprehensible to AI systems.
              </li>
              <li>
                Content Systems for AI Inclusion — Building content that AI
                systems cite and recommend.
              </li>
              <li>
                Authority and Trust Layer Development — Building trust signals
                that make AI confident in recommending you.
              </li>
              <li>
                Continuous Optimization — Ongoing monitoring and adaptation as AI
                models evolve.
              </li>
            </ul>
            <h2>Methodology</h2>
            <p>
              Six phases: Diagnose, Define, Structure, Build, Reinforce, Monitor.
            </p>
            <h2>Contact</h2>
            <p>Email: hello@strategi.is | Website: strategi.is</p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
