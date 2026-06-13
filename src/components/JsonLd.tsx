import { SITE_URL, FOUNDERS } from "@/lib/site";

// Site-wide schemas (Organization, ProfessionalService, WebSite) — render in layout.
// Homepage-specific schemas (WebPage, BreadcrumbList, FAQPage, HowTo) live in HomepageJsonLd.
export function JsonLd() {
  // Founder Person entities. @id matches the fuller Person nodes emitted on
  // /about, so search engines stitch them into one entity.
  const founderSchema = FOUNDERS.map((f) => {
    const sameAs = [f.linkedin, f.instagram, f.x].filter(Boolean);
    return {
      "@type": "Person",
      "@id": `${SITE_URL}/#${f.id}`,
      name: f.name,
      jobTitle: f.role,
      image: `${SITE_URL}${f.photo}`,
      ...(sameAs.length ? { sameAs } : {}),
    };
  });

  const organizationSchema = {
    "@type": "Organization",
    "@id": "https://strategi.is/#organization",
    name: "Strategi",
    legalName: "Strategi",
    url: "https://strategi.is",
    logo: {
      "@type": "ImageObject",
      "@id": "https://strategi.is/#logo",
      url: "https://strategi.is/strategi.png",
      contentUrl: "https://strategi.is/strategi.png",
      caption: "Strategi logo",
      inLanguage: "en-US",
    },
    image: {
      "@id": "https://strategi.is/#logo",
    },
    description:
      "Strategi is a strategic advisory for the AI discovery era. We make the right businesses get recommended by artificial intelligence.",
    foundingDate: "2026",
    founder: founderSchema,
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
    "@type": "ProfessionalService",
    "@id": "https://strategi.is/#service",
    name: "Strategi - AI Presence Advisory",
    url: "https://strategi.is",
    image: {
      "@id": "https://strategi.is/#logo",
    },
    provider: { "@id": "https://strategi.is/#organization" },
    description:
      "AI Presence advisory for established businesses. We build AI Presence through a six-phase methodology: Diagnose, Define, Structure, Build, Reinforce, and Monitor. We make businesses understandable, credible, and recommendable to AI systems including ChatGPT, Gemini, Perplexity, and Claude.",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: "AI Presence Advisory",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": "https://strategi.is/#offer-catalog",
      name: "AI Presence Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://strategi.is/#service-audit",
            name: "AI Visibility Audit",
            description:
              "Comprehensive diagnostic of how AI systems currently perceive, represent, and recommend your business. We query ChatGPT, Gemini, Perplexity, and Claude with real-world questions your customers ask and document exactly what happens.",
            provider: { "@id": "https://strategi.is/#organization" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://strategi.is/#service-positioning",
            name: "Positioning & Clarity Engineering",
            description:
              "Strategic process that defines how your business should be understood by machines. Includes entity definition, category mapping, differentiator articulation, and semantic consistency across your digital footprint.",
            provider: { "@id": "https://strategi.is/#organization" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://strategi.is/#service-structuring",
            name: "Website Structuring for AI Readability",
            description:
              "Systematic restructuring of website information architecture, schema markup, content hierarchy, and semantic structure to make your website comprehensible to AI systems.",
            provider: { "@id": "https://strategi.is/#organization" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://strategi.is/#service-content",
            name: "Content Systems for AI Inclusion",
            description:
              "Content architecture and production system designed to generate material that AI systems cite, reference, and synthesize into recommendations.",
            provider: { "@id": "https://strategi.is/#organization" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://strategi.is/#service-authority",
            name: "Authority & Trust Layer Development",
            description:
              "Building external signals and third-party validation — structured data distribution, authoritative mentions, consistent entity information — that make AI confident in recommending your business.",
            provider: { "@id": "https://strategi.is/#organization" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://strategi.is/#service-monitoring",
            name: "Continuous Optimization",
            description:
              "Ongoing monitoring and refinement program that tracks AI recommendation status and adapts strategy as AI models evolve and competitor positioning shifts.",
            provider: { "@id": "https://strategi.is/#organization" },
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": "https://strategi.is/#website",
    name: "Strategi",
    url: "https://strategi.is",
    description:
      "Strategic advisory for AI Presence. We make the right businesses get recommended by artificial intelligence.",
    publisher: { "@id": "https://strategi.is/#organization" },
    inLanguage: "en-US",
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, serviceSchema, websiteSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graphSchema),
      }}
    />
  );
}

// Homepage-specific schemas. Mount only in src/app/page.tsx.
export function HomepageJsonLd() {
  const webPageSchema = {
    "@type": "WebPage",
    "@id": "https://strategi.is/#webpage",
    url: "https://strategi.is",
    name: "Strategi — AI Presence for Established Businesses",
    description:
      "Strategi builds AI Presence for established businesses. We make sure the right companies get recommended when AI answers the questions that matter.",
    isPartOf: { "@id": "https://strategi.is/#website" },
    about: { "@id": "https://strategi.is/#organization" },
    mainEntity: { "@id": "https://strategi.is/#service" },
    breadcrumb: { "@id": "https://strategi.is/#breadcrumb" },
    inLanguage: "en-US",
    datePublished: "2026-01-01",
    dateModified: "2026-04-25",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        "section[aria-label*='Strategi'] h1",
        "section[aria-label*='Strategi'] p",
        "#faq",
      ],
    },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": "https://strategi.is/#breadcrumb",
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
    "@type": "FAQPage",
    "@id": "https://strategi.is/#faq",
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
          text: "SEO optimizes for search engine rankings and clicks. AI Presence is fundamentally different. AI does not return lists. It returns answers. We do not optimize for keywords or backlinks. We build your business as a well-defined entity that AI can comprehend, categorize, and recommend.",
        },
      },
      {
        "@type": "Question",
        name: "What does the engagement look like?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every engagement starts with a diagnostic. We query AI systems about your business and category, documenting what AI says, what it misses, and what it gets wrong. From there, we build a strategic roadmap across six phases: Diagnose, Define, Structure, Build, Reinforce, and Monitor.",
        },
      },
      {
        "@type": "Question",
        name: "How do you measure success?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We track one metric: whether AI recommends you. We monitor your recommendation status across major AI platforms, track which queries trigger your inclusion, benchmark against competitors, and measure changes as models update.",
        },
      },
      {
        "@type": "Question",
        name: "Who is this for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Established businesses with substance, legacy, and genuine credibility in their category. Companies that have built something real but are not showing up when AI recommends. We are not for startups looking for a growth hack.",
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
    ],
  };

  const howToSchema = {
    "@type": "HowTo",
    "@id": "https://strategi.is/#methodology",
    name: "The Strategi Methodology: Six Phases to AI Presence",
    description:
      "Strategi builds AI Presence through a six-phase methodology. Each phase has clear objectives and measurable impact on how AI systems understand, categorize, and recommend your business.",
    totalTime: "P6M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Diagnose: Audit AI Visibility",
        text: "Query every major AI platform with the questions your customers ask. Document what AI says about your business, your competitors, and your category.",
        url: "https://strategi.is/services",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Define: Clarify Positioning",
        text: "Define how your business should be understood by machines. Entity definition, category mapping, differentiator articulation, and Machine Positioning Statement.",
        url: "https://strategi.is/services",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Structure: Make Your Business Machine-Readable",
        text: "Restructure digital presence for AI comprehension. Website architecture, schema implementation, content hierarchy, and semantic structuring.",
        url: "https://strategi.is/services",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Build: Content and Signals",
        text: "Produce strategically structured material designed to be cited by AI. Comprehensive category content, authoritative thought leadership, and structured data assets.",
        url: "https://strategi.is/services",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Reinforce: Authority Loops",
        text: "Build self-reinforcing authority loops. When AI cites you, that citation becomes a signal for future citations. Expand the scope of queries where your business is recommended.",
        url: "https://strategi.is/services",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Monitor: AI Presence Tracking",
        text: "Continuously track AI recommendation status. Which queries trigger recommendations, competitive landscape shifts, and model update impacts.",
        url: "https://strategi.is/services",
      },
    ],
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [webPageSchema, breadcrumbSchema, faqSchema, howToSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graphSchema),
      }}
    />
  );
}
