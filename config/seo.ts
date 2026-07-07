import { siteConfig } from "./site";

/** Approved root meta description for defaults and social previews. */
export const defaultSiteDescription =
  "Engineering-first software development for reliable websites, business systems, dashboards, automation, integrations, and long-term product support.";

/**
 * Default SEO and social metadata configuration.
 * Page-level metadata helpers in `lib/seo/` must derive from these values.
 */
export const seoConfig = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultSiteDescription,
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
  metadataBase: new URL(siteConfig.productionUrl),
  openGraph: {
    type: "website" as const,
    locale: "en_IN",
    siteName: siteConfig.name,
    url: siteConfig.productionUrl,
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
