import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forEach } from 'lodash/forEach';
@Injectable()
export class TypesService {
    types: any;
    constructor() {
    }

    getElementsType() {
        this.types = [
            {
                type: 'Fire',
                imageUrl: "../assets/imgs/fireCard.jpg",
                description: 'Smell the scent of ashes',
                class: 'fireTypeWidget',
                color: 'R'
            },
            {
                type: 'Water',
                imageUrl: '..\\assets\\imgs\\WaterCard.jpg',
                description: 'A river cuts through rock not because of its power but because of its persistence',
                class: 'waterTypeWidget',
                color: 'U'
            },
            {
                type: 'Light',
                imageUrl: '..\\assets\\imgs\\LightCard.jpg',
                description: 'A river cuts through rock not because of its power but because of its persistence',
                class: 'lightTypeWidget',
                color: 'W'
            },
            {
                type: 'Dark',
                imageUrl: '..\\assets\\imgs\\darkCard.jpg',
                description: 'A river cuts through rock not because of its power but because of its persistence',
                class: 'darkTypeWidget',
                color: 'B'
            },
            {
                type: 'Wood',
                imageUrl: '..\\assets\\imgs\\wood.png',
                description: 'A river cuts through rock not because of its power but because of its persistence',
                class: 'woodTypeWidget',
                color: 'G'
            }
        ];
    }
}
