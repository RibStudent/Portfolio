import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/error-boundary";
import { CustomCursor } from "@/components/custom-cursor";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Enhanced SEO metadata with comprehensive tags
export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - Cybersecurity Specialist & AI Developer | Brisbane`,
    template: `%s | ${DATA.name} - AI & Security Expert`,
  },
  description: "Rhys Thomas: Brisbane-based Cybersecurity Specialist & AI-Powered Solutions Developer. Expert in Claude, GPT-4, LangChain, penetration testing, and cutting-edge AI implementation. Helping SMBs leverage bleeding-edge AI technology for business transformation.",
  keywords: [
    "Rhys Thomas",
    "Cybersecurity Specialist Brisbane",
    "AI Developer Brisbane",
    "AI Solutions Queensland",
    "Claude API Expert",
    "GPT-4 Developer",
    "LangChain Developer",
    "Penetration Testing Brisbane",
    "AI Integration Consultant",
    "MCP Servers Expert",
    "Full Stack Developer Brisbane",
    "Security Audits Queensland",
    "AI Automation Brisbane",
    "PNPT Certified",
    "CompTIA Security+",
    "AI Chatbot Development",
    "Business Process Automation",
    "OSINT Specialist",
    "CVE Research",
    "Prompt Engineering Expert"
  ],
  authors: [{ name: "Rhys Thomas", url: DATA.url }],
  creator: "Rhys Thomas",
  publisher: "Rhys Thomas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${DATA.name} - Cybersecurity & AI Solutions Expert`,
    description: "Brisbane's leading Cybersecurity Specialist & AI Developer. Bridging cutting-edge AI technology with practical business solutions. Expert in Claude, GPT-4, security audits, and bleeding-edge AI implementation.",
    url: DATA.url,
    siteName: `${DATA.name} - Portfolio`,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: `${DATA.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Rhys Thomas - Cybersecurity Specialist & AI Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} - Cybersecurity & AI Expert | Brisbane`,
    description: "Cybersecurity Specialist & AI Developer bridging cutting-edge AI with business solutions. Expert in Claude, GPT-4, penetration testing & automation.",
    site: "@rhysthomas_dev",
    creator: "@rhysthomas_dev",
    images: [`${DATA.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: DATA.url,
    types: {
      "application/rss+xml": `${DATA.url}/feed.xml`,
    },
  },
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "", // Add your Google Search Console verification code
    yandex: "",
    yahoo: "",
    other: {
      me: [DATA.contact.email, DATA.contact.social.GitHub.url, DATA.contact.social.LinkedIn.url],
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: DATA.name,
  },
};

// Structured Data for Person Schema
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${DATA.url}#person`,
  name: DATA.name,
  alternateName: "Rhys Thomas",
  url: DATA.url,
  image: `${DATA.url}${DATA.avatarUrl}`,
  jobTitle: "Cybersecurity Specialist & AI-Powered Solutions Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance Cybersecurity & AI Solutions",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "Queensland",
    addressCountry: "AU",
  },
  sameAs: [
    DATA.contact.social.GitHub.url,
    DATA.contact.social.LinkedIn.url,
    DATA.contact.social.X.url,
  ],
  email: DATA.contact.email,
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "TAFE Queensland",
      url: "https://tafeqld.edu.au",
    },
  ],
  knowsAbout: [
    "Cybersecurity",
    "Artificial Intelligence",
    "Machine Learning",
    "Claude AI",
    "OpenAI GPT-4",
    "LangChain",
    "Penetration Testing",
    "Web Development",
    "Python Programming",
    "React Development",
    "Security Audits",
    "AI Integration",
    "Business Automation",
    "OSINT",
    "CVE Research",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "PNPT (Practical Network Penetration Tester)",
      credentialCategory: "certification",
      issuedBy: {
        "@type": "Organization",
        name: "TCM Security",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "CompTIA Security+",
      credentialCategory: "certification",
      issuedBy: {
        "@type": "Organization",
        name: "CompTIA",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Google Cybersecurity Professional Certificate",
      credentialCategory: "certificate",
      issuedBy: {
        "@type": "Organization",
        name: "Google",
      },
    },
  ],
};

// Website Schema
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${DATA.url}#website`,
  url: DATA.url,
  name: `${DATA.name} - Portfolio`,
  description: DATA.description,
  publisher: {
    "@id": `${DATA.url}#person`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${DATA.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-AU",
};

// Professional Service Schema
const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${DATA.url}#service`,
  name: "Rhys Thomas - Cybersecurity & AI Solutions",
  image: `${DATA.url}${DATA.avatarUrl}`,
  url: DATA.url,
  telephone: DATA.contact.tel,
  email: DATA.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "Queensland",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.4705,
    longitude: 153.0260,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  priceRange: "$$",
  serviceType: [
    "Cybersecurity Consulting",
    "AI Integration",
    "Penetration Testing",
    "Security Audits",
    "AI Automation",
    "Custom Software Development",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Brisbane",
    },
    {
      "@type": "State",
      name: "Queensland",
    },
    {
      "@type": "Country",
      name: "Australia",
    },
  ],
};

// BreadcrumbList Schema
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: DATA.url,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={DATA.url} />
        <link rel="alternate" hrefLang="en-AU" href={DATA.url} />
        <link rel="alternate" hrefLang="en" href={DATA.url} />
        <meta name="geo.region" content="AU-QLD" />
        <meta name="geo.placename" content="Brisbane" />
        <meta name="geo.position" content="-27.4705;153.0260" />
        <meta name="ICBM" content="-27.4705, 153.0260" />

        {/* Structured Data Scripts */}
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Script
          id="service-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        <Script
          id="breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <ErrorBoundary>
            <TooltipProvider delayDuration={0}>
              <CustomCursor />
              {children}
              <Navbar />
            </TooltipProvider>
          </ErrorBoundary>
        </ThemeProvider>

        {/* PWA Service Worker Registration */}
        <Script
          id="sw-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful:', registration.scope);
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed:', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}