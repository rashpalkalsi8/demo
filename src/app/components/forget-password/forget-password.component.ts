import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'jquery';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {


  
  loginForms!: FormGroup<{ email: FormControl<string | null>; }>;






  constructor( private http : HttpClient, private router : Router) {
    
   }

  ngOnInit(): void {

  }  


  dologin(){
    console.log(this.loginForm.value);
    let token1 = 'f094fdf9-5718-4858-aa72-64136530c582';
    const headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'x-api-key': token1
   });
   
   this.http.post<any>("https://digitalstories.co.in/api/v1/customers/verify-email", this.loginForm.value, {headers})
   .subscribe((res:any)=>{
    localStorage.setItem("customerToken", res.customerToken);
     alert("OTP sent on email");
     this.router.navigate(['/otp']);
   },error=>{
   alert(error.message);
 })
  }

loginForm = new FormGroup({
  email: new FormControl('',Validators.required)

})

get email(){return this.loginForm.get ('email')}



}

