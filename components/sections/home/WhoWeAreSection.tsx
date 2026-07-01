import { Container, Section, Stack } from "@/components/primitives";
import { Heading, Text } from "@/components/typography";
import { homeContent } from "@/content/company/home";

export function WhoWeAreSection() {
  const { id, title, body } = homeContent.whoWeAre;

  return (
    <Section id={id} spacing="3xl" aria-labelledby={`${id}-heading`}>
      <Container>
        <Stack gap="lg" align="start">
          <Heading level={2} id={`${id}-heading`}>
            {title}
          </Heading>
          <Text>{body}</Text>
        </Stack>
      </Container>
    </Section>
  );
}
