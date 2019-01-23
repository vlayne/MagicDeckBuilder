import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DeckService {
    constructor(private http: HttpClient) { }
    private baseUrl = 'http://localhost:3000';

    createDeck(deck, id: number) {
      return this.http.post(`${this.baseUrl}/deck/create/${id}`, deck);
    }
}
