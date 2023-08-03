import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  @ViewChild('outOfRowBtn', { static: false }) out: any;

  // goalForm!: FormGroup<{ happy: FormControl<string | null>; help: FormControl<string | null>; important: FormControl<string | null>; proud: FormControl<string | null>;}>;
  // UserDataService: any;

  form: FormGroup;

  constructor(private fb: FormBuilder, private httpclient: HttpClient, private router: Router) {
    this.form = fb.group({

      CustomerGoalQns: fb.array([]),
      goalCategoryID: [],
      hobbies: [],
      hobbiesCategoryID: []
    })

    this.addCustomerGoalQns('A36956F0-A415-EE11-9F1C-BB47871D3CF4', '“I am so happy and grateful know that...”')
    this.addCustomerGoalQns('A46956F0-A415-EE11-9F1C-BB47871D3CF4', '“Achieving this will help me feel more..”')
    this.addCustomerGoalQns('A56956F0-A415-EE11-9F1C-BB47871D3CF4', '“This shift is important to me because..”')
    // this.addCustomerGoalQns('A66956F0-A415-EE11-9F1C-BB47871D3CF4')

  }

  get getCustomerGoalQns() {
    // return this.form.get('CustomerGoalQns') as FormArray;
    return this.form.controls["CustomerGoalQns"] as FormArray;
  }

  ngOninit() {

  }


  addCustomerGoalQns(goalId: any, text: any) {
    const add = this.fb.group({
      customerGoalQnID: [goalId],
      customerGoalQnAns: [],
      Text: [text]
    });
    this.getCustomerGoalQns.push(add);

  }



  // ngOnInit(): void {

  //   this.goalForm = this.formBuilder.group({
  //     happy:[''],
  //     help:[''],
  //     important:[''],
  //     proud:['']

  //   })
  // }

  goalForms = new FormGroup({
    happy: new FormControl('', Validators.required),
    help: new FormControl(''),
    important: new FormControl('', Validators.required),
    proud: new FormControl('', Validators.required)
  })


  get happy() { return this.goalForms.get('happy') }
  get help() { return this.goalForms.get('help') }
  get important() { return this.goalForms.get('important') }
  get proud() { return this.goalForms.get('proud') }

  clickButtonOut() {
    alert(this.out._elementRef.nativeElement.getBoundingClientRect().left)
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

    console.log(this.form.value);
    localStorage.setItem("customergoal", JSON.stringify(this.form.value));
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
    this.router.navigateByUrl('/goal3');
  }

}
