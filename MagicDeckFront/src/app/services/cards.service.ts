import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
@Injectable()
export class CardsService {
    constructor(private http: HttpClient) { }
    private baseUrl = 'http://localhost:3000';

    getCardsByColor(color: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/cards/${color}`);
    }
    getAllCards(): Observable<any> {
      return this.http.get(`${this.baseUrl}/cards`);
    }
}
