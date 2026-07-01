import Link from "next/link";

import { siteConfig } from "@/config/site";
import { BrandLockup } from "@/components/brand";
import { Container, Stack } from "@/components/primitives";
import { Caption, Text } from "@/components/typography";

import { FooterNavigation } from "./FooterNavigation";

const linkClassName =
  "inline-flex rounded-ask18-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring";

/**
 * Site-wide footer with brand identity, navigation, contact, and copyright.
 */
export function SiteFooter() {
  return (
    <footer
      className="bg-ask18-bg-primary"
      style={{
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "var(--ask18-border-default)",
        paddingBlock: "var(--ask18-space-3xl)",
      }}
    >
      <Container>
        <Stack gap="2xl" align="start">
          <BrandLockup
            showTagline
            nameSize={5}
            taglineVariant="text"
          />

          <FooterNavigation />

          <Stack gap="sm" align="start">
            <Link
              href={`mailto:${siteConfig.email}`}
              className={linkClassName}
              aria-label={`Email ${siteConfig.name}`}
            >
              <Text as="span">{siteConfig.email}</Text>
            </Link>

            <Caption as="span">{siteConfig.copyright}</Caption>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
}
