export const serviceBadgeClassName =
  "inline-flex shrink-0 items-center rounded-full border border-ask18-border-default bg-ask18-bg-muted px-ask18-sm py-ask18-xs text-xs font-semibold leading-normal text-ask18-text-secondary";

export type ServiceBadgeProps = {
  children: React.ReactNode;
};

/**
 * Compact pill badge for optional service-card labels.
 */
export function ServiceBadge({ children }: ServiceBadgeProps) {
  return <span className={serviceBadgeClassName}>{children}</span>;
}

export const serviceCardHeadingRowClassName =
  "flex w-full min-w-0 flex-wrap items-center gap-x-ask18-sm gap-y-ask18-xs";
