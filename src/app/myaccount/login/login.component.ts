import { NgForm } from '@angular/forms';
import { MyAccountService } from './../myaccount.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  isLogin: boolean = false;

  constructor(
    private service: MyAccountService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async onLogin(username: string, password: string) {
    (await this.service.loginUser(username, password)).subscribe((data) => {
      this.isLogin = data;
    });

    if (this.isLogin) {
      this.username = username;
      this.password = password;

      console.log('Login successfully!');
      this.router.navigateByUrl('/all-cus-page');
    } else {
      console.log('Login failed!');
      alert('Login failed!');
      this.router.navigateByUrl('/login-page');
    }
  }
}
