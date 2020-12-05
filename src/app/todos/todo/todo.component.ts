import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  public todoForm: FormGroup;
  constructor(private todoService: TodoService, private router: Router, private fb: FormBuilder,) {
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group(
      {
        name: ["", Validators.required],
        description: ["", Validators.required],
      }
    )

  }

  public create() {
    if (this.todoForm.valid) {
      this.router.navigate(['todos']);
      return this.todoService.post({
        name: this.todoForm.get("name").value,
        description: this.todoForm.get("description").value
      })

    }


  }


}