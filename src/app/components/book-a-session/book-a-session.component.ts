import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-a-session',
  templateUrl: './book-a-session.component.html',
  styleUrls: ['./book-a-session.component.css']
})
export class BookASessionComponent {

  public mname: any[] = [];

  constructor(private router: Router, private httpclient: HttpClient) {
    
  }

  ngOnInit() {
  this.dologin1()
  }


  dologin1() {
    let api = 'f094fdf9-5718-4858-aa72-64136530c582';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': api
    });
    let url = "https://digitalstories.co.in/api/v1/mentors"
    this.httpclient.get<any>(url, { headers })
      .subscribe((res: any) => {
        localStorage.setItem("id", res.id);
        console.log(res);
        return this.mname = res;
      })
  }

}
