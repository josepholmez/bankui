import { Customer } from './../../model/customer';
import { NavigationService } from './../../navigation/navigation.service';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  responseData: any;
  curUserId: any;
  customer = new Customer();

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

  async onLogin(cre: Customer) {
    (await this.userService.login(cre)).subscribe((resData) => {
      this.responseData = resData;

      if (this.responseData != null) {
        console.log('***Loggedin successfully!', this.responseData);
        this.userService.setCurrentUserId(this.responseData.id);
        this.navService.goToAccountListPage();
      } else {
        alert('Login failed!!!');
        this.navService.goToLoginPage();
      }
    });
  }
}
