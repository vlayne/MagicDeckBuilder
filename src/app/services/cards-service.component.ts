import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CardsService {
    constructor(private authHttp: HttpClient) { }

    getCardsTypes() {
      return  this.authHttp.get('https://api.magicthegathering.io/v1/types');
    }
}
