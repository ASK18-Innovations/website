/**
 * Shared header and navigation surface styles.
 */
export const focusRingClassName =
  "rounded-ask18-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ask18-focus-ring";

/** Mobile header height token — matches `h-14` and menu panel offset. */
export const headerHeightMobileClassName = "h-14";

/** Desktop header height token — matches `md:h-16`. */
export const headerHeightDesktopClassName = "md:h-16";

export const headerClassName =
  "sticky top-0 z-40 border-b border-ask18-border-default bg-ask18-bg-primary/95 backdrop-blur-sm supports-backdrop-filter:bg-ask18-bg-primary/90";

export const headerInnerClassName = [
  "flex min-w-0 items-center justify-between gap-ask18-sm md:gap-ask18-lg",
  headerHeightMobileClassName,
  headerHeightDesktopClassName,
].join(" ");

export const brandLinkClassName = `${focusRingClassName} min-w-0 flex-1`;

export const brandLockupClassName =
  "flex min-w-0 items-center gap-ask18-sm overflow-hidden";

export const brandNameClassName = "min-w-0 truncate";

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
  "inline-flex shrink-0 items-center justify-center",
  "rounded-ask18-md",
  "border border-ask18-border-default",
  "px-ask18-md py-ask18-xs",
  "text-sm text-ask18-text-primary",
  "transition-colors duration-150",
  "hover:border-ask18-border-strong hover:text-ask18-text-primary",
  focusRingClassName,
].join(" ");

export const mobileMenuPanelClassName = [
  "fixed inset-x-0 z-50",
  "top-[var(--ask18-header-height-mobile)]",
  "max-h-[calc(100dvh-var(--ask18-header-height-mobile))]",
  "overflow-y-auto overscroll-contain",
  "border-b border-ask18-border-default bg-ask18-bg-primary",
  "px-ask18-lg py-ask18-lg md:hidden",
].join(" ");

export const mobileNavListClassName =
  "flex w-full list-none flex-col items-stretch gap-ask18-md p-0 m-0";

export const mobileNavLinkClassName = [
  "inline-flex w-full min-h-11 items-center",
  "rounded-ask18-sm",
  "px-ask18-sm py-ask18-sm",
  "text-sm leading-normal",
  "transition-colors duration-150",
  focusRingClassName,
].join(" ");

export const desktopNavListClassName = "flex items-center gap-ask18-md lg:gap-ask18-lg";
