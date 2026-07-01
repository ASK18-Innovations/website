import Link from "next/link";

import { Container, Section, Stack } from "@/components/primitives";
import { Heading, Lead } from "@/components/typography";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/content/company/home";

import {
  buttonBaseClassName,
  homeHeroSpacing,
  primaryButtonStyle,
  secondaryButtonStyle,
} from "./home-styles";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <Section spacing={homeHeroSpacing} aria-labelledby="home-hero-heading">
      <Container>
        <Stack gap="2xl" align="start">
          <Stack
            gap="xl"
            align="start"
            className="max-w-[var(--ask18-prose-measure)]"
          >
            <Heading level={1} size={1} id="home-hero-heading">
              {siteConfig.tagline}
            </Heading>
            <Lead className="max-w-[var(--ask18-prose-measure)]">
              {hero.supportingText}
            </Lead>
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
