import { Customer } from './../model/customer';
import { CustomerService } from './../customer-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
  customer = new Customer();

  constructor(private service: CustomerService, private router: Router) {}

  async ngOnInit() {}

  async onNewCustomerSubmit(customerForm: NgForm) {
    (await this.service.createNewCustomer(customerForm.value)).subscribe(() => {
      console.log('New created item:', customerForm.value);
      customerForm.reset();
    });

    this.service.gotoCustomerListPage(this.router);
  }
}
