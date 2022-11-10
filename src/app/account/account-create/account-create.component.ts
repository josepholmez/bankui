import { Customer } from './../../model/customer';
import { CustomerService } from './../../customer/customer-service';
import { Account } from './../../model/account';
import { NavigationService } from './../../navigation/navigation.service';
import { UserService } from './../../user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css'],
})
export class AccountCreateComponent implements OnInit {
  curUserId: any;
  account = new Account();
  customer = new Customer();

  constructor(
    private accountService: AccountService,
    private userService: UserService,
    private navService: NavigationService,
    private cusService: CustomerService
  ) {}

  async ngOnInit() {
    this.curUserId = this.userService.getCurrentUserId();
    this.getCustomer();
  }

  async onNewAccountSubmit(account: Account) {
    account.customer = this.customer;

    (await this.accountService.createNewAccount(account)).subscribe(
      (resData) => {
        this.account = resData;
        console.log('Response account:', resData);
      }
    );
    this.navService.goToAccountListPage();
  }

  async getCustomer() {
    (await this.cusService.getCustomerById(this.curUserId)).subscribe(
      (resData) => {
        this.customer = resData;
        console.log('Curuser customer:', this.customer);
      }
    );
  }
}
