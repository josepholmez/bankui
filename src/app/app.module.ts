import { NavigationService } from './navigation/navigation.service';
import { AppRoutingModule } from './app-routing-module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountCreateComponent } from './account/account-create/account-create.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { AccountUpdateComponent } from './account/account-update/account-update.component';
import { LoginComponent } from './user/login/login.component';

import { CustomerService } from './customer/customer-service';
import { AccountService } from './account/account.service';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerDetailComponent,
    CustomerUpdateComponent,
    AccountListComponent,
    AccountCreateComponent,
    AccountDetailComponent,
    AccountUpdateComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CustomerService, AccountService, UserService, NavigationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
