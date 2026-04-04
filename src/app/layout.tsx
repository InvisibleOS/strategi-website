import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strategi — AI Presence for Established Businesses",
  description:
    "Strategi is a strategic advisory for the AI discovery era. We make the right businesses get recommended by artificial intelligence. AI does not rank. AI selects.",
  keywords: [
    "AI Presence",
    "AI recommendations",
    "AI visibility",
    "AI discovery",
    "Strategi",
    "AI advisory",
    "machine comprehension",
    "entity optimization",
    "AI Visibility Audit",
  ],
  authors: [{ name: "Strategi" }],
  creator: "Strategi",
  publisher: "Strategi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://strategi.is",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strategi.is",
    siteName: "Strategi",
    title: "Strategi — AI Presence for Established Businesses",
    description:
      "We make the right businesses get recommended by artificial intelligence. SEO gets you on the list. Strategi gets you in the answer.",
    images: [
      {
        url: "https://strategi.is/strategi.png",
        width: 1200,
        height: 630,
        alt: "Strategi — AI Presence Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategi — AI Presence for Established Businesses",
    description:
      "AI does not rank. AI selects. Strategi ensures your business is in the answer.",
    creator: "@HelloStrategi",
    images: ["https://strategi.is/strategi.png"],
  },
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
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
