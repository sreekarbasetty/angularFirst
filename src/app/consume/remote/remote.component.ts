import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  message:string=null;
  exJson:any;
  constructor(private api:RestapiService) { }

  ngOnInit(): void {
    this.message=this.api.welcome();
    this.api.getRemoteData().subscribe(this.success, this.failure);
  }

  success=(response)=>{
    console.log(response);
    this.exJson=response;
  }

  failure=()=>{
    
  }
}
