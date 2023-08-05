import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private httpclient: HttpClient, private router: Router) {


  }

  morningForm = new FormGroup({

    scheduleSession: new FormControl(''),
    days: new FormControl(''),
    blessingFileUrl: new FormControl(''),
    isVibrate: new FormControl(''),

  })

  eveningForm = new FormGroup({

    scheduleSession: new FormControl(''),
    days: new FormControl(''),
    blessingFileUrl: new FormControl(''),
    isVibrate: new FormControl(''),

  })

  ngOnInit(): void {

    this.mediabycat();
  }

  public media: any[] = [];


  mediabycat() {
    let api = 'f094fdf9-5718-4858-aa72-64136530c582';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': api,
    });
    let url = "https://digitalstories.co.in/api/v1/media-files";
    this.httpclient.get<any>(url, { headers })
      .subscribe((res: any) => {
        console.log('checking ', res[0].mediaFileUrl);
        return this.media = res;
      })
  }

  storeToken(tokenValue: string, customerID: string) {
    localStorage.setItem('customerToken', tokenValue)
    localStorage.setItem("customerID", customerID)
  }

  getToken() {
    return localStorage.getItem('customerToken')
  }
  getId() {
    return localStorage.getItem('customerID')
  }




  dologin(type: any) {

    var form: any;
    if (type === 'Morning') {
      form = this.morningForm.value;
    } else {
      form = this.eveningForm.value;
    }

    var multidays: any[] = [];
    form.scheduleSession = type;
    multidays = form.days;
    form.days = multidays.map(x => x).join(",")
    form.isVibrate = form.isVibrate === "true";
    console.log(form);
    let token1 = 'f094fdf9-5718-4858-aa72-64136530c582';
    let id = this.getId()!;
    let tkn = this.getToken()!;
    let url = 'https://digitalstories.co.in/api/v1/customers/' + id + "/alarm-schedule"
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': token1,
      'x-user-token': tkn
    });

    this.httpclient.post<any>(url, form, { headers })
      .subscribe((res: any) => {

        alert("Alarm Set Successfully");
        this.router.navigate(['/home']);
      }, err => {
        alert(err.message);
      })
  }





}
