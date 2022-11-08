import { UserService } from './../../user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
})
export class AccountDetailComponent implements OnInit {
  account: any;
  curUserId: any;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    if (this.userService.isLogged()) {
      this.curUserId = this.userService.getCurrentUser();
      console.log('***Current user id:', this.curUserId);
      this.getAccount();
    }
  }

  async getAccount() {
    let accountId = this.route.snapshot.paramMap.get('id');
    console.log('***Account id:', accountId);
    (await this.accountService.getAccountById(accountId)).subscribe(
      (resData) => {
        this.account = resData;
      }
    );
  }

  async onDeleteAccount(id: any) {
    (await this.accountService.deleteAccount(id)).subscribe(() =>
      console.log('Deleted account: ', id)
    );
    this.router.navigateByUrl(`/acc-all-page/${this.curUserId}`);
  }
}
