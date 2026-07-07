import { serializeJsonLd } from "@/lib/seo/organization-schema";
import { websiteSchema } from "@/lib/seo/website-schema";

/**
 * Homepage WebSite JSON-LD for search engines.
 */
export function WebSiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(websiteSchema),
      }}
    />
  );
}
