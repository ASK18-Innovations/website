import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const socialPreviewAlt = `${siteConfig.name} — ${siteConfig.tagline}`;

export const socialPreviewSize = {
  width: 1200,
  height: 630,
} as const;

export const openGraphImagePath = "/opengraph-image";

export const twitterImagePath = "/twitter-image";

export function getDefaultOpenGraphImages(): NonNullable<
  Metadata["openGraph"]
>["images"] {
  return [
    {
      url: openGraphImagePath,
      width: socialPreviewSize.width,
      height: socialPreviewSize.height,
      alt: socialPreviewAlt,
    },
  ];
}

export function getDefaultTwitterImages(): NonNullable<
  Metadata["twitter"]
>["images"] {
  return [twitterImagePath];
}
