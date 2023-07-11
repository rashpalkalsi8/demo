import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  
  loginForms!: FormGroup<{  userName: FormControl<string | null>; email: FormControl<string | null>; password: FormControl<string | null>; signUpChannel: FormControl<string | null>; }>;


  user: any;
  password1: any;



  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) {
    //  this.service.users();
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
   
   this.http.post<any>("https://digitalstories.co.in/api/v1/customers/signin", this.loginForm.value, {headers})
   .subscribe((res:any)=>{
    localStorage.setItem("customerToken", res.customerToken);
     alert("Login Successfull");
     this.router.navigate(['home']);
   },err=>{
   alert("Please check Username/Password");
 })
  }

loginForm = new FormGroup({
  userName: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
  signInChannel: new FormControl('EML'),
  email: new FormControl('',Validators.required),

})

get userName(){return this.loginForm.get ('userName')}
get password(){return this.loginForm.get ('password')}
get signInChannel(){return this.loginForm.get ('EML')}
get email(){return this.loginForm.get ('email')}

type: string = "password";
isText: boolean = false;
eyeIcon: string = " fa-eye-slash";

hideShowPass(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";
}

}

