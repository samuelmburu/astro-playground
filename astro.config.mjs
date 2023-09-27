import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
// import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [preact()],
    // Applied to .md and .mdx files
    // remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeAccessibleEmojis],
});