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
  user = new User();

  constructor(private service: MyAccountService, private router: Router) {}

  ngOnInit(): void {}

  async onLogin(loginForm: NgForm) {
    this.user = loginForm.value;
    console.log('User from html:', this.user);
    (await this.service.loginUser(this.user)).subscribe((data) => {
      console.log('login after rest controller:', data);
      alert('Login data');
    });

    if (this.user != null) {
      console.log('Login successfully!');
      alert('Login successfully!');
      this.router.navigateByUrl('/acc-all-page');
    } else {
      console.log('Login failed!');
      alert('Login failed!');
      this.router.navigateByUrl('/login-page');
    }
  }
}
