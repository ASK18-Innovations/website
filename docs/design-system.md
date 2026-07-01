# Design System

Placeholder documentation for the ASK18 Innovations design system.

## Status

Not yet implemented. Visual components and token wiring are deferred until brand guidelines are finalized.

## Planned Sources

| Layer | Location | Purpose |
|-------|----------|---------|
| Tokens | `styles/tokens.css` | Colors, spacing, radius, layout |
| Typography | `styles/typography.css` | Font stacks, type scale, line height |
| Primitives | `components/primitives/` | Buttons, inputs, links (future) |
| Typography components | `components/typography/` | Headings, body text (future) |
| UI | `components/ui/` | Composed interactive patterns (future) |

## Integration Plan

1. Finalize brand palette and type choices.
2. Import `styles/tokens.css` and `styles/typography.css` into `app/globals.css`.
3. Map CSS custom properties to Tailwind `@theme` tokens.
4. Build primitives before sections and page layouts.

## Guidelines (Draft)

- Prefer semantic HTML and accessible color contrast (WCAG AA minimum).
- Use design tokens instead of hard-coded values in components.
- Keep component APIs small and composable.
