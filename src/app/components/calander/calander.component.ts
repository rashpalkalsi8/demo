import { Component } from '@angular/core';
import { cala } from 'src/assets/Js/calander';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent {
  
  ngOnInit() {
    cala();
  }

}
