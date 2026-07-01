type MainContentProps = {
  children: React.ReactNode;
  /** Landmark id for skip-to-content navigation. */
  id?: string;
  className?: string;
};

/**
 * Semantic main landmark for page content.
 * Use once per page; provides the skip-link target via `id="main-content"`.
 */
export function MainContent({
  children,
  id = "main-content",
  className,
}: MainContentProps) {
  return (
    <main id={id} className={className}>
      {children}
    </main>
  );
}

export type { MainContentProps };
