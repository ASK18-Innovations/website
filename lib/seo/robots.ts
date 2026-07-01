import { seoConfig } from "@/config/seo";

/**
 * Returns the default robots directive configuration for site pages.
 */
export function getDefaultRobots(): SeoConfigRobots {
  return seoConfig.robots;
}

export type SeoConfigRobots = (typeof seoConfig)["robots"];
