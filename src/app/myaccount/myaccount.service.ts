import { User } from '../model/user';
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
  async loginUser(username: string, password: string) {
    let url = `${this.baseUrl}/api/login`;
    console.log('login url: ', url);
    console.log('username: ', username);
    console.log('password: ', password);
    let list = { username, password };
    console.log('both:', list);
    return this.http.post<boolean>(url, list);
  }
}
