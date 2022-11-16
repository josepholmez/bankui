import { NavigationService } from './navigation.service';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isAdmin = false;
  cusDisplay = '';

  constructor(
    private userService: UserService,
    private navService: NavigationService
  ) {}

  async ngOnInit() {
    this.isAdmin = this.userService.isAdmin();
    this.cusDisplay = this.isAdmin ? 'Customers' : '';
  }

  async onLogout() {
    this.userService.logout();
    await this.navService.goToHomePage();
  }
}
