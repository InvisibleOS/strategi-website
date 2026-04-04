export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Strategi",
    url: "https://strategi.is",
    logo: "https://strategi.is/strategi.png",
    description:
      "Strategi is a strategic advisory for the AI discovery era. We make the right businesses get recommended by artificial intelligence.",
    foundingDate: "2026",
    sameAs: [
      "https://www.linkedin.com/company/strategigtm",
      "https://x.com/HelloStrategi",
      "https://www.instagram.com/strategi.is/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@strategi.is",
      contactType: "sales",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Strategi",
    url: "https://strategi.is",
    description:
      "AI Presence advisory for established businesses. We build AI Presence through AI Visibility Audits, Positioning & Clarity Engineering, Website Structuring for AI Readability, Content Systems for AI Inclusion, Authority & Trust Layer Development, and Continuous Optimization.",
    areaServed: "Worldwide",
    serviceType: "AI Presence Advisory",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Presence Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Visibility Audit",
            description:
              "Comprehensive diagnostic of how AI systems currently perceive, represent, and recommend your business across ChatGPT, Gemini, Perplexity, and Claude.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Positioning & Clarity Engineering",
            description:
              "Strategic process that defines how your business should be understood by machines, including entity definition, category mapping, and differentiator articulation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Structuring for AI Readability",
            description:
              "Systematic restructuring of website information architecture, schema markup, and semantic structure for AI comprehension.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content Systems for AI Inclusion",
            description:
              "Content architecture designed to generate material that AI systems cite, reference, and synthesize into recommendations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Authority & Trust Layer Development",
            description:
              "Building external signals and third-party validation that make AI systems confident in recommending your business.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Continuous Optimization",
            description:
              "Ongoing monitoring and refinement program that tracks AI recommendation status and adapts strategy as models evolve.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Strategi",
    url: "https://strategi.is",
    description:
      "Strategic advisory for AI Presence. We make the right businesses get recommended by artificial intelligence.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
