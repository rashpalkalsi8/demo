import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // public signupForms !: FormBuilder;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {

    // this.signupForms = this.formBuilder.group({
    //   firstName:[''],
    //   lastName:[''],
    //   userName:[''],
    //   email:[''],
    //   password:['']
    // })
  }

  signupForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
    userName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  get firstName(){return this.signupForm.get ('firstName')}
  get email(){return this.signupForm.get ('email')}
  get userName(){return this.signupForm.get ('userName')}
  get password(){return this.signupForm.get ('password')}

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = " fa-eye-slash";

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  signUp(){
    this.http.post<any>("https://digitalstories.co.in/api/v1/customers/signup", this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull");
      this.router.navigate(['login']);
    },err=>{
    alert("Something went wrong");
  })
  }
}
