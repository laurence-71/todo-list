import { Component, } from '@angular/core';
import { stringify } from 'querystring';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {

  constructor(private todoService: TodoService) {
  }

  create(name:string, description:string){
    const todo = new Todo();
    todo.name = name;
    todo.description = description;
    this.todoService.post(todo);
  }




}