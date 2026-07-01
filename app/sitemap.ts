import type { MetadataRoute } from "next";

import { routes } from "@/config/routes";
import { resolveAbsoluteUrl } from "@/lib/seo";
import { sitemapRoutes } from "@/lib/seo/sitemap-routes";

type SitemapEntry = MetadataRoute.Sitemap[number];

function createSitemapEntry(
  path: (typeof sitemapRoutes)[number],
): SitemapEntry {
  return {
    url: resolveAbsoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === routes.home ? "weekly" : "monthly",
    priority: path === routes.home ? 1 : 0.8,
  };
}

/**
 * Generates sitemap.xml from the centralized route registry.
 * Extend `lib/seo/sitemap-routes.ts` when new public pages are published.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map(createSitemapEntry);
}
