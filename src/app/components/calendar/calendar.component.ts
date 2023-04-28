import { Component } from '@angular/core';
import { cala } from 'src/assets/Js/calander';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalanderComponent {
  
  ngOnInit() {
    cala();
  }

}
