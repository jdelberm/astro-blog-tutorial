import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(contenxt){
    return rss({
        title: "Astro Learner | Blog",
        description: "My journey learning Astro",
        site: contenxt.site,
        items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
        customData: `<language>en-us</language>`,
    })
}