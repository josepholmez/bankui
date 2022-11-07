import { User } from './../../model/user';
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
  curUser: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private accountService: AccountService,
    private router: Router
  ) {}

  async ngOnInit() {
    (await this.userService.getCurrentUser()).subscribe((res) => {
      this.curUser = res;
    });

    if (this.curUser != null) {
      console.log('in ngOnInit cur user:', this.curUser);
      this.router.navigateByUrl(`/acc-all-page/${this.curUser.id}`);
    } else {
      console.log('in ngOnInit cur user:', this.curUser);
      this.router.navigateByUrl('/login-page');
    }
  }
}
