// import { dev, build, preview, sync, type AstroInlineConfig } from 'astro';
// import CMS from 'decap-cms-app';

// // Inline Astro config object.
// // Provide a path to a configuration file to load or set options directly inline.
// const inlineConfig: AstroInlineConfig = {
//     // Inline-specific options...
//     configFile: './astro.config.mjs',
//     logLevel: 'info',
//     // Standard Astro config options...
//     site: 'https://example.com',
//      integrations: [
//         // preact(),
//         CMS({
//              // Use Netlify’s “Git Gateway” authentication and target our default branch
//             backend: {
//                 name: 'test-repo',
//                 // branch: 'add-decap',
//             },
//             // // Configure where our media assets are stored & served from
//             // media_folder: 'public/assets/blog',
//             // public_folder: '/assets/blog',
//             // Configure the content collections
//             // collections: [
//             //     {
//             //         name: 'posts',
//             //         label: 'Posts',
//             //         label_singular: 'Post',
//             //         folder: 'src/pages/posts',
//             //         create: true,
//             //         delete: true,
//             //         fields:{},
//             //     },
//             // ],
//         }),
//      ]
// };

// // Start the Astro dev server
// const devServer = await dev(inlineConfig);
// await devServer.stop();

// // Build your Astro project
// await build(inlineConfig);

// // Preview your built project
// const previewServer = await preview(inlineConfig);
// await previewServer.stop();

// // Generate types for your Astro project
// await sync(inlineConfig);

import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
// import DecapCmsApp from 'decap-cms-app';
// import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.samuelkimama.com',
    integrations: [
        preact(),
        // DecapCmsApp({
        //     // Use Netlify’s “Git Gateway” authentication and target our default branch
        //     backend: {
        //         name: 'git-gateway',
        //         branch: 'latest',
        //     },
        //     // Configure where our media assets are stored & served from
        //     media_folder: 'public/assets/blog',
        //     public_folder: '/assets/blog',
        //     // Configure the content collections
        //     collections: [
        //         {
        //             name: 'posts',
        //             label: 'Posts',
        //             label_singular: 'Post',
        //             folder: 'src/pages/posts',
        //             create: true,
        //             delete: true,
        //             fields: [
        //                 {
        //                     name: 'title',
        //                     widget: 'string',
        //                     label: 'Post Title',
        //                 },
        //                 {
        //                     name: 'publishDate',
        //                     widget: 'datetime',
        //                     format: 'DD MMM YYYY',
        //                     date_format: 'DD MMM YYYY',
        //                     time_format: false,
        //                     label: 'Publish Date',
        //                 },
        //                 {
        //                     name: 'author',
        //                     widget: 'string',
        //                     label: 'Author Name',
        //                 },
        //                 {
        //                     name: 'authorURL',
        //                     widget: 'string',
        //                     label: 'Author URL',
        //                 },
        //                 {
        //                     name: 'description',
        //                     widget: 'string',
        //                     label: 'Post Description',
        //                 },
        //                 {
        //                     name: 'body',
        //                     widget: 'markdown',
        //                     label: 'Post Body',
        //                 },
        //                 {
        //                     name: 'heroImage',
        //                     widget: 'image',
        //                     label: 'Hero Image',
        //                     required: false,
        //                 },
        //                 {
        //                     name: 'alt',
        //                     widget: 'string',
        //                     label: 'Hero Image Alt Text',
        //                     required: false,
        //                 },
        //                 // This is hidden here assuming a non-technical user will not need to
        //                 // see or edit the `setup` front matter. You could also use a `code`
        //                 // widget if you wanted direct access to editing the `setup` for each post.
        //                 // {
        //                 //   name: 'setup',
        //                 //   widget: 'hidden',
        //                 //   default: `import Layout from '../../layouts/BlogPost.astro';
        //                 // ${FrontMatterSetup}`,
        //                 // },
        //             ],
        //         },
        //     ],
        // }),
    ],
    // Applied to .md and .mdx files
    // remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeAccessibleEmojis],
});
