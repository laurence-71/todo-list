import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Key } from 'protractor';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoList: Todo[];
  constructor(private http: HttpClient) { }

  get(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.jsonbin.url,
      {
        headers: new HttpHeaders({
          "secret-key": environment.jsonbin.key,
        })
      });
  }


  post(todo: Todo) {
    const tab = [];
    this.todoList.forEach(item => {
      tab.push(item);

    });
    tab.push(todo);
    this.put(tab).subscribe(
      () => {
        this.todoList.push(todo);
      },
      () => {
      }
    );

  }


 

  put(todoList: Todo[]): Observable<Todo[]> {
    return this.http.put<Todo[]>(environment.jsonbin.url, todoList,

      {
        headers: new HttpHeaders({
          "secret-key": environment.jsonbin.key,
          "Content-Type": "application/json",
          "versioning": "false"
        })
      }


    )
  }

}





