import { Observable } from 'rxjs';
import { User } from '../model/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiServer;
  oCurUser: Observable<User>;

  constructor(private http: HttpClient) {}

  //POST
  async loginUser(user: User): Promise<Observable<User>> {
    let url = `${this.baseUrl}/user/login`;
    this.oCurUser = this.http.post<User>(url, user);
    return this.oCurUser;
  }

  //GET
  async getCurrentUserById(id: number) {
    let url = `${this.baseUrl}/user/find/${id}`;
    return this.http.get<User>(url);
  }

  ///////
  getCurrentUser(): User {
    let user = new User();
    if (this.oCurUser != null) {
      this.oCurUser.subscribe((res) => {
        user = res;
      });
    }
    return user;
  }
}
