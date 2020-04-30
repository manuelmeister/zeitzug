import marked from "marked";
import {parseLink} from "@/plugins/helpers";

export function markdown2html(input) {
    if (input) {
        input = input.replace(/\[([^\]]*)\]\(([^)]*)\)/g, parseLink)
        let markdown = marked(input);
        if (markdown.match(/^<p>(.*)<\/p>$/gm)) {
            return markdown.matchAll(/^<p>(.*)<\/p>$/gm).next().value[1]
        }
        return markdown
    }
    return ''
}

export function paragraph(paragraph) {
    return markdown2html(paragraph.text)
}
