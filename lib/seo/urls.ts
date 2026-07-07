import { siteConfig } from "@/config/site";

/**
 * Resolves a site-relative path to an absolute production URL for SEO output.
 */
export function resolveAbsoluteUrl(path: string = ""): string {
  const base = siteConfig.productionUrl.replace(/\/$/, "");

  if (!path || path === "/") {
    return `${base}/`;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
