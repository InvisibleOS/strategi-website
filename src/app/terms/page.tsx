import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/site";
import { JsonLd } from "@/components/geo/Editorial";
import LegalDoc, { type LegalSection } from "@/components/legal/LegalDoc";

const PAGE_URL = `${SITE_URL}/terms`;
const LAST_UPDATED = "June 22, 2026";

export const metadata: Metadata = {
  title: "Terms of Service — Strategi",
  description:
    "The terms and conditions that govern your use of the Strategi website and services.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: "Terms of Service — Strategi",
    description:
      "The terms and conditions that govern your use of the Strategi website and services.",
  },
  twitter: {
    card: "summary",
    site: "@HelloStrategi",
    title: "Terms of Service — Strategi",
    description:
      "The terms and conditions that govern your use of the Strategi website and services.",
  },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Acceptance of terms",
    body: [
      `These Terms of Service ("Terms") govern your access to and use of ${SITE_URL} and any services provided by ${SITE_NAME} ("we", "us", or "our"). By accessing or using the site, you agree to be bound by these Terms. If you do not agree, please do not use the site.`,
    ],
  },
  {
    heading: "Use of the site",
    body: [
      "You may use the site for lawful purposes only. You agree not to misuse the site or interfere with its normal operation.",
    ],
    bullets: [
      "Do not attempt to gain unauthorized access to any part of the site or its systems.",
      "Do not use the site in any way that could damage, disable, or impair it.",
      "Do not use automated means to scrape or harvest data except as permitted by our robots directives.",
      "Do not use the site to transmit unlawful, harmful, or infringing content.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      `All content on this site — including text, graphics, logos, and software — is the property of ${SITE_NAME} or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written permission.`,
    ],
  },
  {
    heading: "Services and engagements",
    body: [
      "Information on this site describes our services in general terms and does not constitute a binding offer. Any engagement is governed by a separate written agreement between you and us, which prevails over these Terms in the event of a conflict.",
    ],
  },
  {
    heading: "Third-party content and links",
    body: [
      "The site may include links to third-party websites or tools that we do not control. We are not responsible for the content, policies, or practices of those third parties, and links do not imply endorsement.",
    ],
  },
  {
    heading: "Disclaimer of warranties",
    body: [
      'The site and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.',
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      `To the fullest extent permitted by law, ${SITE_NAME} will not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the site.`,
    ],
  },
  {
    heading: "Indemnification",
    body: [
      `You agree to indemnify and hold harmless ${SITE_NAME} from any claims, losses, or expenses arising from your use of the site or your breach of these Terms.`,
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may revise these Terms from time to time. Changes take effect when posted on this page, and the “Last updated” date above will be revised. Your continued use of the site after changes are posted constitutes acceptance of the updated Terms.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      <>
        Questions about these Terms? Email us at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-white underline underline-offset-4 decoration-[#d4620a]/60 hover:decoration-[#d4620a]"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </>,
    ],
  },
];

function Schemas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Terms of Service — Strategi",
    description:
      "The terms and conditions that govern your use of the Strategi website and services.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-US",
    dateModified: "2026-06-22",
  };
  return <JsonLd schema={schema} />;
}

export default function TermsPage() {
  return (
    <>
      <Schemas />
      <LegalDoc
        eyebrow="Legal"
        title="Terms of Service"
        lastUpdated={LAST_UPDATED}
        intro="These terms set out the rules for using the Strategi website. Please read them carefully before you continue."
        sections={SECTIONS}
      />
    </>
  );
}
