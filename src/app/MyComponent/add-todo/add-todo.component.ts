import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  desc:string;
  DeadLine:Date;
  priority:string;
  times:string ;
  todos:Todo[];
  localItem:string | null;
  isSuccess:boolean = false;
  @Output() todoAdd: EventEmitter<Todo>=new EventEmitter();
  constructor() {
    this.localItem =localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos =[]
    }else{
      this.todos=JSON.parse(this.localItem);
    }
    
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
      times:this.times,
     


    }
    //this.todoAdd.emit(todo);
    this.addTodo(todo);
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    this.isSuccess = true;
  }

}
