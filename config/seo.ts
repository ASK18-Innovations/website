import { siteConfig } from "./site";

/**
 * Default SEO and social metadata configuration.
 * Page-level metadata helpers in `lib/seo/` must derive from these values.
 */
export const seoConfig = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} — ${siteConfig.tagline}`,
  keywords: [
    "ASK18 Innovations",
    "enterprise software",
    "technology",
    "innovation",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website" as const,
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image" as const,
  },
  author: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
} as const;

export type SeoConfig = typeof seoConfig;
