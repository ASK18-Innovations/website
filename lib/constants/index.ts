/**
 * Reusable application constants.
 * Re-exports centralized configuration — pages and components must import from here
 * or directly from `@/config`, never duplicate values inline.
 */
export {
  siteConfig,
  type SiteConfig,
  type SiteSocialLinks,
} from "@/config/site";

export { routes, type Routes, type RoutePath } from "@/config/routes";

export {
  navigationConfig,
  primaryNavigation,
  footerNavigation,
  type NavItem,
  type NavigationConfig,
} from "@/config/navigation";

export { seoConfig, type SeoConfig } from "@/config/seo";
