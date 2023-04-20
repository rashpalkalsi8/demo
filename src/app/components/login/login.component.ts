import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  

  user: any;
  password: any;

  ngOnInit(): void {
  }  

dologin(): void {
  console.log(this.loginForm.value);
}

loginForm = new FormGroup({
  lusr: new FormControl('',Validators.required),
  lpwd: new FormControl('',Validators.required)
})

get lusr(){return this.loginForm.get ('lusr')}
get lpwd(){return this.loginForm.get ('lpwd')}

type: string = "password";
isText: boolean = false;
eyeIcon: string = " fa-eye-slash";

hideShowPass(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";
}

}

