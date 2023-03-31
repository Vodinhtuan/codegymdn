import { Component, OnInit } from '@angular/core';
import {Todo} from "../../todo";
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  edit: FormGroup = new FormGroup({
    id: new FormControl(),
    content: new FormControl(),
    complete: new FormControl()
  });
  idUp: number;

  constructor(private todoService: TodoService) {
    this.todoService.getAll().subscribe(next => this.todos = next);
  }

  ngOnInit() {

  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(next => {
        location.reload();
      });
      // this.content.reset();
    }
  }

  delete(value: number) {
    this.todoService.findById(value).subscribe(now => {
      if (confirm("Do you want to delete " + now.content + "?") == true) {
        this.todoService.deleteById(value).subscribe(next => {
          location.reload();
        });
      }
    })


  }

  up(edit: FormGroup) {
    if (this.edit.valid){
      this.todoService.update(edit.value).subscribe();
      location.reload();
    }
  }

  check(id: number) {
    this.idUp = id;
    if (this.idUp != null) {
      this.todoService.findById(this.idUp).subscribe(now => {
        this.edit.patchValue(now);
      })
    }
  }
}
