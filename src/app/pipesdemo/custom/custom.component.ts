import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  friends:String[]=["SDFDS","ABC","EFG","off","bnp","abc","Def"]
  Numbers:number[]=[55,656,33,2,55,34,26];
  data:any=[

  ];
  constructor() { }

  ngOnInit(): void {
  }


}
