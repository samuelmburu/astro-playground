import remarkToc from "remark-toc";
import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
/*
 * ALERT: File a bug as this is incorrect on the page
 * @see: https://docs.astro.build/en/recipes/modified-time/#recipe [step 2-3]
 */
import { default as remarkModifiedTime } from './plugin/remark-modified-time.mjs';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.samuelkimama.com',
  integrations: [
    preact(),
  ],
  // Applied to .md and .mdx files
  markdown: {
    remarkPlugins: [remarkToc, remarkModifiedTime],
    rehypePlugins: [rehypeAccessibleEmojis],
  },
});
