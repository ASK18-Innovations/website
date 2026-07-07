import type { Metadata } from "next";

import { MainContent } from "@/components/layout";
import { ProductCard } from "@/components/products";
import { Container, Section } from "@/components/primitives";
import { PageCTA, PageHero } from "@/components/sections/page";
import {
  gridListClassName,
  gridListItemClassName,
  gridListStyle,
  homeSectionSpacing,
} from "@/components/sections/home/home-styles";
import { routes } from "@/config/routes";
import { productsPageContent } from "@/content/products/page";
import { akshAlgoProduct } from "@/content/products/akshalgo";
import { gopalaMithraProduct } from "@/content/products/gopalamithra";
import { createPageMetadata } from "@/lib/seo";

const products = [akshAlgoProduct, gopalaMithraProduct] as const;

/** Products grid — stretch cards to equal row height from `sm` upward. */
const productsGridClassName = `${gridListClassName} items-stretch`;

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
          <ul className={productsGridClassName} style={gridListStyle}>
            {products.map((product) => (
              <li key={product.name} className={gridListItemClassName}>
                <ProductCard product={product} headingLevel={2} />
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
