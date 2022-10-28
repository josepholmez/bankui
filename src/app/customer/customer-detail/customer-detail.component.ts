import { Customer } from './../model/customer';
import { CustomerService } from './../customer-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  customer = new Customer();

  constructor(
    private service: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      (await this.service.getItemById(parseInt(id))).subscribe((result) => {
        this.customer = result;
      });
    }
  }

  async onDeleteCustomer(id: number) {
    (await this.service.deleteCustomer(id)).subscribe(() =>
      console.log('Deleted customer: ', id)
    );

    this.service.gotoCustomerListPage(this.router);
  }
}
