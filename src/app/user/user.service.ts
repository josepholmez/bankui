import { Router } from '@angular/router';
import { User } from '../model/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiServer;

  constructor(private http: HttpClient, private router: Router) {}

  async login(userCredential: any) {
    let url = `${this.baseUrl}/user/login`;
    return this.http.post(url, userCredential);
  }

  logout() {
    alert('Your session expired');
    localStorage.clear();
    this.router.navigateByUrl('/login-page');
  }

  //GET
  async getCurrentUserById(id: any) {
    let url = `${this.baseUrl}/user/find/${id}`;
    return this.http.get<User>(url);
  }

  ///////
  async getCurrentUser() {
    return localStorage.getItem('curUserId') || '';
  }

  isLogged() {
    return localStorage.getItem('curUserId') != null;
  }

  async setCurrentUser(curUserId: any) {
    localStorage.setItem('curUserId', curUserId);
  }
}
