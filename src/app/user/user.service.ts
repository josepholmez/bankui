import { User } from './../model/user';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiServer;

  constructor(private http: HttpClient) {}

  //POST
  async loginUser(user: User) {
    let url = `${this.baseUrl}/login`;
    console.log('login url: ', url);
    return this.http.post<User>(url, user);
  }
}
