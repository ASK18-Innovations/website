/** Max-width presets mapped to design-token container variables. */
export type ContainerSize = "sm" | "md" | "lg" | "xl" | "prose" | "content";

/** Spacing scale keys mapped to design-token space variables. */
export type SpacingScale =
  | "0"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

/** Supported grid column counts. */
export type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;

export const containerMaxWidth: Record<ContainerSize, string> = {
  sm: "var(--ask18-container-sm)",
  md: "var(--ask18-container-md)",
  lg: "var(--ask18-container-lg)",
  xl: "var(--ask18-container-xl)",
  prose: "var(--ask18-container-prose)",
  content: "var(--ask18-container-content)",
};

export const spacingVar: Record<SpacingScale, string> = {
  "0": "var(--ask18-space-0)",
  xs: "var(--ask18-space-xs)",
  sm: "var(--ask18-space-sm)",
  md: "var(--ask18-space-md)",
  lg: "var(--ask18-space-lg)",
  xl: "var(--ask18-space-xl)",
  "2xl": "var(--ask18-space-2xl)",
  "3xl": "var(--ask18-space-3xl)",
  "4xl": "var(--ask18-space-4xl)",
};

export const stackAlignClass = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

export type StackAlign = keyof typeof stackAlignClass;
