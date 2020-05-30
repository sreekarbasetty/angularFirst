import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  scores:number[]=[1,2]
  constructor() { }
  welcome=()=>{
    return "welcome to angular service";
  }
  getScore=()=>{
    return this.scores;
  }
}
