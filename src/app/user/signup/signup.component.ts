import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user = new User();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  async onSignup(signupForm: NgForm) {
    const userModel = signupForm.value;
    (await this.userService.signupUser(userModel)).subscribe((responseData) => {
      this.user = responseData;
      console.log('Response:', responseData);
    });

    if (this.user != null) {
      console.log('Created a new user:', this.user);
      alert('Created');
      this.router.navigateByUrl('/cus-all-page');
    } else {
      console.log('Login failed!');
      alert('Login failed!');
      this.router.navigateByUrl('/signup-page');
    }
  }
}
