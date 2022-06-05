export class Image {
    id: number;
    file: File;
    url: any;
    constructor(id: number, file: File, url: any) {
        this.id = id;
        this.file = file;
        this.url = url;
    }
}