import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { da } from 'date-fns/locale';

@Component({
  selector: 'app-goal3',
  templateUrl: './goal3.component.html',
  styleUrls: ['./goal3.component.css']
})
export class Goal3Component {

  form: FormGroup;

  constructor(private fb: FormBuilder, private httpclient: HttpClient, private router: Router) {
    this.form = fb.group({

      CustomerGoalQns: fb.array([]),
      goalCategoryID: [],
      hobbies: [],
      hobbiesCategoryID: []
    })


    this.addCustomerGoalQns('A66956F0-A415-EE11-9F1C-BB47871D3CF4', '"I will be so proud of myself when I..."')

  }

  get getCustomerGoalQns() {
    // return this.form.get('CustomerGoalQns') as FormArray;
    return this.form.controls["CustomerGoalQns"] as FormArray;
  }

  ngOninit() {
    var data = localStorage.getItem("customergoal") ?? '';
    console.log(data);
    var record = JSON.parse(data);
  }


  addCustomerGoalQns(goalId: any, text: any) {
    const add = this.fb.group({
      customerGoalQnID: [goalId],
      customerGoalQnAns: [],
      Text: [text]
    });
    this.getCustomerGoalQns.push(add);

  }


  goal() {

    console.log(this.form.value);
    var data = localStorage.getItem("customergoal") ?? '';
    console.log(data);
    var record = JSON.parse(data);
    var newrecord = this.form.value;
    console.log(newrecord.CustomerGoalQns[0]);

    record.CustomerGoalQns.push(newrecord.CustomerGoalQns[0]);

    console.log(record);

    localStorage.setItem("customergoal", JSON.stringify(record));
    // let token1 = this.getToken()!;
    // let id = this.getId()!;
    // console.log('checking ', this.goalForms.value);
    // let token = 'f094fdf9-5718-4858-aa72-64136530c582';
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'x-api-key': token,
    //   'x-user-token': token1

    // });
    // let url = "https://digitalstories.co.in/api/v1/customers/" + id + "/goal";

    // this.httpclient.post<any>(url, this.goalForms.value, { headers })
    //   .subscribe(res => {
    //     alert("Successfull");

    //   }, err => {
    //     alert(err.message);
    //   })
    this.router.navigateByUrl('/goal4');
  }


}
