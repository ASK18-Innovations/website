import { inlineCodeStyle } from "./constants";

export type CodeProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Inline code styling — no syntax highlighting.
 */
export function Code({ children, className }: CodeProps) {
  return (
    <code className={className} style={inlineCodeStyle}>
      {children}
    </code>
  );
}
