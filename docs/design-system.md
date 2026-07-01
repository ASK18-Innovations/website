# Design System

Foundational tokens and style architecture for the ASK18 Innovations corporate website.

## Status

**Milestone 2.2 complete.** Color, spacing, radius, container, and typography tokens are centralized in CSS. Tailwind utilities are bridged via `@theme inline` in `app/globals.css`. Visual components are not yet implemented.

## Token Sources

| Layer | Location | Purpose |
|-------|----------|---------|
| Colors, spacing, layout | `styles/tokens.css` | Brand palette, neutrals, surfaces, borders, focus |
| Typography | `styles/typography.css` | Type scale, heading/body rhythm, prose measure |
| Integration | `app/globals.css` | Imports token files and maps to Tailwind theme |

## Color Philosophy

The ASK18 palette is locked to four brand colors:

| Token | Hex | Role |
|-------|-----|------|
| Black | `#111111` | Primary text, inverse surfaces |
| White | `#FFFFFF` | Primary backgrounds, inverse text |
| Graphite | `#2F343B` | Secondary text, borders, muted UI |
| Deep Indigo | `#2F3E8F` | **Accent only** — focus rings, subtle highlights |

**Principles:**

- Black and White anchor the interface. Graphite provides hierarchy without introducing extra brand hues.
- Deep Indigo is reserved for low-emphasis accent use (focus states, subtle background tints). It must not become a primary action or brand-fill color.
- Neutral steps (`--ask18-neutral-*`) are derived from the locked palette for borders, dividers, and disabled states.
- Semantic tokens (`--ask18-bg-*`, `--ask18-text-*`, `--ask18-border-*`) should be used in components instead of raw hex values.
- Dark mode remaps semantic tokens via `prefers-color-scheme`; components should reference semantics, not hard-coded light values.

## Typography Philosophy

Typography is functional and restrained — no decorative treatments.

**Principles:**

- **Headings:** Semibold weight, tight tracking, stepped scale (`--ask18-heading-1-size` through `--ask18-heading-6-size`). Headings use `--ask18-heading-*` rhythm variables.
- **Body:** Regular weight, relaxed line height (`--ask18-leading-relaxed`) for long-form readability.
- **Prose:** Long-form content is capped at `--ask18-prose-measure` (65ch) or `--ask18-prose-max-width` (42rem container).
- **Font stacks:** Geist Sans (primary) and Geist Mono (code) via Next.js font loading; fallbacks defined in `--ask18-font-sans` / `--ask18-font-mono`.
- Token files define variables only — no global `h1`/`p` element rules — so existing pages are not restyled until typography components are built.

## Spacing Philosophy

Spacing follows a consistent rem-based scale:

| Token | Value |
|-------|-------|
| `--ask18-space-xs` | 0.25rem |
| `--ask18-space-sm` | 0.5rem |
| `--ask18-space-md` | 1rem |
| `--ask18-space-lg` | 1.5rem |
| `--ask18-space-xl` | 2rem |
| `--ask18-space-2xl` | 3rem |
| `--ask18-space-3xl` | 4rem |
| `--ask18-space-4xl` | 6rem |

**Principles:**

- Use the scale consistently; avoid arbitrary pixel values in components.
- Section vertical padding and container horizontal padding reference tokens (`--ask18-container-padding-x`).
- Container max widths (`--ask18-container-sm` through `--ask18-container-xl`) constrain layout at breakpoints.

## Accessibility Expectations

- **Contrast:** Text and interactive elements must meet WCAG 2.1 AA contrast ratios. Black on White and White on Black exceed AAA for body text.
- **Focus:** Interactive elements use `--ask18-focus-ring` (Deep Indigo) with visible `:focus-visible` outlines. Never remove focus indicators.
- **Color independence:** Do not rely on color alone to convey state or meaning; pair with text, icons, or patterns.
- **Typography:** Minimum body size is `--ask18-text-base` (1rem). Line height for body copy should be at least `--ask18-leading-normal`.
- **Motion:** Respect `prefers-reduced-motion` when animations are added in later milestones.

## Performance Expectations

- **CSS-only tokens:** Design tokens are plain CSS custom properties — no runtime JS, no client-side theme libraries.
- **No webfont bloat:** Only Geist Sans and Geist Mono are loaded via `next/font` (subsetted, self-hosted).
- **Tailwind purge:** Utility classes mapped in `@theme inline` are tree-shaken at build time; unused tokens add negligible bundle cost.
- **Avoid `@import` chains in components:** Tokens are imported once in `globals.css`.

## Tailwind Usage

Tokens are available as Tailwind utilities via the `@theme` bridge:

```html
<!-- Examples (for future components) -->
<div class="bg-ask18-bg-primary text-ask18-text-primary border-ask18-border-default">
<p class="max-w-[var(--ask18-prose-measure)]">
<section class="px-ask18-lg py-ask18-2xl max-w-ask18-xl">
```

Prefer semantic token utilities (`bg-ask18-bg-primary`) over raw brand colors unless the design explicitly calls for a locked swatch.

## Next Steps

1. Build typography components under `components/typography/` using heading/body rhythm variables.
2. Build primitives (`components/primitives/`) with focus ring and border tokens.
3. Compose layout shell (`components/layout/`) once navigation design is approved.
