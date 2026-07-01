import Link from "next/link";

import { Container, Section, Stack } from "@/components/primitives";
import { Heading, Lead } from "@/components/typography";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/content/company/home";

import {
  buttonBaseClassName,
  primaryButtonStyle,
  secondaryButtonStyle,
} from "./cta-styles";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <Section spacing="4xl" aria-labelledby="home-hero-heading">
      <Container>
        <Stack gap="2xl" align="start">
          <Stack gap="lg" align="start">
            <Heading level={1} size={2} id="home-hero-heading">
              {siteConfig.tagline}
            </Heading>
            <Lead>{hero.supportingText}</Lead>
          </Stack>

          <div
            className="flex w-full flex-col sm:w-auto sm:flex-row"
            style={{ gap: "var(--ask18-space-md)" }}
          >
            <Link
              href={routes.company.contact}
              className={buttonBaseClassName}
              style={primaryButtonStyle}
            >
              {hero.primaryCta}
            </Link>

            <Link
              href={routes.products.index}
              className={buttonBaseClassName}
              style={secondaryButtonStyle}
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
