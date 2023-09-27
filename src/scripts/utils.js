
// async function getAllPosts() {
//     const allPosts = await Astro.glob('../posts/*.md');
//     return [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
// }

export function getAllUniqueTags(allPosts) {
    // const allPosts = await getAllPosts();
    return [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
}

