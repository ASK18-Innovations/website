import type { Metadata } from "next";

import { MainContent } from "@/components/layout";
import { Container, Section, Stack } from "@/components/primitives";
import { PageCTA, PageHero } from "@/components/sections/page";
import {
  cardClassName,
  cardContentGap,
  cardStyle,
  gridListClassName,
  gridListStyle,
  homeSectionSpacing,
} from "@/components/sections/home/home-styles";
import { Caption, Heading, Text } from "@/components/typography";
import { routes } from "@/config/routes";
import { productsPageContent } from "@/content/products/page";
import { akshAlgoProduct } from "@/content/products/akshalgo";
import { gopalaMithraProduct } from "@/content/products/gopalamithra";
import { createPageMetadata } from "@/lib/seo";

const products = [akshAlgoProduct, gopalaMithraProduct] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Products",
  description: productsPageContent.hero.lead,
  path: routes.products.index,
});

export default function ProductsPage() {
  const { cta } = productsPageContent;

  return (
    <MainContent className="flex flex-1 flex-col">
      <PageHero
        title={productsPageContent.hero.title}
        lead={productsPageContent.hero.lead}
      />

      <Section spacing={homeSectionSpacing}>
        <Container>
          <ul className={gridListClassName} style={gridListStyle}>
              {products.map((product) => (
                <li key={product.name}>
                  <article className={cardClassName} style={cardStyle}>
                    <Stack gap={cardContentGap} align="start">
                      <Heading level={2} size={4}>
                        {product.name}
                      </Heading>
                      <Text variant="muted">{product.description}</Text>
                      <Text className="max-w-[var(--ask18-prose-measure)]">
                        {product.summary}
                      </Text>
                      <Caption as="p">
                        Status:{" "}
                        <span style={{ color: "var(--ask18-text-accent)" }}>
                          {product.status}
                        </span>
                      </Caption>
                    </Stack>
                  </article>
                </li>
              ))}
          </ul>
        </Container>
      </Section>

      <PageCTA
        title={cta.title}
        buttonLabel={cta.buttonLabel}
        href={routes.company.contact}
      />
    </MainContent>
  );
}
