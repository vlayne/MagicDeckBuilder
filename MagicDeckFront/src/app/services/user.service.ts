import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    baseUrl = 'http://localhost:3000';
    constructor(private httpClient: HttpClient){
    }
    createUser(data) {
      return  this.httpClient.post(`${this.baseUrl}/create-user`, data)
          .subscribe(
            res => {
              console.log('utilisateur créé ? : ', res);
            
            },
            err => {
              console.log('Error occured:' , err);
            }
          );
      }
}   
