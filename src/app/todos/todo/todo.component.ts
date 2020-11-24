import { Component, } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {

  constructor() {


  }

  public create(name: string, description: string) {
    const todo = new Todo();
    todo.name = name;
    todo.description = description;

    console.log(todo);

  }



}
