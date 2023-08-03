import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal2',
  templateUrl: './goal2.component.html',
  styleUrls: ['./goal2.component.css']
})
export class Goal2Component {

  constructor(private router: Router, private httpclient: HttpClient) {

  }

  goalId: any;
  hobby: any;
  hobbiesCategory = [

    { id: 'A98767FD-A515-EE11-9F1C-BB47871D3CF4', value: 'Abundant' },
    { id: 'AA8767FD-A515-EE11-9F1C-BB47871D3CF4', value: 'Adventurous' },
    { id: 'AB8767FD-A515-EE11-9F1C-BB47871D3CF4', value: 'Appreciated' },
    { id: 'AC8767FD-A515-EE11-9F1C-BB47871D3CF4', value: 'Appreciation' },
    { id: 'AD8767FD-A515-EE11-9F1C-BB47871D3CF4', value: 'Appreciative' },
    { id: 'AE8767FD-A515-EE11-9F1C-BB47871D3CF4', value: 'Artistic' },
    { id: 'AF8767FD-A515-EE11-9F1C-BB47871D3CF4', value: 'Other' }

  ]


  categoryChange(event: any) {
    this.goalId = event.target.value;
    console.log(this.goalId);
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


  goal() {
    var data = localStorage.getItem("customergoal") ?? '';
    var record = JSON.parse(data);

    record.hobbiesCategoryID = this.goalId;
    record.hobbies = this.hobby;

    console.log(record);

    localStorage.setItem("customergoal", JSON.stringify(record));

    let token1 = this.getToken()!;
    let id = this.getId()!;
    console.log('checking ', record);
    let token = 'f094fdf9-5718-4858-aa72-64136530c582';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': token,
      'x-user-token': token1

    });
    let url = "https://digitalstories.co.in/api/v1/customers/" + id + "/goal";

    this.httpclient.post<any>(url, record, { headers })
      .subscribe(res => {
        alert("Successfull");
        this.router.navigateByUrl('/progress');
      }, err => {
        alert(err.message);
      })


  }

  textchange(event: any) {
    
    this.hobby = event.target.value;
  }

}
