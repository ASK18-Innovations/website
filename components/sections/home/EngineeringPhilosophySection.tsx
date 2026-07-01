import { Container, Section, Stack } from "@/components/primitives";
import { Heading, Text } from "@/components/typography";
import { homeContent } from "@/content/company/home";

import { borderedItemStyle } from "./cta-styles";

export function EngineeringPhilosophySection() {
  const { id, title, items } = homeContent.engineeringPhilosophy;

  return (
    <Section id={id} spacing="3xl" aria-labelledby={`${id}-heading`}>
      <Container>
        <Stack gap="xl" align="start">
          <Heading level={2} id={`${id}-heading`}>
            {title}
          </Heading>

          <ul
            className="flex w-full flex-col"
            style={{
              gap: "var(--ask18-space-md)",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {items.map((item) => (
              <li key={item} style={borderedItemStyle}>
                <Text as="span">{item}</Text>
              </li>
            ))}
          </ul>
        </Stack>
      </Container>
    </Section>
  );
}
