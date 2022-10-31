import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  baseUrl = environment.apiServer;

  constructor(private http: HttpClient) {}

  //GET
  async getCustomerList() {
    let url = `${this.baseUrl}/customer/all`;
    return this.http.get<Customer[]>(url);
  }

  //POST
  async createNewCustomer(newCustomer: Customer) {
    let url = `${this.baseUrl}/customer/add`;
    return this.http.post<Customer>(url, newCustomer);
  }

  //DELETE
  async deleteCustomer(id: number) {
    let url = `${this.baseUrl}/customer/delete/${id}`;
    return this.http.delete<void>(url);
  }

  //PUT
  async updateCustomer(updatedCustomer: Customer) {
    let url = `${this.baseUrl}/customer/update/${updatedCustomer.id}`;
    return this.http.put<Customer>(url, updatedCustomer);
  }

  // EXTRA-GET
  async getCustomerById(id: number) {
    let url = `${this.baseUrl}/customer/find/${id}`;
    return this.http.get<Customer>(url);
  }

  ///////////////
  async gotoCustomerListPage(router: Router) {
    this.refreshData();
    console.log('Customer data has been refreshed!');
    router.navigateByUrl('/cus-all-page');
    console.log('Navigated url:, customer list page');
  }
  refreshData() {
    this.getCustomerList();
  }
}
