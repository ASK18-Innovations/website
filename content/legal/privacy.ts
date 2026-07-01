/**
 * Privacy Policy page content.
 * Company name and email are sourced from `config/site.ts` at render time.
 */
export const privacyPolicyContent = {
  title: "Privacy Policy",
  intro:
    "ASK18 Innovations respects privacy and collects only the information necessary to communicate, provide services, and operate responsibly.",
  disclaimer:
    "This policy provides a general framework for privacy practices. Final legal wording should be reviewed by a qualified legal professional before major commercial use.",
  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      body: "We may collect information you provide directly, such as your name, email address, company name, and message content when you contact us or request services. We may also collect basic technical information related to website usage when necessary to maintain security and performance.",
    },
    {
      id: "how-we-use-information",
      title: "How We Use Information",
      body: "Information is used to respond to inquiries, deliver services, improve our website and operations, and communicate about projects or engagements you request. We use information only for legitimate business purposes related to ASK18 Innovations activities.",
    },
    {
      id: "data-sharing",
      title: "Data Sharing",
      body: "We do not sell personal information. We may share information with trusted service providers who support hosting, communication, or operational needs, and only to the extent required to perform those services. We may also disclose information when required by law.",
    },
    {
      id: "data-security",
      title: "Data Security",
      body: "We apply reasonable administrative and technical measures designed to protect information from unauthorized access, misuse, or disclosure. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    },
    {
      id: "contact",
      title: "Contact",
      body: "For privacy-related questions, contact ASK18 Innovations at",
    },
  ],
} as const;

export type PrivacyPolicyContent = typeof privacyPolicyContent;
