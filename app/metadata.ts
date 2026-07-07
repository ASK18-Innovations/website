import type { Metadata } from "next";

import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import {
  getDefaultOpenGraphImages,
  getDefaultTwitterImages,
} from "@/lib/seo/social-preview.constants";

/**
 * Default site-wide metadata for the ASK18 Innovations website.
 * Imported by the root layout; pages inherit these defaults and override
 * route-specific fields via `createPageMetadata()`.
 *
 * Favicon and app icon strategy (file-based metadata — do not duplicate in `icons`):
 * - `app/favicon.ico` — browser tab icon (Next.js file convention, auto-served)
 * - `app/icon.svg` — app icon from official favicon SVG
 * - `app/apple-icon.png` — Apple touch icon for iOS home screen
 * - `app/manifest.ts` — web app manifest with 192×192 and 512×512 PNG icons
 * - `app/opengraph-image.tsx` — default Open Graph image (1200×630)
 * - `app/twitter-image.tsx` — default Twitter card image (1200×630)
 * - `public/brand/` — official symbol SVGs for header/UI usage
 */
export const defaultMetadata: Metadata = {
  metadataBase: seoConfig.metadataBase,
  title: {
    default: seoConfig.title.default,
    template: seoConfig.title.template,
  },
  description: seoConfig.description,
  keywords: [...seoConfig.keywords],
  authors: [{ name: seoConfig.author, url: siteConfig.productionUrl }],
  creator: seoConfig.creator,
  publisher: seoConfig.publisher,
  applicationName: siteConfig.name,
  category: seoConfig.category,
  robots: seoConfig.robots,
  openGraph: {
    type: seoConfig.openGraph.type,
    locale: seoConfig.openGraph.locale,
    siteName: seoConfig.openGraph.siteName,
    url: seoConfig.openGraph.url,
    title: seoConfig.title.default,
    description: seoConfig.description,
    images: getDefaultOpenGraphImages(),
  },
  twitter: {
    card: seoConfig.twitter.card,
    title: seoConfig.title.default,
    description: seoConfig.description,
    creator: seoConfig.creator,
    images: getDefaultTwitterImages(),
  },
};
