// SEO Configuration and Best Practices for Rhys Thomas Portfolio

export const SEOConfig = {
  // Primary Target Keywords (High Volume, Medium Competition)
  primaryKeywords: [
    "Cybersecurity Specialist Brisbane",
    "AI Developer Brisbane",
    "AI Integration Consultant Queensland",
    "Penetration Testing Brisbane",
    "Claude API Developer Australia",
  ],

  // Long-tail Keywords (Lower Volume, Lower Competition - Easier to Rank)
  longTailKeywords: [
    "hire cybersecurity specialist Brisbane",
    "AI chatbot development Brisbane Queensland",
    "Claude API integration expert Australia",
    "GPT-4 developer Brisbane freelance",
    "penetration testing services Brisbane",
    "AI automation consultant Queensland",
    "PNPT certified security expert Brisbane",
    "CompTIA Security+ specialist Queensland",
    "business process automation AI Brisbane",
    "bleeding edge AI implementation Australia",
    "MCP servers expert developer",
    "small business AI solutions Brisbane",
    "cybersecurity audit services Queensland",
    "LangChain developer Australia",
  ],

  // Semantic Keywords (Related Terms)
  semanticKeywords: [
    "artificial intelligence",
    "machine learning",
    "cyber security",
    "security audits",
    "vulnerability assessment",
    "prompt engineering",
    "RAG implementation",
    "API integration",
    "full stack development",
    "Python automation",
    "React development",
    "OSINT research",
    "CVE analysis",
    "security compliance",
    "AI model orchestration",
  ],

  // Content Optimization Guidelines
  contentGuidelines: {
    titleLength: {
      min: 30,
      max: 60,
      optimal: 55,
    },
    metaDescriptionLength: {
      min: 120,
      max: 160,
      optimal: 155,
    },
    h1Tags: {
      count: 1,
      includeKeyword: true,
    },
    h2Tags: {
      minCount: 2,
      maxCount: 6,
      includeKeywords: true,
    },
    contentLength: {
      homepage: 800, // minimum words
      servicePage: 1500,
      blogPost: 1200,
    },
    keywordDensity: {
      primary: "1-2%",
      secondary: "0.5-1%",
    },
  },

  // Schema Markup Types to Implement
  schemaTypes: [
    "Person",
    "ProfessionalService",
    "WebSite",
    "BreadcrumbList",
    "FAQPage",
    "HowTo",
    "Article",
    "BlogPosting",
    "Service",
    "Review",
  ],

  // Local SEO Optimization
  localSEO: {
    city: "Brisbane",
    state: "Queensland",
    country: "Australia",
    coordinates: {
      lat: -27.4705,
      lng: 153.0260,
    },
    serviceAreas: [
      "Brisbane CBD",
      "South Brisbane",
      "North Brisbane",
      "Gold Coast",
      "Sunshine Coast",
      "Queensland",
      "Australia (Remote)",
    ],
  },

  // Page-Specific SEO Templates
  pageTemplates: {
    homepage: {
      title: "Rhys Thomas - Cybersecurity Specialist & AI Developer | Brisbane",
      description: "Brisbane's leading Cybersecurity Specialist & AI Developer. Expert in Claude, GPT-4, LangChain, penetration testing. Helping SMBs leverage bleeding-edge AI technology.",
      keywords: ["cybersecurity Brisbane", "AI developer", "Claude API", "penetration testing"],
    },
    services: {
      title: "AI & Cybersecurity Services | Rhys Thomas - Brisbane",
      description: "Professional cybersecurity audits, penetration testing, AI integration, and automation services in Brisbane. PNPT certified, CompTIA Security+.",
      keywords: ["cybersecurity services", "AI consulting", "security audits Brisbane"],
    },
    blog: {
      title: "AI & Cybersecurity Blog | Insights by Rhys Thomas",
      description: "Latest insights on AI implementation, cybersecurity best practices, and bleeding-edge technology from Brisbane's AI & security expert.",
      keywords: ["AI blog", "cybersecurity insights", "tech blog Brisbane"],
    },
    contact: {
      title: "Contact Rhys Thomas | AI & Security Consultant Brisbane",
      description: "Get in touch for cybersecurity audits, AI integration, or custom development projects. Brisbane-based, Australia-wide services.",
      keywords: ["contact cybersecurity expert", "hire AI developer Brisbane"],
    },
  },

  // Technical SEO Checklist
  technicalSEO: {
    performance: {
      pagespeed: {
        mobile: 90, // target score
        desktop: 95,
      },
      coreWebVitals: {
        LCP: 2.5, // Largest Contentful Paint (seconds)
        FID: 100, // First Input Delay (milliseconds)
        CLS: 0.1, // Cumulative Layout Shift
      },
    },
    mobile: {
      responsive: true,
      viewport: "width=device-width, initial-scale=1",
      touchTargets: "48x48px minimum",
    },
    security: {
      https: true,
      hsts: true,
      contentSecurityPolicy: true,
    },
  },

  // Link Building Strategy
  linkBuilding: {
    internal: {
      strategy: "Siloing by service type",
      anchorsText: "Use descriptive, keyword-rich anchor text",
      linksPerPage: "3-5 internal links minimum",
    },
    external: {
      targets: [
        "GitHub profile and projects",
        "LinkedIn professional profile",
        "TAFE Queensland alumni",
        "TCM Security community",
        "Local Brisbane tech meetups",
        "Queensland tech forums",
        "AI/ML community platforms",
        "Security research publications",
      ],
    },
  },

  // Content Strategy
  contentStrategy: {
    updateFrequency: "Weekly blog posts",
    topics: [
      "AI implementation case studies",
      "Cybersecurity best practices",
      "Penetration testing tutorials",
      "AI model comparisons",
      "Brisbane tech scene updates",
      "Small business AI guides",
      "Security audit checklists",
      "Prompt engineering techniques",
    ],
    formats: [
      "How-to guides",
      "Case studies",
      "Technical tutorials",
      "Industry news analysis",
      "Tool reviews",
      "Project showcases",
    ],
  },

  // Monitoring and Analytics
  monitoring: {
    tools: [
      "Google Search Console",
      "Google Analytics 4",
      "Microsoft Clarity",
      "Hotjar",
    ],
    metrics: [
      "Organic traffic growth",
      "Keyword rankings",
      "Click-through rate (CTR)",
      "Bounce rate",
      "Average session duration",
      "Conversion rate",
      "Core Web Vitals",
    ],
    reportingFrequency: "Monthly",
  },

  // Competitor Analysis
  competitors: [
    "Other Brisbane cybersecurity consultants",
    "Queensland AI developers",
    "Australian penetration testers",
    "Local IT consulting firms",
  ],

  // Call-to-Action Optimization
  cta: {
    primary: "Schedule a Free Consultation",
    secondary: [
      "Download Security Checklist",
      "Get AI Implementation Guide",
      "Request Security Audit",
      "View Portfolio Projects",
    ],
  },
}

