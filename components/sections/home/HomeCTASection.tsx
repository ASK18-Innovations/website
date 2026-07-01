import Link from "next/link";

import { Container, Section, Stack } from "@/components/primitives";
import { Heading } from "@/components/typography";
import { routes } from "@/config/routes";
import { homeContent } from "@/content/company/home";

import {
  buttonBaseClassName,
  primaryButtonStyle,
} from "./cta-styles";

export function HomeCTASection() {
  const { id, headline, buttonLabel } = homeContent.cta;

  return (
    <Section
      id={id}
      spacing="4xl"
      className="border-t border-ask18-border-default"
      aria-labelledby={`${id}-heading`}
    >
      <Container>
        <Stack gap="xl" align="start">
          <Heading level={2} id={`${id}-heading`} size={3}>
            {headline}
          </Heading>

          <Link
            href={routes.company.contact}
            className={buttonBaseClassName}
            style={primaryButtonStyle}
          >
            {buttonLabel}
          </Link>
        </Stack>
      </Container>
    </Section>
  );
}
