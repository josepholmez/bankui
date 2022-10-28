import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Account } from '../../model/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css'],
})
export class AccountUpdateComponent implements OnInit {
  account = new Account();

  constructor(
    private service: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      let oAccount = await this.service.getAccountById(parseInt(id));
      oAccount.subscribe((result) => (this.account = result));
    }
  }

  async onUpdateAccountSubmit(updatedAccount: Account) {
    let oAccount = await this.service.updateAccount(updatedAccount);
    oAccount.subscribe((result) => {
      console.log('Updated account: ', result);
    });

    this.service.gotoAccountListPage(this.router);
  }
}
