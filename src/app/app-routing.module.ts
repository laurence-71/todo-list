import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './todos/detail/detail.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  
{
path:"todos",
loadChildren : ()=>import("./todos/todos.module").then(m=>m.TodosModule)
},


{
  path: "**",
  redirectTo: "todos",
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
