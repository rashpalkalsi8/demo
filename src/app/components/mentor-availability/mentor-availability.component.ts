import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { data } from 'jquery';

@Component({
  selector: 'app-mentor-availability',
  templateUrl: './mentor-availability.component.html',
  styleUrls: ['./mentor-availability.component.css'],
})
export class MentorAvailabilityComponent {

  public fullName: any;

  constructor(private httpclient: HttpClient) {



  }

  ngOnInit() {

  }

  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });


  storeToken(tokenValue: string, customerID: string, mentorID: string) {
    localStorage.setItem('customerToken', tokenValue)
    localStorage.setItem('id', mentorID)
  }

  getToken() {
    return localStorage.getItem('customerToken')
  }
  getId() {
    return localStorage.getItem('id')
  }
  getmentorId() {
    return localStorage.getItem('mentorId')
  }

  getdate(date: any) {
    var newdate = new Date(date);
    return newdate.getFullYear() + '-' + (Number(newdate.getMonth()) + 1) + '-' + newdate.getDate();
  }

  dologin1() {
    debugger
    var startdate = this.getdate(this.range.get('start')?.value);
    var enddate = this.getdate(this.range.get('end')?.value);
    let api = 'f094fdf9-5718-4858-aa72-64136530c582';
    let token1 = this.getToken()!;
    let id = this.getmentorId()!;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': api
    });
    let url = "https://digitalstories.co.in/api/v1/mentors/" + id + "/availability?fromDate=" + startdate + "&toDate=" + enddate
    this.httpclient.get<any>(url, { headers })
      .subscribe((res: any) => {
        console.log(res);

        return this.fullName = res.mentorAvailabilities;
      })
  }

}
