import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-book-mentor',
  templateUrl: './book-mentor.component.html',
  styleUrls: ['./book-mentor.component.css']
})
export class BookMentorComponent {



  public fullName: any;

  constructor( private httpclient: HttpClient) {

    

  }

  ngOnInit() {

  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  storeToken(tokenValue: string, customerID: string, mentorID: string) {
    localStorage.setItem('customerToken', tokenValue)
    localStorage.setItem('id', mentorID)
    localStorage.setItem('customerID', customerID)
  }

  getToken() {
    return localStorage.getItem('customerToken')
  }
  getId() {
    return localStorage.getItem('id')
  }


  getcId() {
    return localStorage.getItem('customerID')
  }


  dologin1() {
    let api = 'f094fdf9-5718-4858-aa72-64136530c582';
    let token1 = this.getToken()!;
    let id = this.getId()!;
    let cid = this.getcId()!;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': api,
      'x-user-token': cid
    });
    let url = "https://digitalstories.co.in/api/v1/book/mentor-session"
    this.httpclient.get<any>(url, { headers })
      .subscribe((res: any) => {
        localStorage.setItem("mentorID", res.mentorID);
        return this.fullName = res.mentorAvailabilities;
      })
  }

}
