import { Customer } from './../model/customer';
import { CustomerService } from './../customer-service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  // @Output() mySubmitEvent = new EventEmitter<Customer>();

  constructor(private service: CustomerService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitNewCustomer() {
    this.service
      .createNewCustomer()
      .subscribe(() => console.log('Created', this.firstName));

    alert('Created!!');

    this.router.navigateByUrl('/cus-all-page');

    ////
    // this.mySubmitEvent.emit({
    //   id: '',
    //   name: this.name,
    //   description: this.description,
    //   price: Number(this.price),
    //   used: this.used,
    // });
  }
}
