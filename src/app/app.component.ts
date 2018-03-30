import { Component } from '@angular/core';
import { Component1Component } from './component1/component1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mainheading = "Welcome to a simple component interaction program"
  videos: Array<string>;
  constructor(){

    this.videos = [
      "Installing node.js","Installing sql server"
    ]
  }

  }
