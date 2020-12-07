import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {

  public todoList: Todo[];
  public error: Boolean;
  constructor(private todoService: TodoService) {
    this.retry();

  }
  retry(): void {
    this.todoService.get().subscribe(

      (todoList: Todo[]) => {
        this.error = false;
        this.todoList = this.todoService.todoList = todoList;
      },
      () => {
        this.error = true;
      }
    );
  }

  delete(todo: Todo) {
    const tab = [];
    this.todoList.forEach(item => {
      if(item!=todo){
        tab.push(item);
      }
    });
     
    this.todoService.put(tab).subscribe(
      () => {
        const index = this.todoList.indexOf(todo);
        this.todoService.todoList.splice(index, 1);
      },
      () => {
      }
    );

  }
public myDate:string  =new Date().toISOString();
   ngOnInit(){
     console.log(this.myDate);
    return this.myDate;

}


 
   }











