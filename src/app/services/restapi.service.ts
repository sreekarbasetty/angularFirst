import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  static readonly Friend_API="http://localhost:3000/all";
  constructor(private http:HttpClient) {
     
   }

  welcome=()=>{
    return "Welcome to Rest";
  }
  getRemoteData=()=>{
   return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  getAllFriends=()=>{
   return this.http.get(RestapiService.Friend_API);
  }
  getFriendById=()=>{

  }
  updateFriendById=()=>{

  }
  addFriend=(friend)=>{
    return this.http.post(RestapiService.Friend_API, friend)
  }
  deleteFriendById=()=>{
    
  }
}
