import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    TodosComponent,
    TodolistComponent,
    TodoComponent,

    
  ],
  imports: [
    CommonModule
  ],
  exports:[TodosComponent,]

})
export class TodosModule { }
