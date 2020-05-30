import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-consumetwo',
  templateUrl: './consumetwo.component.html',
  styleUrls: ['./consumetwo.component.css']
})
export class ConsumetwoComponent implements OnInit {

  constructor(private ms:MathService) { }

  scoresNew:number[]=null;
  ngOnInit(): void {
    console.log();
    this.scoresNew= this.ms.getScore();
  }

}
