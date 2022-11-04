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
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      const oCurUser = await this.service.getCurrentUserById(parseInt(id));
      oCurUser.subscribe((res) => {
        this.user = res;
      });
      console.log('curUser on ngOnInit:', this.user);

      if (this.user != null) {
        this.loggedinUserId = this.user.id;
        this.router.navigateByUrl(`/acc-all-page/${this.loggedinUserId}`);
      }
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
