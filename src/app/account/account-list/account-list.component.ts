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

  constructor(private service: AccountService) {}

  async ngOnInit() {
    this.getAccountList();
  }

  async getAccountList() {
    (await this.service.getAccountList()).subscribe((result) => {
      this.accounts = result;
    });
  }
}
