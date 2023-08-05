import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'jquery';

@Component({
  selector: 'app-premium-subscription',
  templateUrl: './premium-subscription.component.html',
  styleUrls: ['./premium-subscription.component.css']
})
export class PremiumSubscriptionComponent {

  loginForms!: FormGroup<{ name: FormControl<string | null>; email: FormControl<string | null>; customerID: FormControl<string | null>; }>;

  constructor(private formbuilder: FormBuilder, private httpclient: HttpClient, private router: Router) {

  }

  loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    customerID: new FormControl(this.getId()),

  })

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

  getpackageId() {
    return localStorage.getItem('PackageSelection')
  }


  buy() {
    let api = 'f094fdf9-5718-4858-aa72-64136530c582';
    let token = this.getToken()!;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': api,
      'x-user-token': token,
      'packageID': this.getpackageId()!
    });
    let url = "https://digitalstories.co.in/api/v1/packages/" + this.getpackageId()! + "/purchase"
    this.httpclient.post<any>(url, this.loginForm.value, { headers })
      .subscribe((res: any) => {
        console.log(res);
        this.updateStatus(res.packageSaleID);

        alert("Purchase Successfull");

      }, error => {
        alert(error.message);
      })

  }

  updateStatus(packageSaleID: any) {
    let api = 'f094fdf9-5718-4858-aa72-64136530c582';
    let token = this.getToken()!;
    let requestdata = {
      "customerID": this.getId()!,
      "paymentReferenceNo": "12345678913",
      "isPaymentSuccessful": true
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': api,
      'x-user-token': token,
      'packageSaleID': packageSaleID
    });
    let url = "https://digitalstories.co.in/api/v1/packages/sales/" + packageSaleID + "/payment"
    this.httpclient.post<any>(url,requestdata, { headers })
      .subscribe((res: any) => {
        alert("Purchase Status Successfull");
        this.router.navigate(['/home']);
      }, error => {
        alert(error.message);
      })

  }
}
