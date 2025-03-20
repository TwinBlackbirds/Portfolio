export default class Section {
    content: string;
    picture: string | null;
    constructor(content: string, picture: string | null) {
        this.content = content;
        this.picture = picture;
    }
}