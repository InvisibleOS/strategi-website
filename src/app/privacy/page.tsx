import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/site";
import { JsonLd } from "@/components/geo/Editorial";
import LegalDoc, { type LegalSection } from "@/components/legal/LegalDoc";

const PAGE_URL = `${SITE_URL}/privacy`;
const LAST_UPDATED = "June 22, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy — Strategi",
  description:
    "How Strategi collects, uses, and protects the personal information you share with us.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: "Privacy Policy — Strategi",
    description:
      "How Strategi collects, uses, and protects the personal information you share with us.",
  },
  twitter: {
    card: "summary",
    site: "@HelloStrategi",
    title: "Privacy Policy — Strategi",
    description:
      "How Strategi collects, uses, and protects the personal information you share with us.",
  },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Overview",
    body: [
      `This Privacy Policy explains how ${SITE_NAME} ("we", "us", or "our") collects, uses, and safeguards information when you visit ${SITE_URL} or otherwise interact with us. By using our website, you agree to the practices described here.`,
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We collect information you provide directly and information gathered automatically as you use the site.",
    ],
    bullets: [
      "Information you give us: your name, email address, company, and any message you submit through contact forms, booking links, or email.",
      "Usage data: pages viewed, referring pages, approximate location, device and browser type, and similar analytics collected automatically.",
      "Cookies and similar technologies: small files used to operate the site, remember preferences, and measure traffic.",
    ],
  },
  {
    heading: "How we use information",
    body: ["We use the information we collect to:"],
    bullets: [
      "Respond to your enquiries and provide the services you request.",
      "Operate, maintain, and improve our website and offerings.",
      "Send you information you have asked for, where you have opted in.",
      "Analyze usage so we can understand and improve performance.",
      "Comply with legal obligations and protect our rights.",
    ],
  },
  {
    heading: "How we share information",
    body: [
      "We do not sell your personal information. We may share it with trusted service providers who help us operate the site and our business (for example, hosting, analytics, and email providers), each bound to handle it only on our instructions. We may also disclose information where required by law or to protect our legal rights.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We keep personal information only for as long as needed for the purposes described in this policy, or as required to meet legal, accounting, or reporting obligations, after which it is deleted or anonymized.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Depending on where you live, you may have the right to access, correct, delete, or restrict the use of your personal information, and to object to certain processing or withdraw consent. To exercise any of these rights, contact us using the details below.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We take reasonable technical and organizational measures to protect your information. No method of transmission or storage is completely secure, however, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Third-party links",
    body: [
      "Our website may link to third-party sites and tools that we do not control. This policy does not apply to those services, and we encourage you to review their privacy policies.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date above. Material changes will be made evident on this page.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      <>
        Questions about this policy or your information? Email us at{" "}
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
    name: "Privacy Policy — Strategi",
    description:
      "How Strategi collects, uses, and protects the personal information you share with us.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-US",
    dateModified: "2026-06-22",
  };
  return <JsonLd schema={schema} />;
}

export default function PrivacyPage() {
  return (
    <>
      <Schemas />
      <LegalDoc
        eyebrow="Legal"
        title="Privacy Policy"
        lastUpdated={LAST_UPDATED}
        intro="Your privacy matters to us. This page describes what information we collect, how we use it, and the choices you have."
        sections={SECTIONS}
      />
    </>
  );
}
