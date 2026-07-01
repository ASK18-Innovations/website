import type { Metadata } from "next";

import { MainContent } from "@/components/layout";
import { Container, Section, Stack } from "@/components/primitives";
import { PageCTA, PageHero } from "@/components/sections/page";
import {
  cardClassName,
  cardStyle,
  gridListStyle,
  homeSectionSpacing,
  philosophyCardClassName,
  philosophyGridClassName,
  processGridClassName,
  sectionContentGap,
} from "@/components/sections/home/home-styles";
import { Heading, Text } from "@/components/typography";
import { routes } from "@/config/routes";
import { aboutPageContent } from "@/content/company/about-page";
import { homeContent } from "@/content/company/home";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: aboutPageContent.hero.lead,
  path: routes.company.about,
});

export default function AboutPage() {
  const { whoWeAre, engineeringPhilosophy, process } = homeContent;
  const { howWeWork, cta } = aboutPageContent;

  return (
    <MainContent className="flex flex-1 flex-col">
      <PageHero
        title={aboutPageContent.hero.title}
        lead={aboutPageContent.hero.lead}
      />

      <Section
        id={whoWeAre.id}
        spacing={homeSectionSpacing}
        aria-labelledby={`${whoWeAre.id}-heading`}
      >
        <Container>
          <Stack gap={sectionContentGap} align="start">
            <Heading level={2} id={`${whoWeAre.id}-heading`}>
              {whoWeAre.title}
            </Heading>
            <Text className="max-w-[var(--ask18-prose-measure)]">
              {whoWeAre.body}
            </Text>
          </Stack>
        </Container>
      </Section>

      <Section
        id={engineeringPhilosophy.id}
        spacing={homeSectionSpacing}
        aria-labelledby={`${engineeringPhilosophy.id}-heading`}
      >
        <Container>
          <Stack gap={sectionContentGap} align="start">
            <Heading level={2} id={`${engineeringPhilosophy.id}-heading`}>
              {engineeringPhilosophy.title}
            </Heading>
            <ul className={philosophyGridClassName} style={gridListStyle}>
              {engineeringPhilosophy.items.map((principle) => (
                <li
                  key={principle}
                  className={philosophyCardClassName}
                  style={cardStyle}
                >
                  <Text as="span" className="font-medium">
                    {principle}
                  </Text>
                </li>
              ))}
            </ul>
          </Stack>
        </Container>
      </Section>

      <Section
        id={howWeWork.id}
        spacing={homeSectionSpacing}
        aria-labelledby={`${howWeWork.id}-heading`}
      >
        <Container>
          <Stack gap={sectionContentGap} align="start">
            <Heading level={2} id={`${howWeWork.id}-heading`}>
              {howWeWork.title}
            </Heading>
            <ol className={processGridClassName} style={gridListStyle}>
              {process.items.map(({ step, description }, index) => (
                <li key={step} className={cardClassName} style={cardStyle}>
                  <Stack gap="sm" align="start">
                    <Text as="span" variant="muted">
                      {String(index + 1).padStart(2, "0")}
                    </Text>
                    <Heading level={3} size={5}>
                      {step}
                    </Heading>
                    <Text variant="muted">{description}</Text>
                  </Stack>
                </li>
              ))}
            </ol>
          </Stack>
        </Container>
      </Section>

      <PageCTA
        title={cta.title}
        buttonLabel={cta.buttonLabel}
        href={routes.company.contact}
      />
    </MainContent>
  );
}
