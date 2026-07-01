import type { Metadata } from "next";

import { MainContent } from "@/components/layout";
import { LegalDocument, PageHero } from "@/components/sections/page";
import { routes } from "@/config/routes";
import { termsOfServiceContent } from "@/content/legal/terms";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: termsOfServiceContent.title,
  description: termsOfServiceContent.intro,
  path: routes.legal.terms,
});

export default function TermsOfServicePage() {
  return (
    <MainContent className="flex flex-1 flex-col">
      <PageHero
        title={termsOfServiceContent.title}
        lead={termsOfServiceContent.intro}
      />
      <LegalDocument
        sections={termsOfServiceContent.sections}
        disclaimer={termsOfServiceContent.disclaimer}
      />
    </MainContent>
  );
}
