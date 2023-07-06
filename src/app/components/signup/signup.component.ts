import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForms!: FormGroup<{ firstName: FormControl<string | null>; lastName: FormControl<string | null>; userName: FormControl<string | null>; email: FormControl<string | null>; password: FormControl<string | null>; signUpChannel: FormControl<string | null>; }>;
  UserDataService: any;
  URL = 'https://digitalstories.co.in/api/v1/customers/signup';
  

  // public signupForms !: FormBuilder;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) {
    //  this.service.users();
   }

  ngOnInit(): void {
        
    this.signupForms = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      userName:[''],
      email:[''],
      password:[''],
      signUpChannel:['EML']

    })
  }

  signupForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
    userName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    signUpChannel: new FormControl('',Validators.required)
  })

  get firstName(){return this.signupForm.get ('firstName')}
  get email(){return this.signupForm.get ('email')}
  get userName(){return this.signupForm.get ('userName')}
  get password(){return this.signupForm.get ('password')}
  get signUpChannel(){return this.signupForm.get ('EML')}

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = " fa-eye-slash";

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  signUp(){
   console.log('checking ', this.signupForm.value);
   let token = 'f094fdf9-5718-4858-aa72-64136530c582';
   const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': token
  });
  
    this.http.post<any>("https://digitalstories.co.in/api/v1/customers/signup", this.signupForm.value, {headers})
    .subscribe(res=>{
      alert("Signup Successfull");
      this.router.navigate(['login']);
    },err=>{
    alert("Username/Email already exist");
  })
  // let token = 'f094fdf9-5718-4858-aa72-64136530c582';
    // let head_obj = new HttpHeaders().set("x-api-key",token)
    // return this.http.get(this.URL,{headers : head_obj})
  }
}
// function intercept(req: any, arg1: any, next: any, HttpHandler: any) {
//   throw new Error('Function not implemented.');
// }

