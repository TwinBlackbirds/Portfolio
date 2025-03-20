import Section from "@/app/blog/section";

export default class BlogProps {
    title: string;
    content: Array<Section>
    constructor
    (
        title: string,
        content: Array<Section>
    ) {
        this.title = title;
        this.content = content;
    }
}