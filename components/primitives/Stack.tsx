import {
  spacingVar,
  stackAlignClass,
  type SpacingScale,
  type StackAlign,
} from "./constants";

export type StackProps = {
  children: React.ReactNode;
  /** Gap between stacked items from the spacing scale. */
  gap?: SpacingScale;
  /** Cross-axis alignment for flex items. */
  align?: StackAlign;
  className?: string;
};

/**
 * Vertical flex layout primitive with token-based gap.
 */
export function Stack({
  children,
  gap = "md",
  align = "stretch",
  className,
}: StackProps) {
  return (
    <div
      className={`flex flex-col ${stackAlignClass[align]}${className ? ` ${className}` : ""}`}
      style={{ gap: spacingVar[gap] }}
    >
      {children}
    </div>
  );
}
