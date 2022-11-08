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

  constructor(private userService: UserService, private router: Router) {}

  async ngOnInit() {
    if (this.userService.isLogged()) {
      console.log('***logged user!!');
      this.curUserId = this.userService.getCurrentUser();
      console.log('***Logged user id:', this.curUserId);
      this.router.navigateByUrl(`/account/${this.curUserId}`);
    } else {
      console.log('***No loggedin user****');
    }
  }

  async onLogin() {
    if (this.loginForm.valid) {
      (await this.userService.login(this.loginForm.value)).subscribe(
        (resData) => {
          this.responseData = resData;

          if (this.responseData != null) {
            this.userService.setCurrentUser(this.responseData.id);
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
