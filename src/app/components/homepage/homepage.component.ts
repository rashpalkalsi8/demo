import { Component } from '@angular/core';

import { ScriptLoaderService } from '../../services/script-loader.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  constructor(private scriptLoader: ScriptLoaderService) {
    
  }

 
 ngOnInit(){
  this.scriptLoader.load(
    'assets/Js/script.js');

 }

}