export type DividerProps = {
  className?: string;
};

/**
 * Semantic horizontal separator.
 */
export function Divider({ className }: DividerProps) {
  return (
    <hr
      className={className}
      style={{
        border: "none",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "var(--ask18-border-default)",
        margin: 0,
      }}
    />
  );
}
