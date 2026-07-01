import { seoConfig } from "@/config/seo";

/**
 * Resolves a document title from an optional page-specific segment.
 * Returns the site default when no page title is provided.
 */
export function resolvePageTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return seoConfig.title.default;
  }

  return seoConfig.title.template.replace("%s", pageTitle);
}
