import Link from "next/link";

import { Container, Section, Stack } from "@/components/primitives";
import { Heading, Lead } from "@/components/typography";
import {
  buttonBaseClassName,
  homeHeroSpacing,
  primaryButtonStyle,
  secondaryButtonStyle,
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

export type PageCTASecondaryButton = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type PageCTAProps = {
  title: string;
  buttonLabel: string;
  href: string;
  id?: string;
  secondaryButton?: PageCTASecondaryButton;
};

const pageCtaPrimaryLinkClassName = `${buttonBaseClassName} min-h-11 text-ask18-white`;

const pageCtaSecondaryLinkClassName = `${buttonBaseClassName} min-h-11`;

export function PageCTA({
  title,
  buttonLabel,
  href,
  id = "page-cta",
  secondaryButton,
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

          {secondaryButton ? (
            <div
              className="flex w-full min-w-0 flex-col flex-wrap gap-ask18-md sm:w-auto sm:flex-row"
            >
              <Link
                href={href}
                className={pageCtaPrimaryLinkClassName}
                style={primaryButtonStyle}
                {...(isExternal ? { rel: "noopener noreferrer" } : {})}
              >
                {buttonLabel}
              </Link>
              <Link
                href={secondaryButton.href}
                className={pageCtaSecondaryLinkClassName}
                style={secondaryButtonStyle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={secondaryButton.ariaLabel}
              >
                {secondaryButton.label}
              </Link>
            </div>
          ) : (
            <Link
              href={href}
              className="inline-flex min-h-11 items-center justify-center rounded-ask18-md px-ask18-xl py-ask18-md text-ask18-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring"
              style={{ backgroundColor: "var(--ask18-black)" }}
              {...(isExternal ? { rel: "noopener noreferrer" } : {})}
            >
              {buttonLabel}
            </Link>
          )}
        </Stack>
      </Container>
    </Section>
  );
}
