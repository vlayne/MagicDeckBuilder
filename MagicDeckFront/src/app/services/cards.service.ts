import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
@Injectable()
export class CardsService {
    constructor(private authHttp: HttpClient) { }

    getCardsTypes() {
      return  this.authHttp.get('https://api.magicthegathering.io/v1/types');
    }
    getAllCards(): Observable<any> {
      return this.authHttp.get<any>('https://api.magicthegathering.io/v1/cards?setName=ravnica');
    }
}
