import { siteConfig } from "@/config/site";
import { resolveAbsoluteUrl } from "./urls";

/**
 * Production Organization schema for JSON-LD.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.productionUrl,
  logo: resolveAbsoluteUrl("/icons/icon-512x512.png"),
  email: siteConfig.email,
  telephone: siteConfig.phone.tel,
} as const;

/**
 * Serializes JSON-LD safely for inline script injection.
 */
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
