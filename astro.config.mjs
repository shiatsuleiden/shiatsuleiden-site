import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// The original site (hand-made 2000s table layout, Photoshop ImageReady slices)
// has NO <!DOCTYPE>, so browsers render it in "quirks mode". The layout depends
// on that (image slices without gaps, height="100%" tables). Astro always adds
// <!DOCTYPE html>, so we strip it again after the build.
const keepQuirksMode = {
  name: 'keep-quirks-mode',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const out = fileURLToPath(dir);
      for (const f of fs.readdirSync(out)) {
        if (!f.endsWith('.html')) continue;
        const p = path.join(out, f);
        fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace(/^<!DOCTYPE html>\s*/i, ''));
      }
    },
  },
};

// Old addresses are /behandeling.html etc. build.format 'file' keeps exactly those.
export default defineConfig({
  site: 'https://shiatsuleiden.nl',
  build: { format: 'file' },
  compressHTML: false,
  integrations: [keepQuirksMode],
});
