import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: "",
    component: TodosComponent,
    children: [
      {
        path:"",
        component:TodolistComponent,

      },
      {
        path:"detail/:name",
        component:DetailComponent,
      },
     
      {
        path: "todo",
        component: TodoComponent,
      },
     
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
