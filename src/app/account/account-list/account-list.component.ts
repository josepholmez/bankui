import { Customer } from './../../model/customer';
import { User } from './../../model/user';
import { UserService } from './../../user/user.service';
import { AccountService } from './../account.service';
import { Account } from '../../model/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  customerId: number;

  constructor(
    private accountService: AccountService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    let curUser = await this.userService.getCurrentUser();
    if (curUser != null) {
      let cusId = curUser.customerId;
      if (cusId != null) {
        this.customerId = cusId;
        this.getAccountList(this.customerId);
      }
    }
  }

  async getAccountList(id: number) {
    this.accounts = await this.accountService.getAccountsByCustomerId(id);
  }
}
