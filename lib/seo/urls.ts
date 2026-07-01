import { siteConfig } from "@/config/site";

/**
 * Resolves a site-relative path to an absolute URL using the configured base URL.
 */
export function resolveAbsoluteUrl(path: string = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");

  if (!path || path === "/") {
    return base;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
