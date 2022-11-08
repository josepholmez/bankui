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

  async logout() {
    if (this.isLogged()) {
      alert('Your session expired');
      sessionStorage.clear();
      console.log('logged out!!');
    }
    await this.router.navigateByUrl('/home-page');
  }

  //GET
  async getCurrentUserById(id: any) {
    let url = `${this.baseUrl}/user/find/${id}`;
    return this.http.get<User>(url);
  }

  ////////////////////////////////////////////////////////
  async getCurrentUser() {
    return sessionStorage.getItem('curUserId') || '';
  }

  isLogged() {
    return sessionStorage.getItem('curUserId') != null;
  }

  async setCurrentUser(curUserId: any) {
    sessionStorage.setItem('curUserId', curUserId);
    //localStorage.setItem('curUserId', curUserId);
  }
}
