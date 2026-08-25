# Stickware Design System

**Stickware** makes AI-powered hardware and software for legal firms — large and small. Its defining idea is *on-premises intelligence*: a state-of-the-art legal model that runs on a sealed device inside the firm (the **Stickware Key**), so privileged matters never leave the building. The brand is a reliable, trustworthy partner that delivers SOTA technology with the discretion the profession demands.

The system blends **tech-savvy and old-school**: warm law-library materials (brass, leather, parchment, ink) meet a clean, precise modern UI. The motto for the palette: *brass and its patina, on parchment, in ink.*

> **Provenance / sources.** This system began as a written brand brief — no codebase, Figma file, or asset library was provided, so voice, palette, type, and product surfaces were designed against the brief. The brand marks in `assets/` were later vectorized from the client's own logo. Since then the system has been *built*, twice over: the Stickware HQ docs site (`the-redaction-stick/docs/site`, Astro + Starlight) and the sticklab dashboard (Reflex) both wear it in production. **Where this repo and those surfaces disagree, the built surfaces win** — they are where the system is exercised daily, and this repo is reconciled against them.

---

## Brand at a glance
- **Name:** Stickware — the product and company name, set by the firm.
- **Product platform:** *Stickware* — the web app (matters, document review, AI assistant).
- **Hardware:** *Stickware Key* — a sealed on-prem USB appliance that holds the model.
- **Sibling product:** *The Redaction Stick* — same family, a USB-shaped device that keeps the user's text on-device. It wears this same system.
- **Tagline patterns:** "Counsel that never leaves the building." / "Your matters stay in chambers."
- **Voice:** warm & reassuring — a steady second chair, never the hero.

---

## CONTENT FUNDAMENTALS

**Stance & person.** We address the attorney directly as **"you"** and speak as **"we"** / **"Stickware."** We are a steady second chair, never the hero. The attorney always has the final word — copy reinforces their authority ("you have the final word," "3 clauses need your eyes").

**Tone.** Warm, plain, and precise. Calm under pressure — never alarmist, never hype. We sound like a trusted senior associate: competent, discreet, unflashy. The privacy/on-prem story is a reassurance, stated plainly ("nothing left the building"), not a fear pitch.

**Casing.** Sentence case everywhere — headlines, buttons, nav, labels. Reserve Title Case for proper nouns (Stickware, Stickware Key) and tier names (Chambers, Practice, Counsel). Never ALL-CAPS for emphasis in prose; small-caps eyebrows (mono, letter-spaced) are the one exception, used as labels.

**Specificity over adjectives.** Prefer concrete nouns and numbers to marketing adjectives. "Reviewed all 42 pages against 14 comparable deals" beats "powerful AI review." Cite the clause (`§ 4.2`), name the risk, show the count.

**Legal register, lightly worn.** Use real terms of art naturally — *matter, clause, indemnification, privilege, jurisdiction, redlines, precedent, chambers, counsel*. Never overload; one term of art per sentence. Avoid legalese padding ("heretofore," "pursuant to").

**No hype, no slop.** Avoid "revolutionary," "disrupt," "leverage," "synergy," "supercharge," "game-changing," exclamation marks, and emoji. Errors are written like a helpful colleague, not a stack trace ("That bar number isn't recognized." not "Error 402").

**Examples**
- ✓ "Your matters stay in chambers." ✓ "We'll draft the first pass — you have the final word." ✓ "Review finished. 3 clauses need your eyes."
- ✕ "Revolutionary AI disruption!" ✕ "Error 402: action failed." ✕ "Leverage synergies at scale."

See the **Voice** specimen card (`guidelines/cards/brand-voice.html`).

---

## VISUAL FOUNDATIONS

**Palette.** Warm and material. A warm neutral ramp runs *parchment → ink* (`--warm-50…950`); these drive nearly all text and surfaces. **Brass** (`--brass-500 #a9743a`) is the single brand metal — used for primary actions, the logo, active states, and accents. **Patina** (`--patina-500 #2f6b66`, an aged-brass teal) is the lone cool accent — the "digital" counterpoint, used sparingly for links, focus rings, and AI/data. Keep the two separate: **brass owns active/UI states, patina owns links and focus.** **Oxblood** supplies emphasis/danger. Status hues are muted to sit in the warm world (forest `--success`, amber `--warning`, oxblood `--danger`, patina `--info`). Two background families only: **parchment** (`--surface-page`) for light, **ink** (warm near-black) for dark. No blue, no purple, no bluish-purple gradients, ever.

**Themes.** Light and dark are both first-class, and they are *one ramp read two ways* — ink surfaces with parchment text instead of the reverse. Only the semantic aliases flip; every raw ramp value stays put. Dark is opt-in via `<html data-theme="dark">` (see `tokens/colors.css`). Two rules survive the flip: elevation reads **lighter** on ink (desk < sheet < panel — the inverse of the paper model), and brass/patina keep their roles, stepping 1–2 rungs lighter to clear the ink.

