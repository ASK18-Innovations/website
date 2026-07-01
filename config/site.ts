/**
 * Central site identity and contact configuration.
 * All company-facing values must be defined here — never hardcoded in pages or components.
 */
export const siteConfig = {
  name: "ASK18 Innovations",
  tagline: "Building intelligent solutions for enterprise.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ask18innovations.com",
  email: "contact@ask18innovations.com",
  social: {
    github: "https://github.com/ask18innovations",
    linkedin: "https://www.linkedin.com/company/ask18-innovations",
  },
  copyright: "© ASK18 Innovations. All rights reserved.",
  language: "en",
  locale: "en-US",
} as const;

export type SiteConfig = typeof siteConfig;

export type SiteSocialLinks = SiteConfig["social"];
