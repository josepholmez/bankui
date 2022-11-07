import { Account } from './../../model/account';
import { AccountService } from './../../account/account.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  loggedinUserId: number;
  myaccounts: Account[] = [];

  constructor(
    private service: UserService,
    private router: Router,
    private accountService: AccountService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    let oCurUser = await this.service.getCurrentUser();
    if (oCurUser != null) {
      oCurUser.subscribe((res) => {
        let cusId = res.customerId;
        if (cusId != null) {
          this.loggedinUserId = cusId;
          console.log('in ngOnInit res user:', res);
          this.router.navigateByUrl(`/acc-all-page/${this.loggedinUserId}`);
        } else {
          console.log('Cur user is null');
          this.router.navigateByUrl('/login-page');
        }
      });
    } else {
      console.log('Cur user is null');
      this.router.navigateByUrl('/login-page');
    }
  }

  async onLogin(loginForm: NgForm) {
    console.log('***********:', loginForm.value);
    let us: User;
    (await this.service.loginUser(loginForm.value)).subscribe((res) => {
      us = res;
      console.log('-------Res data Id:', us.id);
      console.log('-------Res data user name:', us.username);
      console.log('-------Res data first name:', us.firstName);
      console.log('Login successfully!');

      this.loggedinUserId = us.id;
      console.log('---Logged user id: ', this.loggedinUserId);
      this.router.navigateByUrl(`/acc-all-page/${us.id}`);
    });
  }

  async getMyAccounts(customerId: number) {
    this.myaccounts = await this.accountService.getAccountsByCustomerId(
      customerId
    );
    console.log('My accounts:', this.myaccounts);
  }
}
