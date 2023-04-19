import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor() { }

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    fname: new FormControl('',Validators.required),
    lname: new FormControl(''),
    usr: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    pwd: new FormControl('',Validators.required)
  })

  get fname(){return this.signupForm.get ('fname')}
  get email(){return this.signupForm.get ('email')}
  get usr(){return this.signupForm.get ('usr')}
  get pwd(){return this.signupForm.get ('pwd')}

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = " fa-eye-slash";

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
}
