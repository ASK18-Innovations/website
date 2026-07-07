import { Container, Section, Stack } from "@/components/primitives";
import { Heading, Text } from "@/components/typography";
import { homeContent } from "@/content/company/home";

import {
  cardClassName,
  cardContentGap,
  cardStyle,
  gridListItemClassName,
  gridListStyle,
  homeSectionSpacing,
  processGridClassName,
  sectionContentGap,
} from "./home-styles";

export function ProcessSection() {
  const { id, title, items } = homeContent.process;

  return (
    <Section
      id={id}
      spacing={homeSectionSpacing}
      aria-labelledby={`${id}-heading`}
    >
      <Container>
        <Stack gap={sectionContentGap} align="start">
          <Heading level={2} id={`${id}-heading`}>
            {title}
          </Heading>

          <ol className={processGridClassName} style={gridListStyle}>
            {items.map(({ step, description }, index) => (
              <li key={step} className={`${gridListItemClassName} ${cardClassName}`} style={cardStyle}>
                <Stack gap={cardContentGap} align="start">
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
  );
}
