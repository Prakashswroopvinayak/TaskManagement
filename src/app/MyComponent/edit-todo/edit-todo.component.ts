import { Component, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { Router} from '@angular/router';
@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  title:string;
  desc:string;
  DeadLine:Date;
  priority:string;
  todos:Todo[];
  idx:number=-1;
  localItem:string | null;
  isSuccess:boolean = false;
  times:string;
  constructor() {
    let todo = history.state.data;
    console.log("got ",history.state.data)
    this.localItem =localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos =[]
    }else{
      this.todos=JSON.parse(this.localItem);
    }
    //console.log("this.todos",this.todos);
    this.idx=this.todos.indexOf(todo);
    //this.todos.splice(index,1);
    //console.log("this.idx",this.idx)
    this.title = todo.title;
    this.desc = todo.desc;
    this.DeadLine = todo.DeadLine;
    this.priority = todo.priority;
    this.times=todo.times;
    //localStorage.setItem("todos",JSON.stringify(this.todos));
   }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo={
      sno: 8,
      title:this.title,
      desc:this.desc,
      priority:this.priority,
      DeadLine: this.DeadLine,
      active:true,
      times:this.times      
    }
    this.addTodo(todo);
  }
  addTodo(todo: Todo) {
    //add todo to idx index
    this.todos[this.idx] = todo;
    
    localStorage.setItem("todos",JSON.stringify(this.todos));
    this.isSuccess = true;
  }

}

