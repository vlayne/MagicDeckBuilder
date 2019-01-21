import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TypesService {
    types: any;
    constructor() {
    }

    getElementsType() {
        this.types = [
            {
                name: 'Mountain',
                bgUrl: '../assets/imgs/rouge.png',
                class: 'fireTypeWidget',
                color: 'R'
            },
            {
                name: 'Island',
                bgUrl: '../assets/imgs/bleu.png',
                class: 'waterTypeWidget',
                color: 'U'
            },
            {
                name: 'Lowland',
                bgUrl: '../assets/imgs/blanc.png',
                class: 'lightTypeWidget',
                color: 'W'
            },
            {
                name: 'Swamp',
                bgUrl: '../assets/imgs/noir.png',
                class: 'darkTypeWidget',
                color: 'B'
            },
            {
                name: 'Forest',
                bgUrl: '../assets/imgs/vert.png',
                class: 'woodTypeWidget',
                color: 'G'
            }
        ];
        return this.types;
    }
}   
