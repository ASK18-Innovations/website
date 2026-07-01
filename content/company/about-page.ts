/**
 * About page content.
 * Shared company positioning is sourced from `content/company/home.ts`.
 */
export const aboutPageContent = {
  hero: {
    title: "About ASK18 Innovations",
    lead: "ASK18 Innovations is an engineering-first software company focused on building reliable software products, business systems, and digital platforms with long-term maintainability.",
  },
  howWeWork: {
    id: "how-we-work",
    title: "How We Work",
  },
  cta: {
    title: "Let's build software that earns trust.",
    buttonLabel: "Contact ASK18",
  },
} as const;

export type AboutPageContent = typeof aboutPageContent;
