import Head from 'next/head'
import { DATA } from '@/data/resume'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    tags?: string[]
  }
  canonicalUrl?: string
  noindex?: boolean
}

export default function SEO({
  title,
  description,
  keywords = [],
  ogImage,
  ogType = 'website',
  article,
  canonicalUrl,
  noindex = false,
}: SEOProps) {
  const siteTitle = title
    ? `${title} | ${DATA.name} - AI & Security Expert`
    : `${DATA.name} - Cybersecurity Specialist & AI Developer | Brisbane`

  const siteDescription = description ||
    "Rhys Thomas: Brisbane-based Cybersecurity Specialist & AI-Powered Solutions Developer. Expert in Claude, GPT-4, LangChain, penetration testing, and cutting-edge AI implementation."

  const siteKeywords = [
    ...keywords,
    "Rhys Thomas",
    "Cybersecurity Brisbane",
    "AI Developer",
    "Claude API",
    "GPT-4",
    "LangChain",
    "Penetration Testing",
  ].join(', ')

  const siteOgImage = ogImage || `${DATA.url}/og-image.png`
  const siteCanonicalUrl = canonicalUrl || DATA.url

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={siteCanonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteCanonicalUrl} />
      <meta property="og:site_name" content={`${DATA.name} - Portfolio`} />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteOgImage} />
      <meta name="twitter:site" content="@rhysthomas_dev" />
      <meta name="twitter:creator" content="@rhysthomas_dev" />

      {/* Article specific */}
      {article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="AU-QLD" />
      <meta name="geo.placename" content="Brisbane" />
      <meta name="geo.position" content="-27.4705;153.0260" />
      <meta name="ICBM" content="-27.4705, 153.0260" />
    </Head>
  )
}