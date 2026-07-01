import { Container, Section, Stack } from "@/components/primitives";
import { Heading, Text } from "@/components/typography";
import { homeContent } from "@/content/company/home";

import {
  homeSectionSpacing,
  sectionContentGap,
} from "./home-styles";

export function WhoWeAreSection() {
  const { id, title, body } = homeContent.whoWeAre;

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
          <Text className="max-w-[var(--ask18-prose-measure)]">{body}</Text>
        </Stack>
      </Container>
    </Section>
  );
}
