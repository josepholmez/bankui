import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiServer;

  constructor(private http: HttpClient) {}

  async ngOnInit() {}

  async login(credential: any) {
    let url = `${this.baseUrl}/customer/login`;
    console.log('***Cur user url:', url);
    console.log('***Cur credential:', credential);
    return this.http.post(url, credential);
  }

  async logout() {
    if (this.isLogged()) {
      alert('Your session expired');
      sessionStorage.clear();
      console.log('logged out!!');
    }
    //this.navService.goToHomePage();
  }

  getCurrentUserId(): any {
    if (this.isLogged()) {
      console.log('***logged user!!');
      return sessionStorage.getItem(environment.currentUserIdKey);
    }
  }

  isLogged() {
    return sessionStorage.getItem(environment.currentUserIdKey) != null;
  }

  setCurrentUserId(curUserId: any) {
    sessionStorage.setItem(environment.currentUserIdKey, curUserId);
  }

  isAdmin(): boolean {
    let admin = false;
    if (this.isLogged()) {
      let id = this.getCurrentUserId();
      let url = `${this.baseUrl}/customer/type/${id}`;
      this.http.get<boolean>(url).subscribe((resData) => {
        admin = resData;
        console.log('User type is REGULAR', admin);
      });
    }
    return admin;
  }
}
