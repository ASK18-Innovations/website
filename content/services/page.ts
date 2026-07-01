/**
 * Services page content.
 */
export const servicesPageContent = {
  hero: {
    title: "Services",
    lead: "ASK18 Innovations provides engineering-first software services for businesses that need reliable websites, systems, dashboards, integrations, and long-term support.",
  },
  note: {
    id: "pricing-note",
    text: "Every engagement is scoped carefully before development begins. Pricing may vary based on requirements, integrations, timelines, and ongoing support needs.",
  },
  cta: {
    title: "Need a reliable software partner?",
    buttonLabel: "Contact ASK18",
  },
  services: [
    {
      id: "business-starter",
      name: "Business Starter",
      subtitle: "Professional Landing Page",
      price: "Starting at ₹19,999",
      description:
        "Professional landing page or single-page website for startups, professionals, and local businesses.",
    },
    {
      id: "business-professional",
      name: "Business Professional",
      subtitle: "Professional Business Website",
      price: "₹34,999",
      badge: "Most Popular",
      description:
        "Professional multi-page business website with modern UI, responsive design, SEO foundation, analytics integration, deployment, and documentation.",
    },
    {
      id: "business-growth",
      name: "Business Growth",
      subtitle: "Advanced Business Website",
      price: "₹59,999",
      description:
        "Advanced business website with custom pages, blog or CMS readiness, enhanced SEO, performance optimization, analytics, and scalable architecture.",
    },
    {
      id: "business-operations-dashboard",
      name: "Business Operations Dashboard",
      subtitle: "Business Analytics & Operations",
      price: "₹79,999",
      description:
        "Secure admin dashboard for managing customers, reports, inventory, sales, employees, or business operations.",
    },
    {
      id: "business-management-system",
      name: "Business Management System",
      subtitle: "Complete Business Software",
      price: "Starting from ₹1,49,999",
      description:
        "Complete business management software tailored to workflows, including authentication, dashboards, reports, automation, APIs, and database integration.",
    },
    {
      id: "custom-software-platform",
      name: "Custom Software Platform",
      subtitle: "Tailored Engineering Solutions",
      price: "Starting from ₹1,99,999",
      description:
        "Custom-built software platforms designed around business requirements with scalable architecture and long-term maintainability.",
    },
    {
      id: "api-integration",
      name: "API Integration",
      subtitle: "Connect Your Business Systems",
      price: "Starting at ₹14,999",
      description:
        "Integration services to connect business tools, CRMs, ERPs, payment systems, analytics platforms, or internal workflows.",
    },
    {
      id: "ask18-care",
      name: "ASK18 Care",
      subtitle: "Annual Care & Support",
      price: "Starting at ₹18,000/year",
      description:
        "Annual maintenance, support, updates, monitoring, and care for ASK18-built websites and software systems.",
    },
  ],
} as const;

export type ServicesPageContent = typeof servicesPageContent;

export type ServiceOffering = (typeof servicesPageContent.services)[number];
