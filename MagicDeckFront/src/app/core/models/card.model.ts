export class CardModel {
    id: number;
    name: string;
    description: string;
    mana_cost: string;
    color: string;
    type: string;
    rarity: string;
    extension: string;
    imageUrl: string;

    constructor (data: any) {
        if (data) {
            this.name = data.name;
            this.mana_cost = data.mana_cost;
            this.color = data.color;
            this.rarity = data.rarity;
            this.extension = data.extension;
            this.type = data.type;
            this.imageUrl = data.imageUrl;
            this.description = data.description;
        }
    }
}