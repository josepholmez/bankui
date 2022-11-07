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
  curUser: User;

  constructor(
    private accountService: AccountService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    (await this.userService.getCurrentUser()).subscribe((res) => {
      this.curUser = res;
    });

    if (this.curUser != null) {
      let cusId = this.curUser.customerId;
      if (cusId != null) {
        console.log('Customer id:', cusId);
        this.getAccountList(cusId);
      }
    }
  }

  async getAccountList(id: number) {
    this.accounts = await this.accountService.getAccountsByCustomerId(id);
  }
}
