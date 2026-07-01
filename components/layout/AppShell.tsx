import { SiteHeader } from "./SiteHeader";

type AppShellProps = {
  children: React.ReactNode;
};

/**
 * Skip-to-content link placeholder.
 * Targets `#main-content` provided by `MainContent` on pages that use it.
 */
function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:rounded-ask18-sm focus:bg-ask18-bg-primary focus:px-ask18-md focus:py-ask18-sm focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ask18-focus-ring"
    >
      Skip to main content
    </a>
  );
}

/**
 * Application shell — owns page structure for every route.
 * SiteHeader is integrated; SiteFooter mounts below children when built.
 */
export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex flex-1 flex-col">
      <SkipToContent />
      <SiteHeader />
      {children}
      {/* Future: <SiteFooter /> */}
    </div>
  );
}
