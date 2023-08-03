import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal2',
  templateUrl: './goal2.component.html',
  styleUrls: ['./goal2.component.css']
})
export class Goal2Component {

  constructor(private router: Router) {
    
  }
  
  goalId: any;

  hobbiesCategory = [

    { id: 'A98767FD-A515-EE11-9F1C-BB47871D3CF4', value:	'Abundant'},
{ id: 'AA8767FD-A515-EE11-9F1C-BB47871D3CF4',value:	'Adventurous'},
{ id: 'AB8767FD-A515-EE11-9F1C-BB47871D3CF4',value:	'Appreciated'},
{ id: 'AC8767FD-A515-EE11-9F1C-BB47871D3CF4',value:	'Appreciation'},
{ id: 'AD8767FD-A515-EE11-9F1C-BB47871D3CF4',value:	'Appreciative'},
{ id: 'AE8767FD-A515-EE11-9F1C-BB47871D3CF4',value:	'Artistic'},
{ id: 'AF8767FD-A515-EE11-9F1C-BB47871D3CF4',value:	'Other'}

  ]

  
  categoryChange(event: any) {
    this.goalId = event.target.value;
    console.log(this.goalId);
  }

  goal() {
    var data = localStorage.getItem("customergoal") ?? '';
    var record = JSON.parse(data);

    record.goalCategoryID = this.goalId;

    console.log(record);

    localStorage.setItem("customergoal", JSON.stringify(record));
    this.router.navigateByUrl('/progress');
  }

}
