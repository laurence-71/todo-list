import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit{
public disabled:boolean;
  public todoList: Todo[];
  public error: Boolean;
  public todoDisabled;

  constructor(private todoService: TodoService) {
    this.retry();

  }
  retry(): void {
    this.todoService.get().subscribe(
      (todoList: Todo[]) => {
        this.error = false;
        this.todoList = todoList;
      },
      () => {
        this.error = true;
      }
    );
  }

  delete(todo: Todo) {
 
    this.disabled=true;
    this.todoDisabled = todo;
    this.todoService.delete(todo).subscribe(
      () => {
        this.disabled = true;
        
        

      },
      () => {
      }
    )
    }
    

  public myDate: string = new Date().toISOString();
  ngOnInit() {
    return this.myDate;

  }



}











