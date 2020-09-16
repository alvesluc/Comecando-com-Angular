import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from "src/models/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = "My tasks";

  public form: FormGroup;



  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
    this.todos.push(new Todo(1, 'Terminar o curso de Angular', false));
    this.todos.push(new Todo(2, 'Terminar o curso de .Net', false));
    this.todos.push(new Todo(3, 'Iniciar as aulas de Clean Architecture Flutterando', false));
    this.todos.push(new Todo(4, 'Cortar o cabelo', true));
  };

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  };

  markAsDone(todo: Todo) {
    todo.done = true;
  };

  markAsUndone(todo: Todo) {
    todo.done = false;
  };

}
