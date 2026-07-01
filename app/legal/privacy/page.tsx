import type { Metadata } from "next";

import { MainContent } from "@/components/layout";
import { LegalDocument, PageHero } from "@/components/sections/page";
import { routes } from "@/config/routes";
import { privacyPolicyContent } from "@/content/legal/privacy";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: privacyPolicyContent.title,
  description: privacyPolicyContent.intro,
  path: routes.legal.privacy,
});

export default function PrivacyPolicyPage() {
  return (
    <MainContent className="flex flex-1 flex-col">
      <PageHero
        title={privacyPolicyContent.title}
        lead={privacyPolicyContent.intro}
      />
      <LegalDocument
        sections={privacyPolicyContent.sections}
        disclaimer={privacyPolicyContent.disclaimer}
      />
    </MainContent>
  );
}
