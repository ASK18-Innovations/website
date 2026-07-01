import { spacingVar, type SpacingScale } from "./constants";

export type SectionProps = {
  children: React.ReactNode;
  /** Optional id for in-page anchors and aria-labelledby references. */
  id?: string;
  /** Vertical padding preset from the spacing scale. */
  spacing?: SpacingScale;
  className?: string;
};

/**
 * Semantic section with standardized vertical spacing.
 */
export function Section({
  children,
  id,
  spacing = "2xl",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        paddingBlock: spacingVar[spacing],
      }}
    >
      {children}
    </section>
  );
}
