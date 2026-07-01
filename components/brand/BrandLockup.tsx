import { Stack, type StackAlign } from "@/components/primitives";

import { BrandName, type BrandNameProps } from "./BrandName";
import { BrandTagline, type BrandTaglineProps } from "./BrandTagline";

export type BrandLockupProps = {
  /** Semantic heading level for the name; omit for non-heading contexts. */
  nameLevel?: BrandNameProps["level"];
  nameSize?: BrandNameProps["size"];
  taglineVariant?: BrandTaglineProps["variant"];
  showTagline?: boolean;
  align?: StackAlign;
  className?: string;
};

/**
 * Combines BrandName and BrandTagline in a reusable vertical layout.
 * Text-only — official logo asset integration is deferred.
 */
export function BrandLockup({
  nameLevel,
  nameSize = 4,
  taglineVariant = "lead",
  showTagline = true,
  align = "start",
  className,
}: BrandLockupProps) {
  return (
    <Stack gap="xs" align={align} className={className}>
      <BrandName level={nameLevel} size={nameSize} />
      {showTagline ? <BrandTagline variant={taglineVariant} /> : null}
    </Stack>
  );
}
