# Vendored — do not edit

A one-way mirror of the Stickware design system, copied by
`scripts/sync-design-system.mjs`. Edit the design system upstream and
re-run `pnpm sync:ds`; changes made here are overwritten.

- **Source:** `https://github.com/stickwareai/design-system`
- **Commit:** 5fc5c449440f3e940ff4f5c3551cd90b6eb46afb — Reconcile against the built surfaces: dark theme, self-hosted fonts, width scale

Only the token CSS and brand marks are mirrored. Fonts come from the
`@fontsource` packages upstream self-hosts (see `src/styles/tokens.css`).
