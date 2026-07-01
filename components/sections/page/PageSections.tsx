import Link from "next/link";

import { Container, Section, Stack } from "@/components/primitives";
import { Heading, Lead } from "@/components/typography";

import {
  homeHeroSpacing,
} from "@/components/sections/home/home-styles";

export type PageHeroProps = {
  title: string;
  lead: string;
  id?: string;
};

export function PageHero({ title, lead, id = "page-hero" }: PageHeroProps) {
  return (
    <Section spacing={homeHeroSpacing} aria-labelledby={`${id}-heading`}>
      <Container>
        <Stack
          gap="lg"
          align="start"
          className="max-w-[var(--ask18-prose-measure)]"
        >
          <Heading level={1} id={`${id}-heading`}>
            {title}
          </Heading>
          <Lead>{lead}</Lead>
        </Stack>
      </Container>
    </Section>
  );
}

export type PageCTAProps = {
  title: string;
  buttonLabel: string;
  href: string;
  id?: string;
};

export function PageCTA({
  title,
  buttonLabel,
  href,
  id = "page-cta",
}: PageCTAProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Section
      id={id}
      spacing="3xl"
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
            {title}
          </Heading>

          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-ask18-md px-ask18-xl py-ask18-md text-ask18-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring"
            style={{ backgroundColor: "var(--ask18-black)" }}
            {...(isExternal ? { rel: "noopener noreferrer" } : {})}
          >
            {buttonLabel}
          </Link>
        </Stack>
      </Container>
    </Section>
  );
}
