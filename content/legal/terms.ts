/**
 * Terms of Service page content.
 * Company name and email are sourced from `config/site.ts` at render time.
 */
export const termsOfServiceContent = {
  title: "Terms of Service",
  intro:
    "These terms outline the basic conditions for using ASK18 Innovations services and website.",
  disclaimer:
    "These terms provide a general framework for website and service use. Final legal wording should be reviewed by a qualified legal professional before major commercial use.",
  sections: [
    {
      id: "use-of-website",
      title: "Use of Website",
      body: "You may use this website for lawful purposes and in a manner that does not interfere with its operation or the rights of others. Content is provided for general information and does not constitute a binding offer unless confirmed through a separate written agreement.",
    },
    {
      id: "service-engagements",
      title: "Service Engagements",
      body: "Professional services, including software development, product work, and consulting, are governed by separate statements of work or agreements. Website content alone does not create a client relationship or project commitment.",
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      body: "Website content, branding, and materials published by ASK18 Innovations remain the property of ASK18 Innovations unless otherwise stated. Unauthorized reproduction or misuse of site content is not permitted.",
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      body: "This website and its content are provided on an as-is basis to the extent permitted by applicable law. ASK18 Innovations is not liable for indirect, incidental, or consequential damages arising from use of the website.",
    },
    {
      id: "contact",
      title: "Contact",
      body: "For questions about these terms, contact ASK18 Innovations at",
    },
  ],
} as const;

export type TermsOfServiceContent = typeof termsOfServiceContent;
