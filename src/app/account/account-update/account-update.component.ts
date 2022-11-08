import { Router } from '@angular/router';
import { UserService } from './../../user/user.service';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css'],
})
export class AccountUpdateComponent implements OnInit {
  account: any;
  curUserId: any;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private userService: UserService
  ) {}

  async ngOnInit() {
    if (this.userService.isLogged()) {
      console.log('***logged user!!');
      this.curUserId = this.userService.getCurrentUser();
      (await this.accountService.getAccountById(this.curUserId)).subscribe(
        (resData) => {
          this.account = resData;
        }
      );
    }
  }

  async onUpdateAccountSubmit(uAccount: any) {
    (await this.accountService.updateAccount(uAccount)).subscribe((resData) => {
      console.log('Updated account: ', resData);
    });
    this.router.navigateByUrl(`/acc-all-page/${this.curUserId}`);
  }
}
