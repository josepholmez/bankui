import { UserService } from './../../user/user.service';
import { Customer } from '../../model/customer';
import { CustomerService } from './../customer-service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
  curUserId: any;

  addCustomerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(
    private service: CustomerService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    if (this.userService.isLogged()) {
      console.log('Logged user!');
      this.curUserId = this.route.snapshot.paramMap.get('id');
    }
  }

  async onNewCustomerSubmit() {
    if (this.addCustomerForm.valid) {
      (
        await this.service.createNewCustomer(this.addCustomerForm.value)
      ).subscribe((res) => {
        console.log('response', res);
      });

      this.router.navigateByUrl(`/acc-all-page/${this.curUserId.id}`);
    }
  }
}
