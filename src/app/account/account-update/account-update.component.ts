import { Customer } from './../../model/customer';
import { CustomerService } from './../../customer/customer-service';
import { NavigationService } from './../../navigation/navigation.service';
import { Account } from './../../model/account';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../user/user.service';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css'],
})
export class AccountUpdateComponent implements OnInit {
  curUserId: any;
  account = new Account();
  customer = new Customer();

  constructor(
    private accountService: AccountService,
    private userService: UserService,
    private route: ActivatedRoute,
    private navService: NavigationService,
    private cusService: CustomerService
  ) {}

  async ngOnInit() {
    this.curUserId = this.userService.getCurrentUserId();
    await this.getAccount();
    await this.getCustomer();
  }

  async getAccount() {
    let accountId = this.route.snapshot.paramMap.get('id');
    console.log('***Account id:', accountId);
    (await this.accountService.getAccountById(accountId)).subscribe(
      (resData) => {
        this.account = resData;
        console.log('***Account:', this.account);
      }
    );
  }

  async getCustomer() {
    (await this.cusService.getCustomerById(this.curUserId)).subscribe(
      (resData) => {
        this.customer = resData;
        console.log('---------Cur User customer:', this.customer);
      }
    );
  }

  async onUpdateAccountSubmit(updatedAccount: Account) {
    console.log('***Updated form value: ', updatedAccount);
    (await this.accountService.updateAccount(updatedAccount)).subscribe(
      (resData) => {
        console.log('Updated res data account: ', resData);
      }
    );
    await this.navService.goToAccountListPage();
  }
}
