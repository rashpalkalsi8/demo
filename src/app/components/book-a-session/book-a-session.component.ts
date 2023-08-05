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
  mentorId: any;
  constructor(private router: Router, private httpclient: HttpClient) {

  }

  ngOnInit() {
    this.getmentors()
  }


  getmentors() {
    let api = 'f094fdf9-5718-4858-aa72-64136530c582';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': api
    });
    let url = "https://digitalstories.co.in/api/v1/mentors"
    this.httpclient.get<any>(url, { headers })
      .subscribe((res: any) => {

        console.log(res);
        return this.mname = res;
      })
  }

  mentorSelection(item: any) {
    this.mentorId = item.id;
  }

  doNext() {
    console.log(this.mentorId);
    localStorage.setItem("mentorId", this.mentorId);
    this.router.navigateByUrl('/mentor-availability')
  }



}
