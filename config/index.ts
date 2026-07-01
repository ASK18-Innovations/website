/**
 * Configuration barrel export.
 * Prefer importing from `@/config` or specific modules for tree-shaking clarity.
 */
export { siteConfig, type SiteConfig, type SiteSocialLinks } from "./site";
export { routes, type Routes, type RoutePath } from "./routes";
export {
  navigationConfig,
  primaryNavigation,
  footerNavigation,
  type NavItem,
  type NavigationConfig,
} from "./navigation";
export { seoConfig, type SeoConfig } from "./seo";
