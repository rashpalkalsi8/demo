import { Component } from '@angular/core';
import { jsn } from 'src/assets/Js/scriptn';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
    constructor(){}
      ngOnInit(){
    jsn();
  }
}
