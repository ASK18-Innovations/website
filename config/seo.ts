import { siteConfig } from "./site";

export const defaultSeo = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website" as const,
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image" as const,
  },
} as const;

export type DefaultSeo = typeof defaultSeo;
