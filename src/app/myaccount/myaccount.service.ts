import { User } from './../model/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyAccountService {
  baseUrl = environment.apiServer;

  constructor(private http: HttpClient) {}

  //POST
  async loginUser(user: User) {
    let url = `${this.baseUrl}/login`;
    console.log('login url: ', url);
    console.log('User in service: ', user);
    return this.http.post<User>(url, user);
  }
}
