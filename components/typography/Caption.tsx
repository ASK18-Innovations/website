import { captionTextStyle, type CaptionElement } from "./constants";

export type CaptionProps = {
  children: React.ReactNode;
  as?: CaptionElement;
  className?: string;
};

/**
 * Small supporting text with accessible muted contrast.
 */
export function Caption({
  children,
  as: Component = "p",
  className,
}: CaptionProps) {
  return (
    <Component className={className} style={captionTextStyle}>
      {children}
    </Component>
  );
}
