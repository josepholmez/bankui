import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';

const myroutes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomeComponent },
  { path: 'cus-all-page', component: CustomerListComponent },
  { path: 'cus-create-page', component: CustomerCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
