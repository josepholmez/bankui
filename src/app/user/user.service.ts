import { User } from '../model/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiServer;

  constructor(private http: HttpClient) {}

  //POST
  async loginUser(user: User) {
    let url = `${this.baseUrl}/user/login`;
    console.log('login url: ', url);
    console.log('User in my account service: ', user);
    return this.http.post(url, user);
  }

  //POST
  async signupUser(user: User) {
    let url = `${this.baseUrl}/user/add`;
    console.log('New user:', user);
    return this.http.post<User>(url, user);
  }
}
