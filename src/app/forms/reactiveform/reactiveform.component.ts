import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  reactivePersonal:any;
  fname:string="";
  lname:string="";
  choice:string="";


  constructor() { }

  ngOnInit(): void {
    this.reactivePersonal=new FormGroup({
      fname:new FormControl("sree",Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      lname:new FormControl("", this.customValidation),
      choice:new FormControl()
    })
  }
  customValidation=(control)=>{
    console.log(control);
    if(control.value.length < 3){
      return {lname: true}
    }
   
  }
  saveFormValue=(rf)=>{
    console.log(rf);
  }
}
