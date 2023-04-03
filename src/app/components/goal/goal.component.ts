import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  @ViewChild('outOfRowBtn',{static: false}) out: any;
 
 
 clickButtonOut(){
   alert(this.out._elementRef.nativeElement.getBoundingClientRect().left)
 }
}
