import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import{environment} from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Key } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoList: Todo[] = [];
  constructor(private http: HttpClient) {
    const options = {
      headers: new HttpHeaders({
        "secret-key":environment.jsonbin. key,
      })
    }

    this.http.get(environment.jsonbin.url, options).subscribe(
      (todoList: Todo[]) => {
        todoList.forEach(todo => {
          this.todoList.push(todo)
        }

        )
      },
      () => {
        console.log("error");
      }
    )
  }


  post(todo: Todo) {
    this.todoList.push(todo);
 this.put(this.todoList);
  }
 

  delete(todo: Todo) {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
   this.put(this.todoList);
  }

  put(todoList: Todo[]){

    const options = {
      headers: new HttpHeaders({
        "secret-key": environment.jsonbin.key,
        "Content-Type": "application/json",
        "versioning": "false"
      })
    }
    this.http.put(environment.jsonbin.url, this.todoList, options).subscribe(
      () => {
        console.log('ok');
      },
      () => {
        console.log("error");
      }
    )
  }

}





