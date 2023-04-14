import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LogIn, SignUp } from '../datatype';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  logInError = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient,private router:Router) { }

  sellerSignUp(data:SignUp){
    this.http.post('http://localhost:3000/sellerData',data,{observe:'response'})
    .subscribe((result)=>{
      if(result){
        localStorage.setItem('sellerData',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
      }
    });
  }
  reloadSeller(){
    if(localStorage.getItem('sellerData')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }

  sellerLogIn(data:LogIn){
    console.log(data);
    this.http.get(`http://localhost:3000/sellerData?email=${data.email}&password=${data.password}`,
    {observe:'response'})
    .subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        this.logInError.emit(false);
        localStorage.setItem('sellerData',JSON.stringify(result.body))
        this.router.navigate(['seller-home']);
      }else{
        console.warn("Login Failed");
        this.logInError.emit(true);
      }
    })

  }
}
