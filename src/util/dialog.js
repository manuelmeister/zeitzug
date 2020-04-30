import marked from "marked";
import {parseLink} from "@/plugins/helpers";

export function markdown2html(input) {
    if (input) {
        input = input.replace(/\[([^\]]*)\]\(([^)]*)\)/g, parseLink)
        return marked(input);
    }
    return ''
}

export function paragraph(paragraph) {
    let content = markdown2html(paragraph.text)
    if (content.match(/^<p>(.*)<\/p>$/gm)) {
        return content.matchAll(/^<p>(.*)<\/p>$/gm).next().value[1]
    }
    return content
}
