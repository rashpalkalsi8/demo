import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal4',
  templateUrl: './goal4.component.html',
  styleUrls: ['./goal4.component.css']
})
export class Goal4Component {

  constructor(private router: Router) {
    
  }


  goalId: any;
  goalCategory = [
    { id: 'E19A6C4C-3A14-EE11-9F1B-80B136B022C7', value: 'Health' },
    { id: 'E29A6C4C-3A14-EE11-9F1B-80B136B022C7', value: 'Work & Business' },
    { id: 'E39A6C4C-3A14-EE11-9F1B-80B136B022C7', value: 'Finances' },
    { id: 'E49A6C4C-3A14-EE11-9F1B-80B136B022C7', value: 'Productivity' },
    { id: 'E59A6C4C-3A14-EE11-9F1B-80B136B022C7', value: 'Relationships' },
    { id: 'E69A6C4C-3A14-EE11-9F1B-80B136B022C7', value: 'Personal' }
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
    this.router.navigateByUrl('/goal2');
  }
}
