import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';

import{HttpClientModule}from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TodosRoutingModule } from './todos-routing.module';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
 ;



@NgModule({
  declarations: [
    TodosComponent,
    TodolistComponent,
    TodoComponent,
    DetailComponent,

    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TodosRoutingModule,
   
  ], 
 

})
export class TodosModule { }
