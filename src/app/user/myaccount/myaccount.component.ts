import { AccountService } from './../../account/account.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from './../../model/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css'],
})
export class MyaccountComponent implements OnInit {
  myaccount: Account;

  constructor(private route: ActivatedRoute, private service: AccountService) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      (await this.service.getAccountById(parseInt(id))).subscribe((result) => {
        this.myaccount = result;
      });
    }
  }
}
