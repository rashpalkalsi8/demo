import { Component } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
    constructor( private scriptLoader: ScriptLoaderService ){}
      ngOnInit(){
    
    this.scriptLoader.load(
      'assets/Js/script.js');

  
  }
}
