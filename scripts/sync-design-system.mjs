/**
 * Vendor the Stickware design system into src/vendor/design-system/.
 *
 * The design system lives in its own (private) repo. This site is public and
 * deploys from a plain `astro build`, so it carries a committed copy of the
 * bits it actually uses — the token CSS and the brand marks — rather than
 * pulling the repo in as a submodule at build time.
 *
 *   pnpm sync:ds                      # reads ../design-system
 *   pnpm sync:ds ~/src/design-system  # or an explicit path
 *
 * The copy is a one-way mirror: never hand-edit src/vendor/design-system/,
 * change it upstream and re-run this. VENDORED.md records which upstream
 * commit the current copy came from.
 */
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(root, process.argv[2] ?? '../design-system');
const dest = resolve(root, 'src/vendor/design-system');

// Only what the site consumes. Deliberately NOT vendored: the React
// components, UI kits, and guideline cards (this site writes its own markup),
// and tokens/fonts.css + assets/fonts/ (the fonts come from the same
// @fontsource packages upstream self-hosts — see src/styles/tokens.css).
const FILES = [
  'tokens/colors.css',
  'tokens/typography.css',
  'tokens/spacing.css',
  'tokens/elevation.css',
  // Only the marks the site actually renders. The wordmark is drawn in
  // currentColor, so the light-on-ink variant isn't needed; add a line here if
  // a page starts using logo-mark.svg or another asset.
  'assets/logo-wordmark.svg',
  'assets/key-device.svg',
  'assets/favicon.svg',
  'readme.md',
];

if (!existsSync(resolve(src, 'tokens/colors.css'))) {
  console.error(`Not a design-system checkout: ${src}`);
  console.error('Pass the path explicitly: pnpm sync:ds <path-to-design-system>');
  process.exit(1);
}

let stamp = 'unknown (source is not a git checkout)';
try {
  const rev = execFileSync('git', ['-C', src, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  const subject = execFileSync('git', ['-C', src, 'log', '-1', '--format=%s'], { encoding: 'utf8' }).trim();
  const dirty = execFileSync('git', ['-C', src, 'status', '--porcelain'], { encoding: 'utf8' }).trim();
  stamp = `${rev}${dirty ? ' (+ uncommitted changes)' : ''} — ${subject}`;
} catch {
  /* keep the fallback */
}

await rm(dest, { recursive: true, force: true });
for (const file of FILES) {
  await mkdir(dirname(resolve(dest, file)), { recursive: true });
  await cp(resolve(src, file), resolve(dest, file));
}

await writeFile(
  resolve(dest, 'VENDORED.md'),
  [
    '# Vendored — do not edit',
    '',
    'A one-way mirror of the Stickware design system, copied by',
    '`scripts/sync-design-system.mjs`. Edit the design system upstream and',
    're-run `pnpm sync:ds`; changes made here are overwritten.',
    '',
    `- **Source:** \`${'https://github.com/stickwareai/design-system'}\``,
    `- **Commit:** ${stamp}`,
    '',
    'Only the token CSS and brand marks are mirrored. Fonts come from the',
    '`@fontsource` packages upstream self-hosts (see `src/styles/tokens.css`).',
    '',
  ].join('\n'),
);

console.log(`Vendored ${FILES.length} files from ${src}`);
console.log(`  commit: ${stamp}`);
