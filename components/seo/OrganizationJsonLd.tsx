import {
  organizationSchema,
  serializeJsonLd,
} from "@/lib/seo/organization-schema";

/**
 * Root Organization JSON-LD for search engines.
 */
export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(organizationSchema),
      }}
    />
  );
}
