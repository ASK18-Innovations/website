import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

import {
  socialPreviewAlt,
  socialPreviewSize,
} from "./social-preview.constants";

export const alt = socialPreviewAlt;
export const size = socialPreviewSize;
export const contentType = "image/png";

/**
 * Frozen official symbol path from `public/brand/ask18-symbol-black.svg`.
 * ImageResponse does not reliably render local public SVG assets, so the exact
 * path geometry is inlined without modification.
 */
const ASK18_SYMBOL_PATH =
  "M 20 180 L 120 180 L 120 100 L 90 100 L 90 80 L 120 80 L 120 0 L 55 40 L 20 180 Z";

export default function SocialPreviewImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "56px",
            width: "100%",
            height: "100%",
          }}
        >
          <svg
            viewBox="0 0 140 200"
            width="140"
            height="200"
            aria-hidden="true"
          >
            <path d={ASK18_SYMBOL_PATH} fill="#111111" />
          </svg>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "24px",
              maxWidth: "820px",
            }}
          >
            <div
              style={{
                fontSize: 64,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#111111",
                lineHeight: 1.1,
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 400,
                color: "#2f343b",
                lineHeight: 1.35,
              }}
            >
              {siteConfig.tagline}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...socialPreviewSize,
    },
  );
}
