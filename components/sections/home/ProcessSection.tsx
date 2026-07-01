import { Container, Section, Stack } from "@/components/primitives";
import { Heading, Text } from "@/components/typography";
import { homeContent } from "@/content/company/home";

import { borderedItemStyle } from "./cta-styles";

export function ProcessSection() {
  const { id, title, items } = homeContent.process;

  return (
    <Section id={id} spacing="3xl" aria-labelledby={`${id}-heading`}>
      <Container>
        <Stack gap="xl" align="start">
          <Heading level={2} id={`${id}-heading`}>
            {title}
          </Heading>

          <ol
            className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
            style={{
              gap: "var(--ask18-space-md)",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {items.map((step, index) => (
              <li key={step} style={borderedItemStyle}>
                <Stack gap="xs" align="start">
                  <Text as="span" variant="muted">
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Text as="span">{step}</Text>
                </Stack>
              </li>
            ))}
          </ol>
        </Stack>
      </Container>
    </Section>
  );
}
