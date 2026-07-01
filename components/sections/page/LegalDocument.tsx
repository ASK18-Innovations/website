import Link from "next/link";

import { Container, Section, Stack } from "@/components/primitives";
import { Caption, Heading, Text } from "@/components/typography";
import { siteConfig } from "@/config/site";

import {
  homeSectionSpacing,
  sectionContentGap,
} from "@/components/sections/home/home-styles";

export type LegalSection = {
  id: string;
  title: string;
  body: string;
};

export type LegalDocumentProps = {
  sections: readonly LegalSection[];
  disclaimer: string;
};

function ContactSectionBody({ body }: { body: string }) {
  return (
    <Text>
      {body}{" "}
      <Link
        href={`mailto:${siteConfig.email}`}
        className="rounded-ask18-sm text-ask18-text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring"
      >
        {siteConfig.email}
      </Link>
      .
    </Text>
  );
}

/**
 * Renders legal document sections and disclaimer.
 */
export function LegalDocument({ sections, disclaimer }: LegalDocumentProps) {
  return (
    <>
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          spacing={homeSectionSpacing}
          aria-labelledby={`${section.id}-heading`}
        >
          <Container>
            <Stack
              gap={sectionContentGap}
              align="start"
              className="max-w-[var(--ask18-prose-measure)]"
            >
              <Heading level={2} id={`${section.id}-heading`}>
                {section.title}
              </Heading>
              {section.id === "contact" ? (
                <ContactSectionBody body={section.body} />
              ) : (
                <Text>{section.body}</Text>
              )}
            </Stack>
          </Container>
        </Section>
      ))}

      <Section spacing={homeSectionSpacing}>
        <Container>
          <Caption as="p" className="max-w-[var(--ask18-prose-measure)]">
            {disclaimer}
          </Caption>
        </Container>
      </Section>
    </>
  );
}
