import type { Metadata } from "next";
import Link from "next/link";

import { MainContent } from "@/components/layout";
import { Container, Section, Stack } from "@/components/primitives";
import { PageCTA, PageHero } from "@/components/sections/page";
import {
  cardClassName,
  cardStyle,
  gridListClassName,
  gridListStyle,
  homeSectionSpacing,
  sectionContentGap,
} from "@/components/sections/home/home-styles";
import { Heading, Text } from "@/components/typography";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { contactPageContent } from "@/content/company/contact-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: contactPageContent.hero.lead,
  path: routes.company.contact,
});

export default function ContactPage() {
  const { contactDetails, inquiryTypes, cta } = contactPageContent;

  return (
    <MainContent className="flex flex-1 flex-col">
      <PageHero
        title={contactPageContent.hero.title}
        lead={contactPageContent.hero.lead}
      />

      <Section
        id={contactDetails.id}
        spacing={homeSectionSpacing}
        aria-labelledby={`${contactDetails.id}-heading`}
      >
        <Container>
          <Stack gap={sectionContentGap} align="start">
            <Heading level={2} id={`${contactDetails.id}-heading`}>
              {contactDetails.title}
            </Heading>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="rounded-ask18-sm text-ask18-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring"
            >
              <Text as="span">{siteConfig.email}</Text>
            </Link>
          </Stack>
        </Container>
      </Section>

      <Section
        id={inquiryTypes.id}
        spacing={homeSectionSpacing}
        aria-labelledby={`${inquiryTypes.id}-heading`}
      >
        <Container>
          <Stack gap={sectionContentGap} align="start">
            <Heading level={2} id={`${inquiryTypes.id}-heading`}>
              {inquiryTypes.title}
            </Heading>
            <ul className={gridListClassName} style={gridListStyle}>
              {inquiryTypes.items.map((item) => (
                <li key={item} className={cardClassName} style={cardStyle}>
                  <Text as="span" className="font-medium">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </Stack>
        </Container>
      </Section>

      <PageCTA
        title={cta.title}
        buttonLabel={cta.buttonLabel}
        href={`mailto:${siteConfig.email}`}
      />
    </MainContent>
  );
}
