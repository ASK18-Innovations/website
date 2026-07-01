/**
 * Products index page content.
 * Product details are sourced from `content/products/`.
 */
export const productsPageContent = {
  hero: {
    title: "Products",
    lead: "ASK18 Innovations builds software products with disciplined engineering, scalable architecture, and long-term ownership.",
  },
  cta: {
    title: "Interested in building with ASK18?",
    buttonLabel: "Contact ASK18",
  },
} as const;

export type ProductsPageContent = typeof productsPageContent;
