export class DeckModel {
    id: number;
    id_user: number;
    id_deck_variant: number;
    name: string;
    description: string;
    note: string;

    constructor (data?: any) {
        if (data) {
            this.id_user = data.id_user;
            this.id = data.id;
            this.id_deck_variant = data.id_deck_variant;
            this.name = data.name;
            this.description = data.description;
            this.note = data.note;
        }
    }
}