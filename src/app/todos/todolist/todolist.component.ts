import { Component } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {

  public title: string = "hello !";

  public todoList: Todo[] = [];


  constructor() {


    this.todoList.push({
      name: 'first',
      description: 'bla,bla'
    },
      {
        name: 'second',
        description: 'bla,bla'
      },
      {
        name: 'third',
        description: 'bla,bla'
      }
    );


  }

  remove(todo:Todo): boolean {

   const index=this.todoList.indexOf(todo);
   if(-1 !==index){
      this.todoList.splice(index, 1);
      return true;
      }else{
        return false;
      }
    }

  


}













