import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    private baseUrl = 'http://localhost:3000';
    private currentUserSubject: BehaviorSubject<UserModel>;
    public currentUser: Observable<UserModel>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
     }

    public get currentUserValue(): UserModel {
        return this.currentUserSubject.value;
    }

    getAll() {
        return this.http.get<UserModel[]>(`${this.baseUrl}/user`);
    }

    getById(id: number) {
        return this.http.get(`${this.baseUrl}/user/${id}`);
    }

    register(user: UserModel) {
        return this.http.post(`${this.baseUrl}/user/sign-up`, user , {withCredentials: true});
    }
    login(username: string, password: string) {
        return this.http.post<any>(`${this.baseUrl}/user/sign-in`, {username, password}, {withCredentials: true})
            .pipe(map(user => {
            // Si l'utilisateur reçoit un token la connexion réussie
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }

            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    update(user: UserModel) {
        return this.http.put(`${this.baseUrl}/user/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/user/${id}`);
    }
}