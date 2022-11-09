import { NavigationService } from './../../navigation/navigation.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  responseData: any;
  curUserId: any;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UserService,
    private navService: NavigationService
  ) {}

  async ngOnInit() {
    this.curUserId = this.userService.getCurrentUserId();
    if (this.curUserId != null) {
      console.log('***Loggedin successfully!', this.responseData);
      this.navService.goToAccountListPage();
    }
  }

  async onLogin() {
    if (this.loginForm.valid) {
      (await this.userService.login(this.loginForm.value)).subscribe(
        (resData) => {
          this.responseData = resData;

          if (this.responseData != null) {
            console.log('***Loggedin successfully!', this.responseData);
            this.userService.setCurrentUser(this.responseData.id);
            this.navService.goToAccountListPage();
          } else {
            alert('Login failed!!!');
            this.navService.goToLoginPage();
          }
        }
      );
    }
  }
}
