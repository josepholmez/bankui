import { AccountType } from './../../model/accountType';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../model/account';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css'],
})
export class AccountCreateComponent implements OnInit {
  account = new Account();

  constructor(private service: AccountService, private router: Router) {
    this.account.accountType = AccountType.CHECKING_CAD;
  }

  async ngOnInit() {}

  async onNewAccountSubmit(accountForm: NgForm) {
    (await this.service.createNewAccount(accountForm.value)).subscribe(() => {
      console.log('New created account:', accountForm.value);
      accountForm.reset();
    });

    this.service.gotoAccountListPage(this.router);
  }
}
