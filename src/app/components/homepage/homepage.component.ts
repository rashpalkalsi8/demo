import { Component } from '@angular/core';
import { jsn } from 'src/assets/Js/scriptn';
import { ScriptLoaderService } from '../../services/script-loader.service';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDataService } from 'src/app/services/user-data.service';
import { HttpHeaders } from '@angular/common/http';

declare function BestSellerSlider(): any;
declare function BestSellerSliders(): any;
declare function NewestSellerSlider(): any;
declare function CommingSoonSlider(): any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  private FullName$ = new BehaviorSubject<string>("");
  private userPayload:any;
  public fullName: string = "";

  constructor(private scriptLoader: ScriptLoaderService, private http : HttpHeaders) {
    
    this.userPayload = this.decodeToken();

  }

  public getFullName(){
    return  this.FullName$.asObservable();
  }

  public setFullName(fullname:string){
    this.FullName$.next(fullname);
  }

  // getdata(){
  //     let url='';
  // }

  ngOnInit() {
    this.scriptLoader.load(
      'assets/Js/script.js');

      this.getFullName()
      .subscribe(val=>{
        let fullNameFromToken = this.getFullNameFromToken();
        this.fullName = val || fullNameFromToken
      })

  }


  // dologin(){
  //   console.log(this.loginForm.value);
  //   let token1 = 'f094fdf9-5718-4858-aa72-64136530c582';
  //   const headers = new HttpHeaders({
  //    'Content-Type': 'application/json',
  //    'x-api-key': token1
  //  });
   
  //  this.http.post<any>("https://digitalstories.co.in/api/v1/customers/", this.loginForm.value, {headers})
  //  .subscribe((res:any)=>{
  //   localStorage.setItem("customerToken", res.customerToken);
  //    alert("Login Successfull");
     
  //  })
  // }
  

  tabClick(tab: any) {
    BestSellerSlider();
    NewestSellerSlider();
    CommingSoonSlider();
  }
  tabClicks(tab: any) {
    BestSellerSliders();
    NewestSellerSlider();
    CommingSoonSlider();
  }
  Click(){
    jsn();
  }

  storeToken(tokenValue: string){
    localStorage.setItem('customerToken', tokenValue)
  }

  getToken(){
    return localStorage.getItem('customerToken')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('customerToken')
  }

  decodeToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    return jwtHelper.decodeToken(token)
  }

  getFullNameFromToken(){
    if (this.userPayload)
    return this.userPayload.firstName;
  }

}
