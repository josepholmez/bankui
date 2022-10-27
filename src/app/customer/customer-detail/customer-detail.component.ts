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
  customer: Customer;
  cusId: number;

  constructor(
    private service: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.service.getItemById(parseInt(id)).subscribe((data) => {
        this.customer = data;
        this.cusId = data.id;
        console.log('Customer: ', data);
      });
    }
  }

  onDeleteCustomer(): void {
    this.service
      .deleteCustomer(this.cusId)
      .subscribe(() => console.log('Deleted customer: ', this.customer));

    alert('Deleted!');
    this.router.navigateByUrl('/cus-all-page');
  }
}
