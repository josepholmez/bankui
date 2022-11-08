import { UserService } from './../user/user.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Account } from '../model/account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiServer;
  curUserAccounts: Account[] = [];

  constructor(private http: HttpClient, private userService: UserService) {}

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
  async updateAccount(updatedAccount: Account) {
    let url = `${this.baseUrl}/account/update/${updatedAccount.id}`;
    return this.http.put<Account>(url, updatedAccount);
  }

  // GET
  async getAccountById(id: any) {
    let url = `${this.baseUrl}/account/find/${id}`;
    return this.http.get(url);
  }

  //GET
  async getAccountsByUserId(userId: any) {
    let url = `${this.baseUrl}/account/user/${userId}`;
    console.log('Cur user accounts url:', url);
    return this.http.get(url);
  }
}
