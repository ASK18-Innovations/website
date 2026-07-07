/**
 * Central site identity and contact configuration.
 * All company-facing values must be defined here — never hardcoded in pages or components.
 */
const whatsappNumber = "919494756765";

const whatsappMessage =
  "Hello ASK18 Innovations, I would like to discuss a software project.";

export const siteConfig = {
  name: "ASK18 Innovations",
  tagline: "Engineering software that earns trust.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ask18innovations.com",
  email: "ask18innovations@gmail.com",
  phone: {
    display: "+91 94947 56765",
    tel: `+${whatsappNumber}`,
    whatsappNumber,
  },
  whatsapp: {
    message: whatsappMessage,
    ariaLabel: "Chat with ASK18 Innovations on WhatsApp",
    url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  },
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
