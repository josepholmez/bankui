import { Account } from './../../model/account';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../user/user.service';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  curUserId: any;

  constructor(
    private accountService: AccountService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.curUserId = this.userService.getCurrentUserId();
    this.getCurUserAccounts();
  }

  async getCurUserAccounts() {
    (await this.accountService.getAccountsByUserId(this.curUserId)).subscribe(
      (resData) => {
        this.accounts = resData;
        console.log('User accounts res data:', resData);
        console.log('User accounts[0] customer:', resData[0].customer);
        console.log('User accounts[1] customer:', resData[1].customer);
      }
    );
  }
}
