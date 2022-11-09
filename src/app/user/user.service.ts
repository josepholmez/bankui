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

  //Current user
  getCurrentUserId(): any {
    if (this.isLogged()) {
      console.log('***logged user!!');
      return sessionStorage.getItem(environment.currentUserKey);
    }
  }

  isLogged() {
    return sessionStorage.getItem(environment.currentUserKey) != null;
  }

  setCurrentUser(curUserId: any) {
    sessionStorage.setItem(environment.currentUserKey, curUserId);
  }
}
