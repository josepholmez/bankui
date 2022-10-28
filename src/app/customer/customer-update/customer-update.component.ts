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
  customer = new Customer();

  constructor(
    private service: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      let oCustomer = await this.service.getItemById(parseInt(id));
      oCustomer.subscribe((result) => (this.customer = result));
    }
  }

  async onUpdateCustomerSubmit(updatedCustomer: Customer) {
    let oCustomer = await this.service.updateCustomer(updatedCustomer);
    oCustomer.subscribe((result) => {
      console.log('Updated customer: ', result);
    });

    this.service.gotoCustomerListPage(this.router);
  }
}
