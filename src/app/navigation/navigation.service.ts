import { AccountService } from './../account/account.service';
import { UserService } from './../user/user.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  curUserId: any;

  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.curUserId = this.userService.getCurrentUserId();
  }

  async goToAccountListPage() {
    this.refreshAccounts();
    await this.router.navigateByUrl(`/account/${this.curUserId}`);
  }

  async goToLoginPage() {
    await this.router.navigateByUrl(`/login-page`);
  }

  refreshAccounts() {
    this.accountService.getAccountsByUserId(this.curUserId);
  }
}
