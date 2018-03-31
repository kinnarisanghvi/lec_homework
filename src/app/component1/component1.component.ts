import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  
  constructor() { }
  @Input() videos : Array<any>;
  ngOnInit() {
  }
  @Output() open: EventEmitter<any> = new EventEmitter();
  addToParent(){
    this.open.emit("Calling from child");
  }

  }

