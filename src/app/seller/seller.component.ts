import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { LogIn, SignUp } from '../datatype';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private seller:LoginServiceService,private location :Location){}
  showLogin=false;
  authError:String='';

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signup(data:SignUp):void{
    console.warn(data);
    this.seller.sellerSignUp(data);
  }

  login(data:LogIn):void{
    this.seller.sellerLogIn(data);
    // this.location.go(this.location.path());
    // location.reload();
    this.seller.logInError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is Incorrect"
      }
    })
  }

  openLogin(){
    this.showLogin=false;
  }

  openSignUp(){
    this.showLogin=true;
  }


}
