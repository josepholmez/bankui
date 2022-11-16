import { UserService } from './../user/user.service';
import { environment } from './../../environments/environment';
import { Account } from '../model/account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiServer;

  constructor(private http: HttpClient) {}

  //GET
  async getAccountList() {
    let url = `${this.baseUrl}/account/all`;
    return this.http.get<Account[]>(url);
  }

  //POST
  async createNewAccount(newAccount: any) {
    let url = `${this.baseUrl}/account/add`;
    return this.http.post<Account>(url, newAccount);
  }

  //DELETE
  async deleteAccount(id: any) {
    let url = `${this.baseUrl}/account/delete/${id}`;
    return this.http.delete(url);
  }

  //PUT
  async updateAccount(uAccount: Account) {
    console.log('Updated account id:', uAccount);
    let url = `${this.baseUrl}/account/update/${uAccount.id}`;
    console.log('Updated account url:', url);
    return this.http.put<any>(url, uAccount);
  }

  // GET
  async getAccountById(id: any) {
    let url = `${this.baseUrl}/account/find/${id}`;
    return this.http.get<Account>(url);
  }

  //GET
  async getAccountsByUserId(userId: any): Promise<Observable<Account[]>> {
    let url = `${this.baseUrl}/account/${userId}`;
    console.log('Cur user accounts url:', url);
    return this.http.get<Account[]>(url);
  }
}
