import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { RenderPlugin } from "@11ty/eleventy";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
        // Order matters, put this at the top of your configuration file.
        // This is relative to your input directory!
    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPlugin(RenderPlugin);

    eleventyConfig.addCollection("pages", function(collection) {
        const coll = collection.getFilteredByTag("pages");
        for(let i = 0; i < coll.length ; i++) {
            const prevPost = coll[i-1];
            const nextPost = coll[i + 1];

            coll[i].data["prevPost"] = prevPost;
            coll[i].data["nextPost"] = nextPost;
        }
        return coll;
    });

    eleventyConfig.addFilter("postsAscending", (collection) => {
        return collection.sort((a,b) => {
            // console.log(a.data.page.inputPath)
            if (a.data.page.inputPath > b.data.page.inputPath) return 1;
            else if (a.data.page.inputPath < b.data.page.inputPath) return -1;
            else return 0;
        })
    });
    
    eleventyConfig.addPassthroughCopy("./src/_css");
    eleventyConfig.addPassthroughCopy("./src/_assets");
    eleventyConfig.addPassthroughCopy("./src/_fonts");

    eleventyConfig.addShortcode("video", (yt_id, width=640, height=480, align="left") => {
        return `<p class="lti-embed" style="text-align: ${align}; margin-top:40px; margin-bottom:0px"><strong>
        <iframe class="lti-embed" style="width:${width}px; height:${height}px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen frameborder="0" height="auto"
                src="https://www.youtube-nocookie.com/embed/${yt_id}">
            </iframe></strong></p>`
    });

    eleventyConfig.addPairedShortcode("content", (content) => {
        return `<div class="deltionv2-content-section">${content}</div>`;
    });

    eleventyConfig.addShortcode("banner", (mytitle, link) => {
        return `<section class="deltionv2-banner">
                    <div class="deltionv2-content">
                        <div class="deltionv2-content-header">
                            <h2>${mytitle}</h2>
                            <a href="${link}">Aan de slag</a>
                        </div>
                    </div>
                </section>`;
    });

    eleventyConfig.addPairedShortcode("navigatie", (content, title) => {
        return `<section class="deltionv2-addbanner">
                    <div class="deltionv2-addcontent">
                        <div class="deltionv2-addcontent-header">
                            <h2>${title}</h2>
                        </div>
                        <div class="deltionv2-addcontent-header">${content}</div>
                    </div>
                </section>`;
    });

    eleventyConfig.addShortcode("navigatie_link", (link, text) => {
        return `<a href="${link}">${text}</a>`;
    });

    eleventyConfig.addPairedShortcode("section", (content) => {
        return `<section class="deltionv2-textarea">
                    <div class="deltionv2-text">${content}</div>
                </section>`;
    });

    eleventyConfig.addPairedShortcode("text", (text) => {
        return `<div class="deltionv2-addintrotext">${text}</div>`;
    });

    eleventyConfig.addPairedShortcode("text2", (text) => {
        return `<section class="deltionv2-textarea">${text}</section>`;
    });

    eleventyConfig.addPairedShortcode("code", (text) => {
        return `<div style="background-color: #fff; padding: 0px; ">${text}</div>`;
    });

    eleventyConfig.addShortcode("afbeelding", (afbeelding, width=100, height=100, align="left") => {
        return `<div class="deltionv2-addcontentarea" style="text-align:${align}; padding:40px;"><img src="/_assets/${afbeelding}" alt="${afbeelding}" style="min-width:${width}%; width: ${width}%; height: ${height}%; object-fit: cover;" /></div>`
    });

    eleventyConfig.addPairedShortcode("section_accordeon", (content, titel) => {
        return `<section class="deltionv2-accordeon"><h3>${titel}</h3>${content}</section>`
    });
    
    // Easy Canvas style
    // eleventyConfig.addPairedShortcode("accordeon", (content, titel) => {
    //     return `<div class="deltionv2-accordion-whole">
    //                 <details><summary><a>${titel}</a></summary><p>&nbsp;</p>${content}</details>
    //             </div>`
    // });

    // Deltion style
    eleventyConfig.addPairedShortcode("accordeon", (content, titel) => {
        return `<div class="deltionv2-accordion-whole"><div class="deltionv2-accordion"><div class="deltionv2-arrow-container"><img src="https://leeromgeving.deltion.nl/courses/4128/files/109205/preview" alt="PijlOnder-1.svg" data-api-endpoint="https://leeromgeving.deltion.nl/api/v1/courses/4128/files/109205" data-api-returntype="File" /></div><a>${titel}</a></div><div class="deltionv2-accordion-panel">${content}</div></div>`
    });

    eleventyConfig.addPairedShortcode("button_collection", (content) => {
        return `
        <section class="deltionv2-buttoncollection">${content}</section>`;
    });

    eleventyConfig.addShortcode("button", (link, text) => {
        return `<div class="deltionv2-navigationbutton"><a href="${link}"><img src="{{ '/_assets/arrow-right-o.svg' | htmlBaseUrl }}" alt="Arrow" />${text}<br /></a></div>`;
    });

    return {
        pathPrefix: "/easy_canvas/",
        // pathPrefix: "/",
        dir: {
            input: "src",
            output: "docs",
        },
    };
}