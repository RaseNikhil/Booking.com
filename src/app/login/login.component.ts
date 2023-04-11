import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { LogIn, SignUp } from '../datatype';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class UserComponent implements OnInit{
  constructor(private user:LoginServiceService,private router:Router){}
  showLogin=false;
  authError:string='';
  ngOnInit(): void {
    this.user.reloadUser()
  }

  signup(data:SignUp):void{
    console.warn(data);
    this.user.userSignUp(data)
  }

  login(data:LogIn){
    console.warn(data);
    this.user.userLogIn(data);
    this.user.logInError.subscribe((error)=>{
      if(error){
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
