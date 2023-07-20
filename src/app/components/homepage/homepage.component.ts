import { Component } from '@angular/core';
import { jsn } from 'src/assets/Js/scriptn';
import { ScriptLoaderService } from '../../services/script-loader.service';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDataService } from 'src/app/services/user-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import startOfISOWeek from 'date-fns/startOfISOWeek';

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

  constructor(private scriptLoader: ScriptLoaderService, private httpclient : HttpClient) {
    
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
        return this.fullName = val || fullNameFromToken
      })

  }

emotion(){
  return this.httpclient.get("https://digitalstories.co.in/api/v1/emotions");
}
  

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

  storeToken(tokenValue: string, customerID: string){
    localStorage.setItem('customerToken', tokenValue)
    localStorage.setItem("customerID", customerID)
  }

  getToken(){
    return localStorage.getItem('customerToken')
  }
  getId(){
    return localStorage.getItem('customerID')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('customerToken')
  }
  isLoggedIn1(): boolean{
    return !!localStorage.getItem('customerID')
  }

  decodeToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    return jwtHelper.decodeToken(token)
  }

  getFullNameFromToken(){
    if (this.userPayload)
    return this.userPayload.userName;
  }

  dologin1(){
   
    let token1 = this.getToken()!;
    let id = this.getId()!;
    const headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'x-api-key': id,
     'x-user-token': token1
   });
   
   this.httpclient.get<any>("https://digitalstories.co.in/api/v1/customers", {headers})
   .subscribe((res:any)=>{
    return this.userPayload.userName;
   })
  }

}
