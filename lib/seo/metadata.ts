import type { Metadata } from "next";

import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import type { RoutePath } from "@/config/routes";

import { resolveDescription } from "./descriptions";
import { resolvePageTitle } from "./titles";
import { resolveAbsoluteUrl } from "./urls";

export type PageMetadataOptions = {
  /** Page-specific title segment (merged with site title template). */
  title?: string;
  /** Override the default meta description. */
  description?: string;
  /** Canonical route path from `@/config/routes`. */
  path?: RoutePath;
};

/**
 * Builds page-level Metadata by merging overrides with centralized defaults.
 * Use in future route segments: `export const metadata = createPageMetadata({ ... })`.
 */
export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions = {}): Metadata {
  const resolvedTitle = resolvePageTitle(title);
  const resolvedDescription = resolveDescription(description);
  const canonicalUrl = path ? resolveAbsoluteUrl(path) : siteConfig.url;

  return {
    ...(title !== undefined ? { title } : {}),
    description: resolvedDescription,
    alternates: path ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      type: seoConfig.openGraph.type,
      locale: seoConfig.openGraph.locale,
      siteName: seoConfig.openGraph.siteName,
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonicalUrl,
    },
    twitter: {
      card: seoConfig.twitter.card,
      title: resolvedTitle,
      description: resolvedDescription,
      creator: seoConfig.creator,
    },
  };
}
