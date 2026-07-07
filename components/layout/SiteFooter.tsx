import Link from "next/link";

import { siteConfig } from "@/config/site";
import { BrandLockup } from "@/components/brand";
import { Container } from "@/components/primitives";
import { Caption, Text } from "@/components/typography";

import { FooterNavigation } from "./FooterNavigation";
import {
  footerBrandColumnClassName,
  footerClassName,
  footerContactColumnClassName,
  footerContactLinkClassName,
  footerCopyrightClassName,
  footerGridClassName,
} from "./footer-styles";

/**
 * Site-wide footer with brand identity, navigation, contact, and copyright.
 */
export function SiteFooter() {
  return (
    <footer className={footerClassName}>
      <Container>
        <div className={footerGridClassName}>
          <div className={footerBrandColumnClassName}>
            <BrandLockup showTagline nameSize={5} taglineVariant="text" />
          </div>

          <FooterNavigation />

          <div className={footerContactColumnClassName}>
            <Caption as="p">Contact</Caption>
            <Link
              href={`mailto:${siteConfig.email}`}
              className={footerContactLinkClassName}
            >
              <Text as="span" className="break-words">
                {siteConfig.email}
              </Text>
            </Link>
            <Link
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={siteConfig.whatsapp.ariaLabel}
              className={footerContactLinkClassName}
            >
              <Text as="span">{siteConfig.phone.display}</Text>
            </Link>
          </div>

          <Caption as="span" className={footerCopyrightClassName}>
            {siteConfig.copyright}
          </Caption>
        </div>
      </Container>
    </footer>
  );
}
