import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
import { Router} from '@angular/router';
 
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  localItem:string | null;
  constructor(private router:Router) { 
    this.localItem =localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos =[]
    }else{
      this.todos=JSON.parse(this.localItem);
    }
    
    
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo){
    console.log(" On click is triggered ");
     const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  
  toggleTodo(todo: Todo){
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  todoEdit(todo: Todo) {
    console.log(todo);
    this.router.navigate(['edit'], { state: {data: todo} });
  }
}
