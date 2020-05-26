import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todoitem:string="";
  todos: string[]=["abc", "def", "ghi"] ;
  CompletedTodos:String[]=[];
  
  addTodo =()=>{
    this.todos.push(this.todoitem);
    this.todoitem = "";
    
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
