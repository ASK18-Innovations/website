/**
 * SEO helper utilities for metadata generation.
 */
export { resolveAbsoluteUrl } from "./urls";
export { resolvePageTitle } from "./titles";
export { resolveDescription } from "./descriptions";
export { getDefaultRobots, type SeoConfigRobots } from "./robots";
export { createPageMetadata, type PageMetadataOptions } from "./metadata";
export { sitemapRoutes } from "./sitemap-routes";
export {
  organizationSchema,
  serializeJsonLd,
} from "./organization-schema";
export { websiteSchema } from "./website-schema";
