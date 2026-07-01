/**
 * Contact page content.
 * Email and phone are sourced from `config/site.ts`.
 */
export const contactPageContent = {
  hero: {
    title: "Contact ASK18",
    lead: "For business websites, custom software, dashboards, automation systems, or product collaboration, contact ASK18 Innovations.",
  },
  contactDetails: {
    id: "contact-details",
    title: "Contact Details",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  inquiryTypes: {
    id: "inquiry-types",
    title: "Inquiry Types",
    items: [
      "Business Websites",
      "Custom Software",
      "Dashboards",
      "Automation Systems",
      "Product Collaboration",
    ],
  },
  cta: {
    title: "Start with a clear problem. Build with discipline.",
    buttonLabel: "Email ASK18",
  },
} as const;

export type ContactPageContent = typeof contactPageContent;
