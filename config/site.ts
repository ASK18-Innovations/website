export const siteConfig = {
  name: "ASK18 Innovations",
  description: "Official corporate website for ASK18 Innovations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ask18innovations.com",
  locale: "en-US",
} as const;

export type SiteConfig = typeof siteConfig;
