import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AboutComponent } from "./MyComponent/about/about.component";
import { AddTodoComponent } from "./MyComponent/add-todo/add-todo.component";
import { EditTodoComponent } from "./MyComponent/edit-todo/edit-todo.component";
import { TodoItemComponent } from "./MyComponent/todo-item/todo-item.component";
import { TodosComponent } from "./MyComponent/todos/todos.component";


const routes:Routes=[
    {path:'',component:TodosComponent},
    {path:'todos',component:TodosComponent},
    //{path:'about',component:AboutComponent},
    {path:'add',component:AddTodoComponent},
   {path:'todolist',component:TodoItemComponent},
   {path:'edit',component:EditTodoComponent},
];



@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRoutingModule{}