import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarm-details',
  templateUrl: './alarm-details.component.html',
  styleUrls: ['./alarm-details.component.css']
})
export class AlarmDetailsComponent {



  constructor(private httpclient: HttpClient, private router: Router) {


  }

  ngOnInit(): void {

    this.getalaram();
  }

  public alaram: any[] = [];


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



  getalaram() {
    let api = 'f094fdf9-5718-4858-aa72-64136530c582';
    let id = this.getId()!;
    let tkn = this.getToken()!;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': api,
      'x-user-token': tkn,
      'customerID': id
    });
    let url = 'https://digitalstories.co.in/api/v1/customers/' + id + "/alarm-schedule"
    this.httpclient.get<any>(url, { headers })
      .subscribe((res: any) => {
        return this.alaram = res;
      })
  }




}
