import type { Metadata } from "next";

import { seoConfig } from "@/config/seo";
import type { RoutePath } from "@/config/routes";

import { resolveDescription } from "./descriptions";
import {
  getDefaultOpenGraphImages,
  getDefaultTwitterImages,
} from "./social-preview.constants";
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

function buildOpenGraphMetadata(
  title: string,
  description: string,
  url: string,
): NonNullable<Metadata["openGraph"]> {
  return {
    type: seoConfig.openGraph.type,
    locale: seoConfig.openGraph.locale,
    siteName: seoConfig.openGraph.siteName,
    title,
    description,
    url,
    images: getDefaultOpenGraphImages(),
  };
}

function buildTwitterMetadata(
  title: string,
  description: string,
): NonNullable<Metadata["twitter"]> {
  return {
    card: seoConfig.twitter.card,
    title,
    description,
    creator: seoConfig.creator,
    images: getDefaultTwitterImages(),
  };
}

/**
 * Builds page-level Metadata by merging overrides with centralized defaults.
 * Open Graph and Twitter objects are complete page-safe structures so nested
 * metadata does not drop inherited social fields during shallow merges.
 */
export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions = {}): Metadata {
  const resolvedTitle = resolvePageTitle(title);
  const resolvedDescription = resolveDescription(description);
  const canonicalUrl = path ? resolveAbsoluteUrl(path) : resolveAbsoluteUrl("/");

  return {
    ...(title !== undefined ? { title } : {}),
    description: resolvedDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: buildOpenGraphMetadata(
      resolvedTitle,
      resolvedDescription,
      canonicalUrl,
    ),
    twitter: buildTwitterMetadata(resolvedTitle, resolvedDescription),
  };
}
