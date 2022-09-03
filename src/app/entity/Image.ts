export class Image {
    id: number;
    name: String;
    type: String;
    image: any;
    constructor(id: number, name: String, type: String, image: any) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.image = image;
    }
}