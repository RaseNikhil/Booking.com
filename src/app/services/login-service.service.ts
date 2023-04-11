import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LogIn, SignUp } from '../datatype';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false)
  logInError = new EventEmitter<boolean>(false);
  constructor(private http:HttpClient,private router:Router) { }
  userSignUp(data:SignUp){
    return this.http.post('http://localhost:3000/userLogIn',data,{observe:'response'})
    .subscribe((result)=>{
      this.isUserLoggedIn.next(true);
      localStorage.setItem('user-home',JSON.stringify(result.body))
      this.router.navigate(['user-home'])
      console.warn('result',result)
    });
  }
  reloadUser(){
    if(localStorage.getItem('userLogIn')){
      this.isUserLoggedIn.next(true);
      this.router.navigate(['user-home'])
    }
  }

  userLogIn(data:LogIn){
    console.log(data);
    this.http.get(`http://localhost:3000/userData?email=${data.email}&password=${data.password}`,
    {observe:'response'})
    .subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        console.warn("User Logged In")
      }else{
        console.warn("Login Failed");
        this.logInError.emit(true);
      }
    })

  }
}
