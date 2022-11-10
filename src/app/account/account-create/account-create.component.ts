import { NavigationService } from './../../navigation/navigation.service';
import { UserService } from './../../user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css'],
})
export class AccountCreateComponent implements OnInit {
  curUserId: any;

  addForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    accountNumber: new FormControl(),
  });

  constructor(
    private service: AccountService,
    private userService: UserService,
    private navService: NavigationService
  ) {}

  async ngOnInit() {
    this.curUserId = this.userService.getCurrentUserId();
  }

  async onNewAccountSubmit() {
    console.log('Add form value', this.addForm.value);
    if (this.addForm.valid) {
      (await this.service.createNewAccount(this.addForm.value)).subscribe(
        (res) => {
          console.log('response', res);
        }
      );
      this.navService.goToAccountListPage();
    }
  }
}
