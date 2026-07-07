/** Official symbol intrinsic ratio (viewBox 140×200). */
const SYMBOL_WIDTH = 22;
const SYMBOL_HEIGHT = 32;

const symbolBlackSrc = "/brand/ask18-symbol-black.svg";
const symbolWhiteSrc = "/brand/ask18-symbol-white.svg";

export type BrandLogoProps = {
  /** When true, the symbol is decorative and hidden from assistive technology. */
  decorative?: boolean;
  className?: string;
};

/**
 * Official ASK18 symbol from Brand Version 1.0 production assets.
 * Renders black on light backgrounds and white on dark backgrounds.
 */
export function BrandLogo({ decorative = false, className }: BrandLogoProps) {
  // Trusted local brand SVGs intentionally use semantic <img> elements;
  // Next.js image optimization is unnecessary for these tiny static vector assets.
  /* eslint-disable @next/next/no-img-element */
  const sharedProps = {
    width: SYMBOL_WIDTH,
    height: SYMBOL_HEIGHT,
    className,
  };

  if (decorative) {
    return (
      <>
        <img
          src={symbolBlackSrc}
          alt=""
          aria-hidden="true"
          {...sharedProps}
          className={[className, "dark:hidden"].filter(Boolean).join(" ")}
        />
        <img
          src={symbolWhiteSrc}
          alt=""
          aria-hidden="true"
          {...sharedProps}
          className={[className, "hidden dark:block"].filter(Boolean).join(" ")}
        />
      </>
    );
  }

  return (
    <>
      <img
        src={symbolBlackSrc}
        alt="ASK18 Innovations"
        {...sharedProps}
        className={[className, "dark:hidden"].filter(Boolean).join(" ")}
      />
      <img
        src={symbolWhiteSrc}
        alt="ASK18 Innovations"
        {...sharedProps}
        className={[className, "hidden dark:block"].filter(Boolean).join(" ")}
      />
    </>
  );
  /* eslint-enable @next/next/no-img-element */
}
