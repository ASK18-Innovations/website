import type { Metadata } from "next";

import { MainContent } from "@/components/layout";
import {
  EngineeringPhilosophySection,
  FeaturedProductsSection,
  HomeCTASection,
  HomeHero,
  ProcessSection,
  WhatWeBuildSection,
  WhoWeAreSection,
  WhyAsk18Section,
} from "@/components/sections/home";
import { routes } from "@/config/routes";
import { homeContent } from "@/content/company/home";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: routes.home,
  description: homeContent.hero.supportingText,
});

export default function Home() {
  return (
    <MainContent className="flex flex-1 flex-col">
      <HomeHero />
      <WhoWeAreSection />
      <WhatWeBuildSection />
      <FeaturedProductsSection />
      <WhyAsk18Section />
      <EngineeringPhilosophySection />
      <ProcessSection />
      <HomeCTASection />
    </MainContent>
  );
}
