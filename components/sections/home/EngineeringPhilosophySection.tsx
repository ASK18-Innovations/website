import { Container, Section, Stack } from "@/components/primitives";
import { Heading, Text } from "@/components/typography";
import { homeContent } from "@/content/company/home";

import {
  cardStyle,
  gridListItemClassName,
  gridListStyle,
  homeSectionSpacing,
  philosophyCardClassName,
  philosophyGridClassName,
  sectionContentGap,
} from "./home-styles";

export function EngineeringPhilosophySection() {
  const { id, title, items } = homeContent.engineeringPhilosophy;

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

          <ul className={philosophyGridClassName} style={gridListStyle}>
            {items.map((principle) => (
              <li
                key={principle}
                className={`${gridListItemClassName} ${philosophyCardClassName}`}
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
  );
}
