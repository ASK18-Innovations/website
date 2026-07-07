import { siteConfig } from "@/config/site";

import { resolveAbsoluteUrl } from "./urls";

/**
 * Homepage WebSite schema for JSON-LD.
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  alternateName: ["ASK18", "ask18innovations.com"],
  url: resolveAbsoluteUrl("/"),
} as const;
