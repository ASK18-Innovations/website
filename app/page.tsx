import type { Metadata } from "next";
import Link from "next/link";

import { MainContent } from "@/components/layout";
import { Container, Divider, Section, Stack } from "@/components/primitives";
import { Caption, Heading, Text } from "@/components/typography";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { comingSoonContent } from "@/content/company/coming-soon";
import { akshAlgoProduct } from "@/content/products/akshalgo";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: routes.home,
  description: comingSoonContent.supportingText,
});

const focusClassName =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring";

const buttonBaseClassName = `inline-flex items-center justify-center rounded-ask18-md ${focusClassName}`;

export default function Home() {
  return (
    <MainContent className="flex flex-1 flex-col">
      <Section
        spacing="4xl"
        className="flex flex-1 flex-col justify-center"
      >
        <Container size="prose">
          <Stack gap="2xl" align="center" className="text-center">
            <Stack gap="lg" align="center">
              <Heading level={1} size={2}>
                {siteConfig.tagline}
              </Heading>

              <Text>{comingSoonContent.supportingText}</Text>

              <Caption as="p">{comingSoonContent.launchNotice}</Caption>
            </Stack>

            <div
              className="flex w-full flex-col sm:w-auto sm:flex-row"
              style={{ gap: "var(--ask18-space-md)" }}
            >
              <Link
                href={routes.company.contact}
                className={buttonBaseClassName}
                style={{
                  paddingInline: "var(--ask18-space-lg)",
                  paddingBlock: "var(--ask18-space-sm)",
                  backgroundColor: "var(--ask18-black)",
                  color: "var(--ask18-white)",
                }}
              >
                {comingSoonContent.primaryActionLabel}
              </Link>

              <Link
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonBaseClassName}
                style={{
                  paddingInline: "var(--ask18-space-lg)",
                  paddingBlock: "var(--ask18-space-sm)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "var(--ask18-border-strong)",
                  color: "var(--ask18-text-primary)",
                }}
              >
                {comingSoonContent.secondaryActionLabel}
              </Link>
            </div>

            <Divider />

            <Stack gap="xs" align="center">
              <Heading level={2} size={4}>
                {akshAlgoProduct.name}
              </Heading>
              <Text variant="muted">{akshAlgoProduct.description}</Text>
              <Caption as="p">{akshAlgoProduct.status}</Caption>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </MainContent>
  );
}
