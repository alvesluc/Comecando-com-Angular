import { Component } from '@angular/core';
import { Todo } from "src/models/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = "My tasks";

  constructor() {
    this.todos.push(new Todo(1, 'Terminar o curso de Angular', false));
    this.todos.push(new Todo(2, 'Terminar o curso de .Net', false));
    this.todos.push(new Todo(3, 'Iniciar as aulas de Clean Architecture Flutterando', false));
    this.todos.push(new Todo(4, 'Cortar o cabelo', false));
  }

}
