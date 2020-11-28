import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';
import { AppModule } from '../app.module';
import{HttpClientModule}from '@angular/common/http'; ;



@NgModule({
  declarations: [
    TodosComponent,
    TodolistComponent,
    TodoComponent,

    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[TodosComponent,]

})
export class TodosModule { }
