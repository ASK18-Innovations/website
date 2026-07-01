import { getHeadingStyle, headingTags, type HeadingLevel } from "./constants";

export type HeadingProps = {
  children: React.ReactNode;
  /** Semantic heading level (h1–h6). */
  level: HeadingLevel;
  /** Visual size variant; defaults to `level`. Use to decouple semantics from appearance. */
  size?: HeadingLevel;
  id?: string;
  className?: string;
};

/**
 * Semantic heading with token-based typography.
 */
export function Heading({
  children,
  level,
  size,
  id,
  className,
}: HeadingProps) {
  const Tag = headingTags[level];
  const visualLevel = size ?? level;

  return (
    <Tag id={id} className={className} style={getHeadingStyle(visualLevel)}>
      {children}
    </Tag>
  );
}
