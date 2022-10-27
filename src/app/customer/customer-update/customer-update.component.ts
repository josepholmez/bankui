import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './../customer-service';
import { Customer } from './../model/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css'],
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;

  constructor(
    private service: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      let existingItem = this.service.getItemById(parseInt(id));
      existingItem.subscribe((data) => (this.customer = data));
    }
  }

  onUpdateCustomerSubmit(updatedCustomer: Customer) {
    this.service.updateCustomer(updatedCustomer).subscribe((data) => {
      console.log('updated customer: ', data);
    });
    this.router.navigateByUrl('/cus-all-page');
  }
}
