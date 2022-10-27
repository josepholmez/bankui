import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  baseUrl = environment.apiServer;

  constructor(private http: HttpClient) {}

  //GET
  getCustomerList(): Observable<Customer[]> {
    let url = `${this.baseUrl}/customer/all`;
    console.log('Customer List URL:', url);
    return this.http.get<Customer[]>(url);
  }

  //POST
  createNewCustomer(newCustomer: Customer): Observable<Customer> {
    let url = `${this.baseUrl}/customer/add`;
    console.log('New customer url:', url);
    return this.http.post<Customer>(url, newCustomer);
  }

  //DELETE
  deleteCustomer(id: number): Observable<void> {
    let url = `${this.baseUrl}/customer/delete/{id}`;
    console.log('Delete customer url:', url);
    return this.http.delete<void>(url);
  }

  //PUT
  updateCustomer(updatedCustomer: Customer): Observable<Customer> {
    let url = `${this.baseUrl}/customer/update/{updatedCustomer.id}`;
    return this.http.put<Customer>(url, updatedCustomer);
  }

  // EXTRA-GET
  getItemById(id: number): Observable<Customer> {
    let url = `${this.baseUrl}/customer/find/${id}`;
    return this.http.get<Customer>(url);
  }
}
