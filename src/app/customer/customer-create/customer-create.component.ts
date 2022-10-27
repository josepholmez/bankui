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
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: string = '';

  constructor(private service: CustomerService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitNewCustomer(customerForm: NgForm) {
    this.service.createNewCustomer(customerForm.value).subscribe(() => {
      console.log('***New created item:', customerForm.value);
      customerForm.reset();
    });
    alert('Created!');
    this.router.navigateByUrl('/cus-all-page');
  }
}
