import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-consumefakerest',
  templateUrl: './consumefakerest.component.html',
  styleUrls: ['./consumefakerest.component.css']
})
export class ConsumefakerestComponent implements OnInit {

  friends:any;
  name:string;
  location:string;
  likes:number=0;
  displayAddNewFriendForm: boolean = false
  constructor(private api:RestapiService) { }

  ngOnInit(): void {
    this.getAllFriendsFromService();
  }

  getAllFriendsFromService=()=>{
    this.api.getAllFriends().subscribe(success=>{
      console.log(success);
      this.friends=success;
    },failure=>{
      console.log(failure);
    })
  }
  newFriendAdd=(newFriendFormInstance)=>{
    console.log(newFriendFormInstance);
    console.log(newFriendFormInstance.value);
    this.api.addFriend(newFriendFormInstance.value)
            .subscribe(res=>{
              console.log(res);
              this.getAllFriendsFromService()
              this.displayAddNewFriendForm = false
              this.name=""
              this.location=""
              
            }, err=>{
              console.log(err);
            })
  }
  toggleDisplayAddNewFriendFrom=()=>{
    this.displayAddNewFriendForm = !this.displayAddNewFriendForm
    
  }
}
