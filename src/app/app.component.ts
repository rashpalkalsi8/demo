import { Component, OnInit } from '@angular/core';
import { myjs } from './script';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  ngOnInit(){
    myjs();
  }
}