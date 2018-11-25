export class CardsModel {
    type: string;
    imageUrl: string;
    description: string;

    constructor (data: any) {
        if (data) {
            this.type = data.type;
            this.imageUrl = data.imageUrl;
            this.description = data.description;
        }
    }
}
