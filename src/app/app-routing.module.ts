import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './seller/seller.component'
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAuthGuard } from './seller-auth.guard';
import {SellerAddPropertyComponent} from './seller-add-property/seller-add-property.component';
import {SellerUpdatePropertyComponent} from './seller-update-property/seller-update-property.component'

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },{
    path:'sellerLogIn',
    component:LoginComponent,
    pathMatch:"full"
  },{

    component:SellerHomeComponent,
    path:'seller-home',
    canActivate:[SellerAuthGuard]
  },{
    path:'seller-add-property',
    component:SellerAddPropertyComponent,
    canActivate:[SellerAuthGuard]
  },{
    path:'seller-update-property/:id',
    component:SellerUpdatePropertyComponent,
    canActivate:[SellerAuthGuard],
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
