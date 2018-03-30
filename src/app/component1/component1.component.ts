import { Component, OnInit, Output, HostListener, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output()
   toggle: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('click')
  click() {
    this.toggle.emit();

  }
}
