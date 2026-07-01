import { Container, type ContainerProps } from "@/components/primitives";

export type PageContainerProps = ContainerProps;

/**
 * Page-level container — delegates to the `Container` primitive.
 */
export function PageContainer(props: PageContainerProps) {
  return <Container {...props} />;
}

export type { ContainerSize } from "@/components/primitives";
