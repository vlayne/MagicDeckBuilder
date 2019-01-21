import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../core/models/user.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    baseUrl = 'http://localhost:3000';
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
     }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    getAll() {
        return this.http.get<User[]>(`${this.baseUrl}/user`);
    }

    getById(id: number) {
        return this.http.get(`${this.baseUrl}/user/${id}`);
    }

    register(user: User) {
        return this.http.post(`${this.baseUrl}/user/sign-up`, user , {withCredentials: true});
    }
    login(username: string, password: string) {
        return this.http.post<any>(`${this.baseUrl}/user/sign-in`, {username, password}, {withCredentials: true});
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    update(user: User) {
        return this.http.put(`${this.baseUrl}/user/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/user/${id}`);
    }
}