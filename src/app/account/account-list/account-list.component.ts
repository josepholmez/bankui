import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../user/user.service';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  accounts: any;
  curUserId: any;

  constructor(
    private accountService: AccountService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    if (this.userService.isLogged()) {
      this.curUserId = this.userService.getCurrentUser();
      console.log('***Current user id:', this.curUserId);
      this.getCurUserAccounts();
    }
  }

  async getCurUserAccounts() {
    (await this.accountService.getAccountsByUserId(this.curUserId)).subscribe(
      (resData) => {
        this.accounts = resData;
        console.log('Cur user res data:', resData);
        console.log('Cur user accounts:', this.accounts);
      }
    );
  }
}
