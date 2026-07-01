/**
 * Shared header and navigation surface styles.
 */
export const focusRingClassName =
  "rounded-ask18-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring";

export const headerClassName =
  "sticky top-0 z-40 border-b border-ask18-border-default bg-ask18-bg-primary/95 backdrop-blur-sm supports-backdrop-filter:bg-ask18-bg-primary/90";

export const headerInnerClassName =
  "flex h-14 items-center justify-between gap-ask18-lg md:h-16";

export const brandLinkClassName = focusRingClassName;

export const navLinkBaseClassName = [
  "inline-flex items-center",
  "rounded-ask18-sm",
  "px-ask18-sm py-ask18-xs",
  "text-sm leading-normal",
  "transition-colors duration-150",
  focusRingClassName,
].join(" ");

export const navLinkInactiveClassName =
  "text-ask18-text-muted hover:text-ask18-text-primary";

export const navLinkActiveClassName =
  "text-ask18-text-primary font-medium";

export const mobileMenuButtonClassName = [
  "inline-flex items-center justify-center",
  "rounded-ask18-md",
  "border border-ask18-border-default",
  "px-ask18-md py-ask18-xs",
  "text-sm text-ask18-text-primary",
  "transition-colors duration-150",
  "hover:border-ask18-border-strong hover:text-ask18-text-primary",
  focusRingClassName,
].join(" ");

export const desktopNavListClassName = "flex items-center gap-ask18-md lg:gap-ask18-lg";
