import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Account } from '../../model/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
})
export class AccountDetailComponent implements OnInit {
  account = new Account();

  constructor(
    private service: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      (await this.service.getAccountById(parseInt(id))).subscribe((result) => {
        this.account = result;
      });
    }
  }

  async onDeleteAccount(id: number) {
    (await this.service.deleteAccount(id)).subscribe(() =>
      console.log('Deleted account: ', id)
    );

    this.service.gotoAccountListPage(this.router);
  }
}
