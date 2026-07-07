import { Container, Section, Stack } from "@/components/primitives";
import { Heading, Text } from "@/components/typography";
import { homeContent } from "@/content/company/home";

import {
  cardClassName,
  cardStyle,
  gridListClassName,
  gridListItemClassName,
  gridListStyle,
  homeSectionSpacing,
  sectionContentGap,
} from "./home-styles";

export function WhatWeBuildSection() {
  const { id, title, items } = homeContent.whatWeBuild;

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

          <ul className={gridListClassName} style={gridListStyle}>
            {items.map((item) => (
              <li key={item} className={`${gridListItemClassName} ${cardClassName}`} style={cardStyle}>
                <Text as="span" className="font-medium">
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </Stack>
      </Container>
    </Section>
  );
}
