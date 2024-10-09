export default class Champion  {
    constructor(data) {
        this.id = data.key;
        this.name = data.name;
        this.title = data.title;
        this.blurb = data.blurb;
        this.tags = data.tags;
        this.type = data.partype;
        this.stats = data.stats;
        this.image = data.image.full;
    }
}