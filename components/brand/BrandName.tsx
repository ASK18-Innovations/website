import { siteConfig } from "@/config/site";
import { Heading, type HeadingLevel } from "@/components/typography";
import { getHeadingStyle } from "@/components/typography/constants";

export type BrandNameProps = {
  /** Semantic heading level; omit to render as a non-heading span (e.g. header logo text). */
  level?: HeadingLevel;
  /** Visual size from the heading scale. */
  size?: HeadingLevel;
  className?: string;
};

/**
 * Text-only company name sourced from site configuration.
 */
export function BrandName({ level, size = 4, className }: BrandNameProps) {
  if (level !== undefined) {
    return (
      <Heading level={level} size={size} className={className}>
        {siteConfig.name}
      </Heading>
    );
  }

  return (
    <span className={className} style={getHeadingStyle(size)}>
      {siteConfig.name}
    </span>
  );
}
