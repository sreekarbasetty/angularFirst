import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from "@angular/core";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @ViewChild('addButton') addElement:ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  todoitem:string="";
  todos: string[]=["abc", "def", "ghi"] ;
  CompletedTodos:String[]=[];
  
  addTodo =()=>{
    this.todos.push(this.todoitem);
    this.todoitem = "";
    this.addElement.nativeElement.focus(); 
  }

  addToCompleted=(index)=>{
    //alert("counter="+index)
    this.CompletedTodos.push(this.todos[index]);    
    this.todos.splice(index,1);
  }
  deleteCompleted=(index)=>{
    this.CompletedTodos.splice(index,1);
  }

  onKey(event: any) { 
    //alert(event.keyCode);
    if (event.keyCode === 13) {
      this.addTodo();
    }
  }
}
