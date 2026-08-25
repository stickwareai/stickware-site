# stickware.ai

The Stickware company site: one static page, built with [Astro](https://astro.build)
and deployed to GitHub Pages at **[stickware.ai](https://stickware.ai)**.

## Run it

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # → dist/
pnpm preview    # serve the build
pnpm check      # Astro + TypeScript diagnostics
```

TypeScript is pinned to 6.x: `astro check` uses a programmatic API that
TypeScript 7's native compiler doesn't expose yet.

## The design system

The look is the [Stickware design system](https://github.com/stickwareai/design-system).
The pieces this site uses — the token CSS and the brand marks — are **vendored**
under `src/vendor/design-system/` and committed, so a build needs nothing but this
repository. Mirror a newer version of the design system in with:

```sh
pnpm sync:ds                      # reads the sibling ../design-system checkout
pnpm sync:ds ~/path/to/design-system
```

`src/vendor/design-system/VENDORED.md` records which upstream commit the current
copy came from. **Never hand-edit anything under `src/vendor/`** — change it
upstream and re-run the sync.

Fonts are the deliberate exception: rather than vendoring the `.woff2` binaries,
the site installs the same `@fontsource` packages the design system self-hosts
(`bitter`, `public-sans`, `ibm-plex-mono`), so it ships identical subsets to the
HQ docs site. See `src/styles/tokens.css`.

## Layout

| Path | What's in it |
|---|---|
| `src/site.ts` | All the copy that isn't markup — nav, contact address, product blurbs |
| `src/pages/index.astro` | The page, section by section |
| `src/layouts/Base.astro` | Head, meta, the pre-paint theme bootstrap |
| `src/components/` | Header, footer, wordmark |
| `src/styles/tokens.css` | Fonts + the vendored design-system tokens. No rules of its own |
| `src/styles/site.css` | This site's layout and components. No hard-coded colours |
| `src/vendor/design-system/` | Mirrored from upstream — do not edit |
| `public/` | `CNAME`, `robots.txt`, `og.png`, `.nojekyll` |

Both colour themes are first-class. Light is the default; the header toggle sets
`<html data-theme="dark">` and stores the choice, and an inline script in
`Base.astro` applies it before first paint so there's no flash. A visitor with no
stored choice gets their OS preference.

Icons are [Lucide](https://lucide.dev) via `astro-icon`, inlined at build time —
no icon CDN and no runtime JavaScript beyond the theme toggle.

`public/og.png` is a rendered 1200×630 card (the Key device on ink, with the
tagline) built from the brand assets against the site's own tokens. Regenerate it
by hand if the brand or tagline changes.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages.
It is **manual only** — there is no push trigger, because a deploy replaces what
stickware.ai serves and that should be a decision, not a side effect of merging.

```sh
gh workflow run deploy.yml --ref main    # or the Actions tab → Run workflow
```

Two things must be true for a run to actually serve anything:

1. The repository's Pages source is set to **GitHub Actions** (Settings → Pages →
   Build and deployment → Source). On the older "Deploy from a branch" setting
   the workflow runs, builds, and publishes nothing.
2. It runs on `main` — the `github-pages` environment permits that branch only,
   so a dispatch from a feature branch stops at the deploy job.

The custom domain is held by `public/CNAME`.

## Writing copy

The design system's readme is the style guide, and it is vendored here at
`src/vendor/design-system/readme.md` — see "Content fundamentals". In short:
warm, plain, precise; sentence case; concrete nouns and numbers over marketing
adjectives; no hype and no emoji. This is a real company site, so it claims only
what is true — no invented customers, certifications, or prices.
