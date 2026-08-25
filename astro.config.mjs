// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// The Stickware company site: one static page, deployed to GitHub Pages at
// stickware.ai. The look is the Stickware design system, vendored under
// src/vendor/design-system/ (mirrored from the sibling repo by `pnpm sync:ds`)
// — src/styles/tokens.css imports its token files and the pages import its
// brand marks. Fonts come from the same @fontsource packages the design system
// self-hosts, so this site ships the same subsets as the HQ docs site.
export default defineConfig({
  site: 'https://stickware.ai',
  trailingSlash: 'ignore',
  integrations: [
    sitemap(),
    // Lucide only, inlined at build time — no icon CDN, no runtime JS.
    icon({ include: { lucide: ['*'] } }),
  ],
  build: {
    // GitHub Pages serves /foo/ from /foo/index.html; the default already
    // matches, this just makes the contract explicit.
    format: 'directory',
  },
  vite: {
    build: {
      // Keep SVGs as files. Vite inlines small assets as base64 data URIs by
      // default, which would drop the whole favicon into every page's <head>.
      assetsInlineLimit: (file) => (file.endsWith('.svg') ? false : undefined),
    },
  },
});
