export const focusClassName =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring";

export const buttonBaseClassName = `inline-flex items-center justify-center rounded-ask18-md ${focusClassName}`;

export const primaryButtonStyle = {
  paddingInline: "var(--ask18-space-lg)",
  paddingBlock: "var(--ask18-space-sm)",
  backgroundColor: "var(--ask18-black)",
  color: "var(--ask18-white)",
} as const;

export const secondaryButtonStyle = {
  paddingInline: "var(--ask18-space-lg)",
  paddingBlock: "var(--ask18-space-sm)",
  borderWidth: "1px",
  borderStyle: "solid" as const,
  borderColor: "var(--ask18-border-strong)",
  color: "var(--ask18-text-primary)",
} as const;

export const borderedItemStyle = {
  borderWidth: "1px",
  borderStyle: "solid" as const,
  borderColor: "var(--ask18-border-default)",
  padding: "var(--ask18-space-lg)",
} as const;
