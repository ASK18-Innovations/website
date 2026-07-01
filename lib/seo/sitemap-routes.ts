import { routes, type RoutePath } from "@/config/routes";

/**
 * Public routes included in sitemap.xml.
 * Add paths here as new pages ship — import from `@/config/routes` only.
 */
export const sitemapRoutes: readonly RoutePath[] = [routes.home];
