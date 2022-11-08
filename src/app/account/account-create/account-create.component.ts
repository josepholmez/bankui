import { UserService } from './../../user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css'],
})
export class AccountCreateComponent implements OnInit {
  curUserId: any;

  addForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  constructor(
    private service: AccountService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    if (this.userService.isLogged()) {
      console.log('Logged user!');
      this.curUserId = this.route.snapshot.paramMap.get('id');
    }
  }

  async onNewAccountSubmit() {
    if (this.addForm.valid) {
      (await this.service.createNewAccount(this.addForm.value)).subscribe(
        (res) => {
          console.log('response', res);
        }
      );
      this.router.navigateByUrl(`/acc-all-page/${this.curUserId.id}`);
    }
  }
}
