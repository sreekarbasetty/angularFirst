import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
redcode:number=0;
greencode:number=0;
bluecode:number=0;
redtextcode:number=0;
greentextcode:number=0;
bluetextcode:number=0;
  getcolor=(a,b,c)=>{    
    return "rgb("+a+","+b+","+c+")"
  }
  
//to convert Hex--start
  getHexCode=(a,b,c)=>{
    return this.rgbToHex(a,b,c);
  }
  rgbToHex=(r, g, b)=> {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
  componentToHex=(c)=> {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  //to convert Hex--End

  red:number=0;
 green:number=0;
 blue:number=0;
  getcolorMixed(){
    return "rgb("+this.red+","+this.green+","+this.blue+")"
  }
}
