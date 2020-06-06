import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-texteffect',
  templateUrl: './texteffect.component.html',
  styleUrls: ['./texteffect.component.css'],
  animations:[
    trigger('textanimate',[
                            state("one",style({
                              color:'red'
                            })),
                            state("two",style({
                              color:'green'
                            })),transition('one<->two', animate('2000ms ease-out'))])
  ]
})
export class TexteffectComponent implements OnInit {

  currentState:string='two'
  constructor() { }

  ngOnInit(): void {
  }

  animateMe=()=>{
    this.currentState=this.currentState==='one'?'two':'one';
  }
}
