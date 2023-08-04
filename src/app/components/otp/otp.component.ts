import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'jquery';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  
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
   
   this.http.post<any>("https://digitalstories.co.in/api/v1/customers/verify-otp", this.loginForm.value, {headers})
   .subscribe((res:any)=>{
    localStorage.setItem("customerToken", res.customerToken);
     alert("OTP Verified");
     this.router.navigate(['/new-password']);
   },error=>{
   alert(error.message);
 })
  }

loginForm = new FormGroup({
  customerOTP: new FormControl('',Validators.required)

})

get customerOTP(){return this.loginForm.get ('customerOTP')}



}

