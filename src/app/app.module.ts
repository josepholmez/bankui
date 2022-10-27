import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing-module';
import { CustomerService } from './customer/customer-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
