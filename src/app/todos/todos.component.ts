import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent  implements OnInit{

  constructor(private platform:Platform) {
   
   
  }

  ngOnInit(): void {
    this.platform.backButton.subscribeWithPriority(0,
      ()=>{
        alert("Done");
      },
     
    );
  }
}
