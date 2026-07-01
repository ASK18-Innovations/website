import {
  bodyTextStyle,
  textVariantColor,
  type TextElement,
  type TextVariant,
} from "./constants";

export type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  as?: TextElement;
  className?: string;
};

/**
 * Standard body text with consistent rhythm.
 */
export function Text({
  children,
  variant = "default",
  as: Component = "p",
  className,
}: TextProps) {
  return (
    <Component
      className={className}
      style={{
        ...bodyTextStyle,
        color: textVariantColor[variant],
      }}
    >
      {children}
    </Component>
  );
}
