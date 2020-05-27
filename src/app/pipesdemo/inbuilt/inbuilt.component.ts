import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message:string="sdfAadsffFKLcvdop";
  mydate:Date=new Date();
  salary:number=9999;
}