// Helper function to validate SEO metadata
export function validateSEOMetadata(title: string, description: string): {
  valid: boolean
  issues: string[]
} {
  const issues: string[] = []

  // Validate title
  if (title.length < SEOConfig.contentGuidelines.titleLength.min) {
    issues.push(`Title too short (${title.length} chars, min: ${SEOConfig.contentGuidelines.titleLength.min})`)
  }
  if (title.length > SEOConfig.contentGuidelines.titleLength.max) {
    issues.push(`Title too long (${title.length} chars, max: ${SEOConfig.contentGuidelines.titleLength.max})`)
  }

  // Validate description
  if (description.length < SEOConfig.contentGuidelines.metaDescriptionLength.min) {
    issues.push(`Description too short (${description.length} chars, min: ${SEOConfig.contentGuidelines.metaDescriptionLength.min})`)
  }
  if (description.length > SEOConfig.contentGuidelines.metaDescriptionLength.max) {
    issues.push(`Description too long (${description.length} chars, max: ${SEOConfig.contentGuidelines.metaDescriptionLength.max})`)
  }

  return {
    valid: issues.length === 0,
    issues,
  }
}

// Generate local business JSON-LD
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://rhysthomas.dev#business",
    name: "Rhys Thomas - Cybersecurity & AI Solutions",
    image: "https://rhysthomas.dev/me.png",
    url: "https://rhysthomas.dev",
    telephone: "+61 4XX XXX XXX",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      postalCode: "4000",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEOConfig.localSEO.coordinates.lat,
      longitude: SEOConfig.localSEO.coordinates.lng,
    },
    sameAs: [
      "https://github.com/ribkid",
      "https://www.linkedin.com/in/rhys-thomas-cybersec",
      "https://x.com/rhysthomas_dev",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  }
}