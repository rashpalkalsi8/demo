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
    if (value <= 0 || value <= 1) {
       this.description = 'angry';
      this.code = value;
       this.id1 = 'E0DAD613-FB13-EE11-9F1B-80B136B022C7';

      return this.code + this.description + this.id1;
    }
   else if (value <= 2 || value <= 3) {
      this.description = 'sad';
      
      this.id1 = 'E1DAD613-FB13-EE11-9F1B-80B136B022C7';
      return this.code + this.description + this.id1;
    }
   else if (value <= 4 || value<=5) {
      this.description = 'normal';
      
      this.id1 = 'E2DAD613-FB13-EE11-9F1B-80B136B022C7';
      return this.code + this.description + this.id1;
    }
    else if (value <= 6 || value<=7) {
      this.description = 'better';
      
      this.id1 = 'E3DAD613-FB13-EE11-9F1B-80B136B022C7';
      return this.code + this.description + this.id1;
    }
   else if (value <= 8 || value<=9) {
      this.description = 'happy';
      
      this.id1 = 'E4DAD613-FB13-EE11-9F1B-80B136B022C7';
      return this.code + this.description + this.id1;
    }
  else  if (value <= 10) {
      this.description = 'best';
      
      this.id1 = 'E5DAD613-FB13-EE11-9F1B-80B136B022C7';
      return this.code + this.description + this.id1;
    }

    this.emotions()   

    return `${value}`;
  }

  private FullName$ = new BehaviorSubject<string>("");
  private userPayload:any;
  public fullName: any;
  public code: any;
  public description: any;
  public id1: any = 'E5DAD613-FB13-EE11-9F1B-80B136B022C7';
  public emotionresult: any;

  constructor(private scriptLoader: ScriptLoaderService, private httpclient : HttpClient) {
    
    this.userPayload = this.decodeToken();

  }

  public getFullName(){
    return  this.FullName$.asObservable();
  }

  public setFullName(fullname:string){
    this.FullName$.next(fullname);
  }



  ngOnInit() {
    this.scriptLoader.load(
      'assets/Js/script.js');

      this.dologin1()
      this.emotions()

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
    return this.userPayload.firstName;
  }

  dologin1(){
    let api = 'f094fdf9-5718-4858-aa72-64136530c582';
    let token1 = this.getToken()!;
    let id = this.getId()!;
    const headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'x-api-key': api,
     'x-user-token': token1
   });
   let url = "https://digitalstories.co.in/api/v1/customers/"+id
   this.httpclient.get<any>(url, {headers})
   .subscribe((res:any)=>{
    return this.fullName = res.firstName;
   })
  }

  emotions(){
    let api = 'f094fdf9-5718-4858-aa72-64136530c582';
    let eid = this.id1;
    const headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'x-api-key': api,
     'media-files': 'audio',
   });
   let url = "https://digitalstories.co.in/api/v1/emotions/"+eid+"/media-files";
   this.httpclient.get<any>(url, {headers})
   .subscribe((res: any)=>{
    console.log('checking ', res[0].mediaFileUrl); 
    return this.emotionresult = res[0].mediaFileUrl ;
   })
  }

}
