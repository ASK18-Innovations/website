import { containerMaxWidth, type ContainerSize } from "./constants";

export type ContainerProps = {
  children: React.ReactNode;
  /** Max-width preset mapped to design-token container variables. */
  size?: ContainerSize;
  className?: string;
};

/**
 * Horizontal layout container with token-based max width and padding.
 */
export function Container({
  children,
  size = "content",
  className,
}: ContainerProps) {
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
