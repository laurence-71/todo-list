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

  constructor(private todoService: TodoService) {
    this.todoList = this.todoService.todoList;
  }

  delete(todo: Todo) {
    this.todoService.delete(todo);
  }

}













