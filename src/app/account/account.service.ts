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

  constructor(private http: HttpClient) {}

  //GET
  async getAccountList() {
    let url = `${this.baseUrl}/account/all`;
    return this.http.get<Account[]>(url);
  }

  //POST
  async createNewAccount(newAccount: Account) {
    let url = `${this.baseUrl}/account/add`;
    return this.http.post<Account>(url, newAccount);
  }

  //DELETE
  async deleteAccount(id: number) {
    let url = `${this.baseUrl}/account/delete/${id}`;
    return this.http.delete<void>(url);
  }

  //PUT
  async updateAccount(updatedAccount: Account) {
    let url = `${this.baseUrl}/account/update/${updatedAccount.id}`;
    return this.http.put<Account>(url, updatedAccount);
  }

  // EXTRA-GET
  async getAccountById(id: number) {
    let url = `${this.baseUrl}/account/find/${id}`;
    return this.http.get<Account>(url);
  }

  ////////////////
  gotoAccountListPage(router: Router) {
    this.refreshData();
    console.log('Account data has been refreshed!');
    router.navigateByUrl('/acc-all-page');
    console.log('Navigated url:, account list page');
  }
  refreshData() {
    this.getAccountList();
  }
}