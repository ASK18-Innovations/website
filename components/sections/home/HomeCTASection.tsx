import Link from "next/link";

import { Container, Section, Stack } from "@/components/primitives";
import { Heading } from "@/components/typography";
import { routes } from "@/config/routes";
import { homeContent } from "@/content/company/home";

import {
  buttonBaseClassName,
  homeSectionSpacing,
  primaryButtonStyle,
} from "./home-styles";

export function HomeCTASection() {
  const { id, headline, buttonLabel } = homeContent.cta;

  return (
    <Section
      id={id}
      spacing={homeSectionSpacing}
      className="border-t border-ask18-border-default"
      aria-labelledby={`${id}-heading`}
    >
      <Container>
        <Stack
          gap="2xl"
          align="start"
          className="max-w-[var(--ask18-prose-measure)]"
        >
          <Heading level={2} id={`${id}-heading`} size={2}>
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
