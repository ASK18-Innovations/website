/**
 * Corporate homepage content.
 * Headline and company name are sourced from `config/site.ts`.
 */
export const homeContent = {
  hero: {
    supportingText:
      "ASK18 Innovations builds reliable software products, business systems, and digital platforms with precision, discipline, and long-term engineering thinking.",
    primaryCta: "Start a Project",
    secondaryCta: "Explore Products",
  },
  whoWeAre: {
    id: "who-we-are",
    title: "Who We Are",
    body: "ASK18 Innovations is an engineering-first software company focused on building dependable products and digital systems that stand the test of time.",
  },
  whatWeBuild: {
    id: "what-we-build",
    title: "What We Build",
    items: [
      "Software Products",
      "Business Software",
      "Corporate Websites",
      "Automation Systems",
    ],
  },
  featuredProducts: {
    id: "featured-products",
    title: "Featured Products",
  },
  whyAsk18: {
    id: "why-ask18",
    title: "Why ASK18",
    items: [
      "Engineering-first execution",
      "Clean architecture",
      "Production-ready delivery",
      "Long-term maintainability",
    ],
  },
  engineeringPhilosophy: {
    id: "engineering-philosophy",
    title: "Engineering Philosophy",
    items: [
      "Reliability before novelty",
      "Simplicity over complexity",
      "Precision over speed",
      "Trust earned through consistency",
    ],
  },
  process: {
    id: "our-process",
    title: "Our Process",
    items: [
      {
        step: "Discover",
        description: "Understand the problem before writing code.",
      },
      {
        step: "Design",
        description: "Shape the system before implementation.",
      },
      {
        step: "Engineer",
        description: "Build with clarity, reliability, and maintainability.",
      },
      {
        step: "Deploy",
        description: "Release with confidence and production discipline.",
      },
      {
        step: "Support",
        description: "Improve through feedback and long-term ownership.",
      },
    ],
  },
  cta: {
    id: "contact",
    headline: "Ready to build software that lasts?",
    buttonLabel: "Contact ASK18",
  },
} as const;

export type HomeContent = typeof homeContent;
