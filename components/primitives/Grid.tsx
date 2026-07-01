import { spacingVar, type GridColumns, type SpacingScale } from "./constants";

export type GridProps = {
  children: React.ReactNode;
  /** Number of equal-width columns. */
  columns?: GridColumns;
  /** Gap between grid items from the spacing scale. */
  gap?: SpacingScale;
  className?: string;
};

/**
 * CSS grid layout primitive with configurable columns and gap.
 */
export function Grid({
  children,
  columns = 1,
  gap = "md",
  className,
}: GridProps) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: spacingVar[gap],
      }}
    >
      {children}
    </div>
  );
}
