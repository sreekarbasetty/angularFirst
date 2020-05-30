import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-consumeone',
  templateUrl: './consumeone.component.html',
  styleUrls: ['./consumeone.component.css']
})
export class ConsumeoneComponent implements OnInit {

  mysores:number[];
  constructor(private math:MathService) { }

  ngOnInit(): void {
    console.log(this.math.welcome());
    console.log(this.math.scores)
    this.mysores=this.math.getScore();
    this.math.scores.push(3); //Pushing data to service
    console.log(this.math.scores)
  }

}
