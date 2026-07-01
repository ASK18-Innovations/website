import type { CSSProperties } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type TextVariant = "default" | "muted";

export type TextElement = "p" | "span" | "div";

export type CaptionElement = "p" | "span";

const headingLevelStyle: Record<HeadingLevel, CSSProperties> = {
  1: {
    fontSize: "var(--ask18-heading-1-size)",
    lineHeight: "var(--ask18-heading-1-leading)",
  },
  2: {
    fontSize: "var(--ask18-heading-2-size)",
    lineHeight: "var(--ask18-heading-2-leading)",
  },
  3: {
    fontSize: "var(--ask18-heading-3-size)",
    lineHeight: "var(--ask18-heading-3-leading)",
  },
  4: {
    fontSize: "var(--ask18-heading-4-size)",
    lineHeight: "var(--ask18-heading-4-leading)",
  },
  5: {
    fontSize: "var(--ask18-heading-5-size)",
    lineHeight: "var(--ask18-heading-5-leading)",
  },
  6: {
    fontSize: "var(--ask18-heading-6-size)",
    lineHeight: "var(--ask18-heading-6-leading)",
  },
};

const sharedHeadingStyle: CSSProperties = {
  fontWeight: "var(--ask18-heading-font-weight)",
  letterSpacing: "var(--ask18-heading-tracking)",
  color: "var(--ask18-heading-color)",
  margin: 0,
};

export function getHeadingStyle(level: HeadingLevel): CSSProperties {
  return {
    ...sharedHeadingStyle,
    ...headingLevelStyle[level],
  };
}

export const textVariantColor: Record<TextVariant, string> = {
  default: "var(--ask18-body-color)",
  muted: "var(--ask18-text-muted)",
};

export const bodyTextStyle: CSSProperties = {
  fontSize: "var(--ask18-body-size)",
  lineHeight: "var(--ask18-body-leading)",
  fontWeight: "var(--ask18-body-weight)",
  margin: 0,
};

export const leadTextStyle: CSSProperties = {
  fontSize: "var(--ask18-lead-size)",
  lineHeight: "var(--ask18-lead-leading)",
  fontWeight: "var(--ask18-lead-weight)",
  color: "var(--ask18-lead-color)",
  margin: 0,
};

export const captionTextStyle: CSSProperties = {
  fontSize: "var(--ask18-caption-size)",
  lineHeight: "var(--ask18-caption-leading)",
  fontWeight: "var(--ask18-caption-weight)",
  color: "var(--ask18-caption-color)",
  margin: 0,
};

export const inlineCodeStyle: CSSProperties = {
  fontFamily: "var(--ask18-code-font)",
  fontSize: "var(--ask18-code-size)",
  color: "var(--ask18-code-color)",
  backgroundColor: "var(--ask18-code-background)",
  paddingInline: "var(--ask18-code-padding-x)",
  paddingBlock: "var(--ask18-code-padding-y)",
  borderRadius: "var(--ask18-code-radius)",
};

export const headingTags: Record<HeadingLevel, "h1" | "h2" | "h3" | "h4" | "h5" | "h6"> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};
