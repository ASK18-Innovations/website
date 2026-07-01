/**
 * Shared homepage layout and surface styles.
 */
export const focusClassName =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring";

export const buttonBaseClassName = `inline-flex items-center justify-center rounded-ask18-md ${focusClassName}`;

export const primaryButtonStyle = {
  paddingInline: "var(--ask18-space-xl)",
  paddingBlock: "var(--ask18-space-md)",
  backgroundColor: "var(--ask18-black)",
  color: "var(--ask18-white)",
} as const;

export const secondaryButtonStyle = {
  paddingInline: "var(--ask18-space-xl)",
  paddingBlock: "var(--ask18-space-md)",
  borderWidth: "1px",
  borderStyle: "solid" as const,
  borderColor: "var(--ask18-border-strong)",
  color: "var(--ask18-text-primary)",
} as const;

/** Standard section vertical padding for homepage sections. */
export const homeSectionSpacing = "3xl" as const;

/** Hero section vertical padding. */
export const homeHeroSpacing = "4xl" as const;

/** Gap between section heading and content. */
export const sectionContentGap = "xl" as const;

/** Gap inside card content stacks. */
export const cardContentGap = "sm" as const;

/** Readable prose width for hero and body copy. */
export const proseWidthStyle = {
  maxWidth: "var(--ask18-prose-measure)",
} as const;

export const cardClassName =
  "rounded-ask18-md border border-ask18-border-default hover:border-ask18-border-strong";

export const cardStyle = {
  padding: "var(--ask18-space-xl)",
} as const;

export const philosophyCardClassName =
  "rounded-ask18-md border border-ask18-border-default border-l-2 border-l-ask18-deep-indigo hover:border-ask18-border-strong hover:border-l-ask18-deep-indigo";

export const gridListClassName = "grid w-full grid-cols-1 sm:grid-cols-2";

export const gridListStyle = {
  gap: "var(--ask18-space-lg)",
  listStyle: "none",
  margin: 0,
  padding: 0,
} as const;

export const philosophyGridClassName =
  "grid w-full grid-cols-1 md:grid-cols-2";

export const processGridClassName =
  "grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";
