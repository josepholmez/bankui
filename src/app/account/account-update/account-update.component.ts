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
  account = new Account();
  curUserId: any;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private navService: NavigationService
  ) {}

  async ngOnInit() {
    this.curUserId = this.userService.getCurrentUserId();
    this.getAccount();
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

  async onUpdateAccountSubmit(updatedAccount: Account) {
    console.log('update form value: ', updatedAccount);
    (await this.accountService.updateAccount(updatedAccount)).subscribe(
      (resData) => {
        console.log('Updated res data account: ', resData);
      }
    );
    await this.navService.goToAccountListPage();
  }
}
