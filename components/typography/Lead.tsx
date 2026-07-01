import { leadTextStyle } from "./constants";

export type LeadProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Introductory paragraph — larger readable body for use below page titles.
 */
export function Lead({ children, className }: LeadProps) {
  return (
    <p className={className} style={leadTextStyle}>
      {children}
    </p>
  );
}
