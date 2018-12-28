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
                type: 'Fire',
                imageUrl: "..\\assets\\imgs\\fire.png",
                bgUrl: '../assets/imgs/fireCard.jpg',
                description: 'Smell the scent of ashes',
                class: 'fireTypeWidget',
                color: 'R'
            },
            {
                type: 'Water',
                imageUrl: '..\\assets\\imgs\\water.png',
                bgUrl: '../assets/imgs/waterCard.jpg',
                description: 'A river cuts through rock not because of its power but because of its persistence',
                class: 'waterTypeWidget',
                color: 'U'
            },
            {
                type: 'Light',
                imageUrl: '..\\assets\\imgs\\light.png',
                bgUrl: '../assets/imgs/lightCard.jpg',
                description: 'A river cuts through rock not because of its power but because of its persistence',
                class: 'lightTypeWidget',
                color: 'W'
            },
            {
                type: 'Dark',
                imageUrl: '..\\assets\\imgs\\dark.png',
                bgUrl: '../assets/imgs/darkCard.jpg',
                description: 'A river cuts through rock not because of its power but because of its persistence',
                class: 'darkTypeWidget',
                color: 'B'
            },
            {
                type: 'Wood',
                imageUrl: '..\\assets\\imgs\\wood.png',
                bgUrl: '../assets/imgs/wood.jpg',
                description: 'A river cuts through rock not because of its power but because of its persistence',
                class: 'woodTypeWidget',
                color: 'G'
            }
        ];
        return this.types;
    }
}   
