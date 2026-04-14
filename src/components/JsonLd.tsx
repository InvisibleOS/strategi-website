export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://strategi.is/#organization",
    name: "Strategi",
    url: "https://strategi.is",
    logo: {
      "@type": "ImageObject",
      url: "https://strategi.is/strategi.png",
    },
    description:
      "Strategi is a strategic advisory for the AI discovery era. We make the right businesses get recommended by artificial intelligence.",
    foundingDate: "2026",
    slogan: "SEO gets you on the list. Strategi gets you in the answer.",
    knowsAbout: [
      "AI Presence",
      "AI discovery",
      "AI recommendations",
      "Machine comprehension",
      "Entity optimization",
      "Information architecture for AI",
      "Generative Engine Optimization",
      "AI visibility auditing",
      "Structured data for AI readability",
    ],
    sameAs: [
      "https://www.linkedin.com/company/strategigtm",
      "https://x.com/HelloStrategi",
      "https://www.instagram.com/strategi.is/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@strategi.is",
      contactType: "sales",
      availableLanguage: "English",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://strategi.is/#service",
    name: "Strategi",
    url: "https://strategi.is",
    provider: { "@id": "https://strategi.is/#organization" },
    description:
      "AI Presence advisory for established businesses. We build AI Presence through a six-phase methodology: Diagnose, Define, Structure, Build, Reinforce, and Monitor. We make businesses understandable, credible, and recommendable to AI systems including ChatGPT, Gemini, Perplexity, and Claude.",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: [
      "AI Presence Advisory",
      "AI Visibility Audit",
      "AI Readability Consulting",
      "Entity Optimization",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Presence Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "AI Visibility Audit",
          description:
            "Comprehensive diagnostic of how AI systems currently perceive, represent, and recommend your business. We query ChatGPT, Gemini, Perplexity, and Claude with real-world questions your customers ask and document exactly what happens.",
        },
        {
          "@type": "OfferCatalog",
          name: "Positioning & Clarity Engineering",
          description:
            "Strategic process that defines how your business should be understood by machines. Includes entity definition, category mapping, differentiator articulation, and semantic consistency across your digital footprint.",
        },
        {
          "@type": "OfferCatalog",
          name: "Website Structuring for AI Readability",
          description:
            "Systematic restructuring of website information architecture, schema markup, content hierarchy, and semantic structure to make your website comprehensible to AI systems.",
        },
        {
          "@type": "OfferCatalog",
          name: "Content Systems for AI Inclusion",
          description:
            "Content architecture and production system designed to generate material that AI systems cite, reference, and synthesize into recommendations.",
        },
        {
          "@type": "OfferCatalog",
          name: "Authority & Trust Layer Development",
          description:
            "Building external signals and third-party validation — structured data distribution, authoritative mentions, consistent entity information — that make AI confident in recommending your business.",
        },
        {
          "@type": "OfferCatalog",
          name: "Continuous Optimization",
          description:
            "Ongoing monitoring and refinement program that tracks AI recommendation status and adapts strategy as AI models evolve and competitor positioning shifts.",
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://strategi.is/#website",
    name: "Strategi",
    url: "https://strategi.is",
    description:
      "Strategic advisory for AI Presence. We make the right businesses get recommended by artificial intelligence.",
    publisher: { "@id": "https://strategi.is/#organization" },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://strategi.is/#webpage",
    url: "https://strategi.is",
    name: "Strategi — AI Presence for Established Businesses",
    description:
      "Strategi builds AI Presence for established businesses. We make sure the right companies get recommended when AI answers the questions that matter.",
    isPartOf: { "@id": "https://strategi.is/#website" },
    about: { "@id": "https://strategi.is/#organization" },
    mainEntity: { "@id": "https://strategi.is/#service" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://strategi.is",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI Presence and why does it matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI Presence is whether AI systems understand your business well enough to recommend it. When someone asks ChatGPT, Gemini, or Perplexity for a recommendation in your category, you are either in the answer or you are not. There is no page two. There is only inclusion or exclusion. Strategi ensures inclusion.",
        },
      },
      {
        "@type": "Question",
        name: "How is this different from SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO optimizes for search engine rankings and clicks. AI Presence is fundamentally different. AI does not return lists. It returns answers. We do not optimize for keywords or backlinks. We build your business as a well-defined entity that AI can comprehend, categorize, and recommend. Different system, different rules, different approach.",
        },
      },
      {
        "@type": "Question",
        name: "What does the engagement look like?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every engagement starts with a diagnostic. We query AI systems about your business and category, documenting what AI says, what it misses, and what it gets wrong. From there, we build a strategic roadmap across six phases: Diagnose, Define, Structure, Build, Reinforce, and Monitor. Each phase has clear objectives and measurable impact.",
        },
      },
      {
        "@type": "Question",
        name: "How do you measure success?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We track one metric: whether AI recommends you. We monitor your recommendation status across major AI platforms, track which queries trigger your inclusion, benchmark against competitors, and measure changes as models update. When AI recommends you, we reinforce. When it does not, we diagnose and fix.",
        },
      },
      {
        "@type": "Question",
        name: "Why do you not publish case studies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI Presence strategy is inherently competitive. When a business becomes the recommended answer in its category, that position displaces someone else. Revealing the approach gives competitors a blueprint to counter it. Our clients chose us in part because we protect their competitive edge, not publicize it. We share results under NDA during diagnostic conversations.",
        },
      },
      {
        "@type": "Question",
        name: "Who is this for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Established businesses with substance, legacy, and genuine credibility in their category. Companies that have built something real but are not showing up when AI recommends. We are not for startups looking for a growth hack. We are for businesses that deserve to be recommended.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to see results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Structure phase typically produces the most immediate impact on AI recommendations. Comprehensive results across all major AI platforms develop over 3 to 6 months of continuous execution as your authority compounds and AI models update with new training data.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a minimum commitment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI Presence is not a one-time project. It is a system that compounds. We work in focused, phase-based engagements with clear objectives and defined outputs. The depth of strategic work required demands sustained attention and execution.",
        },
      },
    ],
  };

  const schemas = [
    organizationSchema,
    serviceSchema,
    websiteSchema,
    webPageSchema,
    breadcrumbSchema,
    faqSchema,
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
