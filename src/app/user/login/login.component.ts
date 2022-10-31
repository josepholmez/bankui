import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();

  constructor(
    private service: UserService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async onLogin() {
    (await this.service.loginUser(this.user)).subscribe((data) => {
      this.user = data;
      console.log('User:', this.user);
    });
    if (this.user != null) {
      console.log('Login successfully! User:', this.user);
      this.router.navigateByUrl('/home-page');
    } else {
      console.log('Login failed! User:', this.user);
      alert('Login failed! User:' + this.user);
    }
  }
}
