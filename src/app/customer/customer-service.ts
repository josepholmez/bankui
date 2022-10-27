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
  customers: Customer[] = [];

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
}
