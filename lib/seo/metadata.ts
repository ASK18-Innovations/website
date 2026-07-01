import type { Metadata } from "next";

import { defaultSeo } from "@/config/seo";
import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "",
}: PageMetadataOptions = {}): Metadata {
  const resolvedTitle = title ?? defaultSeo.title.default;

  return {
    title: resolvedTitle,
    description,
    metadataBase: defaultSeo.metadataBase,
    openGraph: {
      ...defaultSeo.openGraph,
      title: resolvedTitle,
      description,
      url: path ? `${siteConfig.url}${path}` : siteConfig.url,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: resolvedTitle,
      description,
    },
  };
}
