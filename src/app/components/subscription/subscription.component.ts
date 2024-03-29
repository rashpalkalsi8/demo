import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  packages: any[] = [];
  packageId: any;
  constructor(private httpclient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getpackages();
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


  packageSelection(id: any) {
    this.packageId = id;

  }
  buy(){
    localStorage.setItem('PackageSelection', this.packageId);
    this.router.navigateByUrl('/premium-subscription')
  }

  getpackages() {
    let api = 'f094fdf9-5718-4858-aa72-64136530c582';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': api
    });
    let url = "https://digitalstories.co.in/api/v1/packages"
    this.httpclient.get<any>(url, { headers })
      .subscribe((res: any) => {
        return this.packages = res;
      })
  }

}
