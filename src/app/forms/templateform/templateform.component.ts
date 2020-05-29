import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  fname:string="";
  lname:string=""
  choice:String=""
  constructor() { }

  ngOnInit(): void {
  }

  saveFormValue=(formObject)=>{
    console.log("Forms submited");
    console.log(formObject);
  }

}
