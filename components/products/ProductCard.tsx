import { Stack } from "@/components/primitives";
import {
  cardClassName,
  cardContentGap,
  cardStyle,
} from "@/components/sections/home/home-styles";
import { Caption, Heading, Text } from "@/components/typography";
import type { HeadingLevel } from "@/components/typography/constants";

export type ProductCardProduct = {
  name: string;
  description: string;
  summary: string;
  status: string;
};

export type ProductCardProps = {
  product: ProductCardProduct;
  headingLevel: HeadingLevel;
};

/**
 * Product summary card.
 */
export function ProductCard({ product, headingLevel }: ProductCardProps) {
  return (
    <article className={`h-full ${cardClassName}`} style={cardStyle}>
      <Stack gap={cardContentGap} align="start">
        <Heading level={headingLevel} size={4}>
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
  );
}
