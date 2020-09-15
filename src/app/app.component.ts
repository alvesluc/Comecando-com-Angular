import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = "My tasks";

  constructor() {
    this.todos.push('Terminar o curso de Angular');
    this.todos.push('Terminar o curso de .Net');
    this.todos.push('Iniciar as aulas de Clean Architecture Flutterando');
  }

}
