import { Account } from './../../model/account';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  responseData: any;
  myaccounts: Account[] = [];

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private router: Router) {
    localStorage.clear();
  }

  async ngOnInit() {}

  async onLogin() {
    if (this.loginForm.valid) {
      (await this.userService.login(this.loginForm.value)).subscribe(
        (resData) => {
          this.responseData = resData;

          if (this.responseData != null) {
            localStorage.setItem('curUserId', this.responseData.id);
            console.log('***loggedin successfully!!!', this.responseData);
            this.router.navigateByUrl(`/acc-all-page/${this.responseData.id}`);
          } else {
            alert('login Failed');
            this.router.navigateByUrl('/login-page');
          }
        }
      );
    }
  }
}
