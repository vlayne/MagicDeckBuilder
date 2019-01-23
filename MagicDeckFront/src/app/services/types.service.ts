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
                name: 'Montagne',
                bgUrl: '../assets/imgs/rouge.png',
                class: 'fireTypeWidget',
                color: 'R'
            },
            {
                name: 'Île',
                bgUrl: '../assets/imgs/bleu.png',
                class: 'waterTypeWidget',
                color: 'U'
            },
            {
                name: 'Plaine',
                bgUrl: '../assets/imgs/blanc.png',
                class: 'lightTypeWidget',
                color: 'W'
            },
            {
                name: 'Marais',
                bgUrl: '../assets/imgs/noir.png',
                class: 'darkTypeWidget',
                color: 'B'
            },
            {
                name: 'Forêt',
                bgUrl: '../assets/imgs/vert.png',
                class: 'woodTypeWidget',
                color: 'G'
            }
        ];
        return this.types;
    }
}
