import { siteConfig } from "@/config/site";
import { Lead, Text, type TextElement } from "@/components/typography";

export type BrandTaglineProps = {
  /** `lead` for prominent display; `text` for compact inline contexts. */
  variant?: "lead" | "text";
  as?: TextElement;
  className?: string;
};

/**
 * Official company tagline sourced from site configuration.
 */
export function BrandTagline({
  variant = "lead",
  as = "p",
  className,
}: BrandTaglineProps) {
  if (variant === "text") {
    return (
      <Text as={as} variant="muted" className={className}>
        {siteConfig.tagline}
      </Text>
    );
  }

  return <Lead className={className}>{siteConfig.tagline}</Lead>;
}