**Backgrounds.** Flat, warm, paper-like. No photographic hero imagery and no busy textures by default; the warmth comes from the parchment tones and material metaphor, not gradients. Dark sections use solid ink. The one decorative flourish is a soft radial **brass glow** behind the Key device on dark.

**Surfaces — "sheet on desk."** The app frame (top bar, side rails) sits on one recessed **desk** tone (`--surface-desk`); the content pane is an elevated paper **sheet** (`--surface-sheet`) floating on it, edged by `--shadow-sheet` rather than divided off with a hard hairline. In light the sheet is the brightest thing on the page; in dark the ladder inverts and the sheet sits one step *above* the desk.

**Data-viz.** Charts pull `--chart-1…4` — brass and patina alternating, so a two-series chart reads as the brand pair, and 3–4 step down those same two hues rather than introducing new ones. Axes take `--chart-axis`, grid lines `--chart-grid`. All six flip with the theme.

**Typography.** Three families that bridge old-school and tech:
- **Bitter** (slab serif) — display & headlines. Sturdy, bookish, authoritative. Weights 700/800 for display, italic for accent words.
- **Public Sans** (humanist sans, US-design-system lineage) — UI and body. Neutral, trustworthy, legible at small sizes.
- **IBM Plex Mono** — metadata, citations, IDs, eyebrows, the "on-prem/technical" texture (matter IDs like `LS-2026-0481`, `§ 4.2`).
Scale is a 1.250 major third on a 16px base. Headlines are tight (`-0.02em`), bodies relaxed (1.65). Eyebrows are mono, uppercase, `0.08em` tracked — **the one place ALL-CAPS is allowed.** All three families are self-hosted from `assets/fonts/`; Bitter and Public Sans are variable builds, so the stacks name `'Bitter Variable'` / `'Public Sans Variable'` first (see the Fonts note at the end).

**Spacing & layout.** 4px base grid; restrained, document-like rhythm. Reading measures stay narrow (`--container-prose 68ch`). Fixed chrome: sticky top bar (60px) and a 248px ink sidebar in the app; sticky translucent header on the site.

**Width & measure.** Spacing answers *how far apart*; **width** answers *how wide* — and for a long time only the first had a vocabulary. The result was predictable: the same role came out at three different sizes depending on who typed it, and stacked panels rendered visibly ragged because a card that sets no width shrinks to its own content. The fix is the same shape as the spacing scale — **name the role, not the number.**

| Token | Value | The role it names |
|---|---|---|
| `--measure` | `52rem` | a page's intro paragraph and other prose (~85 characters) |
| `--measure-tight` | `40rem` | helper/caption text sitting under a control |
| `--field-xs` | `5rem` | a count, a limit, a threshold |
| `--field-sm` | `8rem` | a short token — a family, a status |
| `--field-md` | `12rem` | a name — a slug, a model, a collection |
| `--field-lg` | `18rem` | an id, or a comma-separated tag list |
| `--field-xl` | `26rem` | a PII value, a free-text phrase |
| `--panel-max` | `88rem` | the widest a centred page column grows |

Two rules make them stick:

