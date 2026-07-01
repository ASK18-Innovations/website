import type { Metadata } from "next";

import { MainContent } from "@/components/layout";
import { Container, Section, Stack } from "@/components/primitives";
import { PageCTA, PageHero } from "@/components/sections/page";
import {
  cardClassName,
  cardContentGap,
  cardStyle,
  gridListClassName,
  gridListStyle,
  homeSectionSpacing,
  sectionContentGap,
} from "@/components/sections/home/home-styles";
import { Caption, Heading, Text } from "@/components/typography";
import { routes } from "@/config/routes";
import { servicesPageContent } from "@/content/services/page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description: servicesPageContent.hero.lead,
  path: routes.services.index,
});

export default function ServicesPage() {
  const { services, note, cta } = servicesPageContent;

  return (
    <MainContent className="flex flex-1 flex-col">
      <PageHero
        title={servicesPageContent.hero.title}
        lead={servicesPageContent.hero.lead}
      />

      <Section spacing={homeSectionSpacing} aria-labelledby="services-grid-heading">
        <Container>
          <Stack gap={sectionContentGap} align="start">
            <Heading level={2} id="services-grid-heading" className="sr-only">
              Service Offerings
            </Heading>

            <ul className={gridListClassName} style={gridListStyle}>
              {services.map((service) => (
                <li key={service.id}>
                  <article className={cardClassName} style={cardStyle}>
                    <Stack gap={cardContentGap} align="start">
                      <Stack gap="xs" align="start">
                        <Heading level={3} size={4}>
                          {service.name}
                        </Heading>
                        <Text variant="muted">{service.subtitle}</Text>
                      </Stack>

                      <Text className="font-medium">{service.price}</Text>

                      {"badge" in service && service.badge ? (
                        <Caption as="p">
                          <span style={{ color: "var(--ask18-text-accent)" }}>
                            {service.badge}
                          </span>
                        </Caption>
                      ) : null}

                      <Text className="max-w-[var(--ask18-prose-measure)]">
                        {service.description}
                      </Text>
                    </Stack>
                  </article>
                </li>
              ))}
            </ul>
          </Stack>
        </Container>
      </Section>

      <Section id={note.id} spacing={homeSectionSpacing}>
        <Container>
          <Text className="max-w-[var(--ask18-prose-measure)]" variant="muted">
            {note.text}
          </Text>
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
