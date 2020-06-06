import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input('ParentName') name;
  @Output() broadcastToParent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  sendToParent=()=>{
    this.broadcastToParent.emit(this.name)
  }
}
