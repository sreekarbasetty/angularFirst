import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { RouterModule, Router } from '@angular/router';

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
  id:number;
  displayAddNewFriendForm: boolean = false
  displayEditNewFriendForm:boolean =false
  constructor(private api:RestapiService, private route:Router) { }

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
    this.displayEditNewFriendForm = false
    
  }
  editSelectedFriend=(eff)=>{
    console.log(eff.value)
    this.api.updateFriendById(this.id, eff.value)
            .subscribe(res=>{
              console.log(res)
              this.getAllFriendsFromService()
              this.displayEditNewFriendForm = false
              //to make values null in form
              this.id = null
              this.name = null
              this.location = null
              this.likes = null
            }, err=>{
              console.log(err)
            })
  }
  
  toggleDisplayEditFriendForm=(id)=>{
    this.displayEditNewFriendForm =true
    console.log("Edit friend with id: " + id)
    this.api.getFriendById(id)
            .subscribe(res =>{
              console.log(res)
              this.id = res.id
              this.name = res.name
              this.location = res.location
              this.likes = res.likes
            }, err=>{
              console.log(err)
            })
  }

  deleteSelectedFriend =(id)=>{
    this.api.deleteFriendById(id)
            .subscribe(res=>{
              console.log(res)
              this.getAllFriendsFromService()
            }, err=>{
              console.log(err)
            })
  }
  addNewFriendInNewPage=()=>{
    this.route.navigate(['/consumeAll/addnewfriend'])
  }
  EditFriendInNewPage=(id)=>{
    this.route.navigate(['/consumeAll/editfriend',id])
  }

  increaseLikes=(fr)=>{
    console.log("increase likes");
    console.log(fr);
    fr.likes=fr.likes + 1;
    console.log(fr);
    this.api.updateFriendById(fr.id, fr)
            .subscribe(res=>{
              console.log(res)
              this.getAllFriendsFromService()
              
            }, err=>{
              console.log(err)
            })
  }

  decreaseLikes=(fr)=>{
    fr.likes=fr.likes - 1;
    console.log(fr);
    this.api.updateFriendById(fr.id, fr)
            .subscribe(res=>{
              console.log(res)
              this.getAllFriendsFromService()
              
            }, err=>{
              console.log(err)
            })
  }
}
