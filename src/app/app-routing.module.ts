import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {UserComponent} from './login/login.component'
import { UserHomeComponent } from './user-home/user-home.component';
import { UserAuthGuard } from './user-auth.guard';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },{
    path:'userLogIn',
    component:UserComponent
  },{
    component:UserHomeComponent,
    path:'user-home',
    canActivate:[UserAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
