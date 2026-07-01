import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";
import { resolveAbsoluteUrl } from "@/lib/seo";

/**
 * Generates robots.txt from centralized SEO configuration.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const { index, follow } = seoConfig.robots;

  return {
    rules: {
      userAgent: "*",
      allow: index ? "/" : undefined,
      disallow: !index || !follow ? "/" : undefined,
    },
    sitemap: resolveAbsoluteUrl("/sitemap.xml"),
    host: siteConfig.url.replace(/\/$/, ""),
  };
}
