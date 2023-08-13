import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITodos } from '../shared/interface/todos.interface';
import { ButtonComponent } from '../core/button/button.component';
import { IButtonConfig } from '../shared/interface/button.interface';
import { Store } from '@ngrx/store';
import { DeleteTodoAction } from 'src/store/todos.actions';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() config: ITodos = {} as ITodos;
  deleteBtnConfig: IButtonConfig = {} as IButtonConfig;
  constructor(private store: Store) {}
  ngOnInit() {
    this.deleteBtnConfig = {
      matIcon: 'delete'
    }
  }

  deleteTodoItem() {
    this.store.dispatch(new DeleteTodoAction(this.config.id));
  }
}
