import { Container, Section, Stack } from "@/components/primitives";
import { Caption, Heading, Text } from "@/components/typography";
import { homeContent } from "@/content/company/home";
import { akshAlgoProduct } from "@/content/products/akshalgo";
import { gopalaMithraProduct } from "@/content/products/gopalamithra";

import { borderedItemStyle } from "./cta-styles";

const featuredProducts = [akshAlgoProduct, gopalaMithraProduct] as const;

export function FeaturedProductsSection() {
  const { id, title } = homeContent.featuredProducts;

  return (
    <Section id={id} spacing="3xl" aria-labelledby={`${id}-heading`}>
      <Container>
        <Stack gap="xl" align="start">
          <Heading level={2} id={`${id}-heading`}>
            {title}
          </Heading>

          <ul
            className="grid w-full grid-cols-1 sm:grid-cols-2"
            style={{
              gap: "var(--ask18-space-md)",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {featuredProducts.map((product) => (
              <li key={product.name}>
                <article style={borderedItemStyle}>
                  <Stack gap="xs" align="start">
                    <Heading level={3} size={5}>
                      {product.name}
                    </Heading>
                    <Text variant="muted">{product.description}</Text>
                    <Caption as="p">Status: {product.status}</Caption>
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
