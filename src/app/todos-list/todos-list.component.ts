import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { ITodos } from '../shared/interface/todos.interface';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    CommonModule,
    TodoItemComponent
  ],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  todos: ITodos[] = [];
  constructor(
    private store: Store<{todos: ITodos[]}>
  ) {}
  
  ngOnInit() {
    this.fetchTodos();  
  }

  fetchTodos() {
    this.store.select('todos').subscribe(todos => {
      this.todos = todos;
    })
  }
}
