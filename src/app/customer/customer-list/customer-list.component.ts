import { Customer } from './../model/customer';
import { CustomerService } from './../customer-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private service: CustomerService) {}

  ngOnInit(): void {
    this.service.getCustomerList().subscribe((data) => (this.customers = data));
  }
}
