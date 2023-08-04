import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'jquery';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  
  loginForms!: FormGroup<{ email: FormControl<string | null>; }>;



  constructor( private http : HttpClient, private router : Router) {
    
   }

  ngOnInit(): void {

  }  

  storeToken(tokenValue: string, customerID: string) {
    localStorage.setItem('customerToken', tokenValue)
    localStorage.setItem("customerID", customerID)
  }

  getToken() {
    return localStorage.getItem('customerToken')
  }
  getId() {
    return localStorage.getItem('customerID')
  }


  dologin(){
    console.log(this.loginForm.value);
    let token1 = 'f094fdf9-5718-4858-aa72-64136530c582';
    let cstoken = this.getToken()!;
    const headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'x-api-key': token1,
     'x-user-token': cstoken
   });
   
   this.http.post<any>("https://digitalstories.co.in/api/v1/customers/reset-password", this.loginForm.value, {headers})
   .subscribe((res:any)=>{
    localStorage.setItem("customerToken", res.customerToken);
     alert("Password Updated");
     this.router.navigate(['/login']);
   },error=>{
   alert(error.message);
 })
  }

loginForm = new FormGroup({
  oldPassword: new FormControl('',Validators.required),
  newPassword: new FormControl('',Validators.required)

})

get oldPassword(){return this.loginForm.get ('oldPassword')}
get newPassword(){return this.loginForm.get ('newPassword')}

type: string = "password";
isText: boolean = false;
eyeIcon: string = " fa-eye-slash";

hideShowPass(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";
}


}

