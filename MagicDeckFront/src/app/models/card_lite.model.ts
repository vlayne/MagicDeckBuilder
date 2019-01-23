export class CardLiteModel {
    id: number;
    imageUrl: string;

    constructor (data?: any) {
        if (data) {
            this.id = data.id;
            this.imageUrl = data.imageUrl;
        }
    }
}