import { AccountService } from './../../account/account.service';
import { UserService } from './../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css'],
})
export class MyaccountComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private accountService: AccountService,
    private router: Router
  ) {}

  async ngOnInit() {
    let curUser = await this.userService.getCurrentUser();
    if (curUser == null) {
      this.router.navigateByUrl('login-page');
    } else {
      let cusId = curUser.customerId;
      if (cusId != null) {
        this.router.navigateByUrl(`/acc-all-page/${cusId}`);
      }
    }
  }
}
