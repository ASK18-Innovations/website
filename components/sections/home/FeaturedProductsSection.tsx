import { Container, Section, Stack } from "@/components/primitives";
import { Caption, Heading, Text } from "@/components/typography";
import { homeContent } from "@/content/company/home";
import { akshAlgoProduct } from "@/content/products/akshalgo";
import { gopalaMithraProduct } from "@/content/products/gopalamithra";

import {
  cardClassName,
  cardContentGap,
  cardStyle,
  gridListClassName,
  gridListItemClassName,
  gridListStyle,
  homeSectionSpacing,
  sectionContentGap,
} from "./home-styles";

const featuredProducts = [akshAlgoProduct, gopalaMithraProduct] as const;

export function FeaturedProductsSection() {
  const { id, title } = homeContent.featuredProducts;

  return (
    <Section
      id={id}
      spacing={homeSectionSpacing}
      aria-labelledby={`${id}-heading`}
    >
      <Container>
        <Stack gap={sectionContentGap} align="start">
          <Heading level={2} id={`${id}-heading`}>
            {title}
          </Heading>

          <ul className={gridListClassName} style={gridListStyle}>
            {featuredProducts.map((product) => (
              <li key={product.name} className={gridListItemClassName}>
                <article className={cardClassName} style={cardStyle}>
                  <Stack gap={cardContentGap} align="start">
                    <Heading level={3} size={4}>
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
        </Stack>
      </Container>
    </Section>
  );
}
