type ContainerSize = "sm" | "md" | "lg" | "xl" | "prose" | "content";

type PageContainerProps = {
  children: React.ReactNode;
  /** Max-width preset mapped to design-token container variables. */
  size?: ContainerSize;
  className?: string;
};

const containerMaxWidth: Record<ContainerSize, string> = {
  sm: "var(--ask18-container-sm)",
  md: "var(--ask18-container-md)",
  lg: "var(--ask18-container-lg)",
  xl: "var(--ask18-container-xl)",
  prose: "var(--ask18-container-prose)",
  content: "var(--ask18-container-content)",
};

/**
 * Centralized horizontal layout container.
 * Applies token-based max width and responsive horizontal padding.
 */
export function PageContainer({
  children,
  size = "content",
  className,
}: PageContainerProps) {
  return (
    <div
      className={`mx-auto w-full${className ? ` ${className}` : ""}`}
      style={{
        maxWidth: containerMaxWidth[size],
        paddingInline: "var(--ask18-container-padding-x)",
      }}
    >
      {children}
    </div>
  );
}

export type { ContainerSize, PageContainerProps };
