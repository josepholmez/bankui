import { CustomerService } from './../../customer/customer-service';
import { NavigationService } from './../../navigation/navigation.service';
import { UserService } from './../../user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
})
export class AccountDetailComponent implements OnInit {
  account: any;
  curUserId: any;
  cusNumber: any;

  constructor(
    private accountService: AccountService,
    private userService: UserService,
    private route: ActivatedRoute,
    private navService: NavigationService,
    private cusService: CustomerService
  ) {}

  async ngOnInit() {
    this.curUserId = this.userService.getCurrentUserId();
    await this.getAccount();
    await this.getCustomer();
  }

  async getAccount() {
    let accountId = this.route.snapshot.paramMap.get('id');
    console.log('***Account id:', accountId);
    (await this.accountService.getAccountById(accountId)).subscribe(
      (resData) => {
        this.account = resData;
        console.log('Account:', this.account);
      }
    );
  }

  async getCustomer() {
    (await this.cusService.getCustomerById(this.curUserId)).subscribe(
      (resData) => {
        this.cusNumber = resData.cusNumber;
      }
    );
  }

  async onDeleteAccount(id: any) {
    (await this.accountService.deleteAccount(id)).subscribe(() =>
      console.log('Deleted account: ', id)
    );
    this.navService.goToAccountListPage();
  }
}
