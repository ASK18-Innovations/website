import { seoConfig } from "@/config/seo";

/**
 * Resolves a meta description, falling back to the configured default.
 */
export function resolveDescription(override?: string): string {
  return override ?? seoConfig.description;
}
