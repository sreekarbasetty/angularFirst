import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  
  constructor(private http:HttpClient) {
     
   }

  welcome=()=>{
    return "Welcome to Rest";
  }
  getRemoteData=()=>{
   return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