- **Panels are a variant, not a default.** A card sets no width of its own, because the same skin also dresses the small stat tiles laid out in horizontal rows — a blanket `width: 100%` would blow those out. Full width is an opt-in panel variant, so a vertical stack of panels comes out uniform.
- **Reach for the token, not the prop.** Every hand-written `width: 100%` or `max-width: 11rem` is a future inconsistency; the named token is how the number stays single-sourced. (In the sticklab dashboard that's `ds.panel()` / `ds.prose()` / `ds.field(size="md")`.)

**Radii.** Squared and old-school, lightly softened: controls `6px`, cards `10px`, max `16px`. Pills are reserved for tags, badges, and avatars only — never buttons.

**Borders.** Hairline and warm (`--border-hairline` = `--warm-200`). Borders do real work here (this is a document brand); most cards and rows use a 1px warm border plus a soft shadow.

**Shadows / elevation.** Warm-tinted (`rgba(35,26,16,…)`), low, and soft — never harsh or neutral-grey. A signature **letterpress/engrave inset** (`--shadow-engrave`) gives inputs, wells, and toggle tracks a pressed, printed feel. A **brass key-line** ring (`--ring-brass`) marks featured/hero cards.

**Transparency & blur.** Used only for sticky headers/top bars (parchment at ~85% with a light backdrop blur). Otherwise surfaces are opaque.

**Motion.** Quiet and quick. `--ease-out` for most transitions, `120–200ms`. Hover = subtle background shift and a 2–3px lift on cards; press = a `0.5px` translate down plus a darker brass. No bounces, no infinite decorative loops, no parallax. Respect `prefers-reduced-motion`.

**Hover / press states.** Buttons: primary darkens brass on hover, darkens further + nudges down on press; secondary tints to raised surface; ghost fills with `--brand-subtle`. Rows and nav items shift to a raised/sunken warm tint. Focus is always the patina ring (`--ring`).

**Imagery vibe.** Material, warm, restrained. When photography is added it should be warm-toned, calm, and human (attorneys, paper, brass, wood) — not cold stock tech. Avoid neon, glassmorphism, and 3D blobs.

**Cards.** Warm white (`--surface-card`), 1px hairline border, `--radius-lg`, soft `--shadow-sm`. Interactive cards lift on hover; featured cards add the brass key-line. Header/body/footer rows are divided by hairlines.

See specimen cards under `guidelines/cards/` (Type, Colors, Spacing, Brand groups in the Design System tab).

---

## ICONOGRAPHY

- **Icon set:** [**Lucide**](https://lucide.dev) (CDN), used throughout components and UI kits. Chosen for its clean, even **~2px stroke**, rounded joins, and neutral-modern tone — the "tech-savvy" half of the brand, balanced by the warm type and palette. **This is a substitution choice** (no icon set was provided); swap freely, but keep to one consistent line set with matching stroke weight.
- **Usage:** line (outline) icons only, currentColor, typically `16–22px`. Icons ride alongside mono eyebrows and inside buttons. Don't mix filled and outline sets.
- **Emoji:** never. **Unicode glyphs:** used sparingly and deliberately — `×` for tag-remove, `§` for clause/section references, `·` as a meta separator, `✓/✕` in do/don't guidance, `⌘K` in search.
- **Brand marks (in `assets/`, vectorized from the client's logo):**
  - `logo-mark.svg` — the **USB-stick mark** in brass (a compact flash-drive glyph; reads on both parchment and ink).
  - `logo-wordmark.svg` / `logo-wordmark-light.svg` — the full lockup: the flash-drive logo with **STICKWARE** on its body, in ink (light bg) / parchment (dark bg).
  - `key-device.svg` — the Stickware Key, the brass flash-drive logo as the on-prem device.
  - `favicon.svg` — the tab variant. Not the same file as `logo-mark.svg`: the header mark is a transparent brass stick meant to sit on parchment, while a favicon needs its own backing, so this is a solid brass app-icon tile with the stick drawn in parchment and the tile showing through the cut-outs. Same negative-space reading, recoloured to stay legible at 16px on a browser's own tab strip.
- Do **not** redraw icons by hand or with emoji in slides/kits — pull from Lucide or copy the brand SVGs.

---

## INDEX / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for downloadable use.

**`tokens/`** (all reachable from `styles.css`)
- `fonts.css` — self-hosted `@font-face` for Bitter / Public Sans / IBM Plex Mono (see Fonts note below).
- `fonts-cdn.css` — the Google Fonts alternative, for contexts that can't ship the `.woff2` binaries. *Not* imported by default.
- `colors.css` — warm/brass/patina/oxblood ramps, semantic aliases, chart palette, and the `[data-theme="dark"]` block.
- `typography.css` — families, scale, weights, roles, utility classes.
- `spacing.css` — 4px scale, containers, the width & measure scale, radii, control heights.
- `elevation.css` — borders, warm shadows, letterpress inset, motion tokens, and their dark-theme counterparts.

**`assets/`** — brand marks (see Iconography) and `fonts/` (the five latin `.woff2` subsets).

**`guidelines/cards/`** — foundation specimen cards (Design System tab): type (display/body/mono/scale), colors (brass/patina/neutrals/semantic/surfaces), spacing (scale/radii/elevation), brand (logo/key/voice).

**`components/`** — reusable React primitives (namespace `window.StickwareDesignSystem_631351`):
- `core/` — **Button, IconButton, Badge, Tag, Card, Avatar**
- `forms/` — **Input, Select, Checkbox, Switch**
- `navigation/` — **Tabs**
- Each has `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, with one `*.card.html` per directory.

**`ui_kits/`**
- `web-app/` — the Stickware workspace (Matters, Document review, Assistant). See its `README.md`.
- `marketing/` — the marketing site (hero, features, the Key, pricing). See its `README.md`.

**Starting points** — `Button`, `Card`, `Input` (components); add more via the `@startingPoint` tag.

> **Fonts note.** Bitter, Public Sans, and IBM Plex Mono are **self-hosted** from `assets/fonts/` — the same latin subsets the HQ site and the sticklab dashboard ship (`@fontsource-variable/bitter`, `@fontsource-variable/public-sans`, `@fontsource/ibm-plex-mono` at 400/500/600). Bitter and Public Sans are variable builds, one file each across weights 100–900; IBM Plex Mono has no variable build, so its three weights load individually. Family names follow @fontsource's — `'Bitter Variable'`, `'Public Sans Variable'` — and the stacks in `typography.css` list the plain names next, so an installed or CDN copy still resolves.
>
> The `@font-face` paths are relative to `tokens/fonts.css`, so **copying `tokens/` without `assets/fonts/` silently breaks the faces.** For a throwaway prototype, a single-file mock, or an Artifact (whose CSP allows Google Fonts and nothing else), swap the fonts line in `styles.css` to `@import url('./tokens/fonts-cdn.css')` instead.
