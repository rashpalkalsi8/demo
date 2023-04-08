import { Component } from '@angular/core';
import { music } from 'src/assets/Js/music';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {

  ngOnInit() {
    music();
  }
}
