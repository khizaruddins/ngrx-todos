import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { InputComponent } from './core/input/input.component';
import { ButtonComponent } from './core/button/button.component';
import { IInputConfig } from './shared/interface/input.interface';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IButtonConfig } from './shared/interface/button.interface';
import { Store } from '@ngrx/store';
import { AddTodoAction } from 'src/store/todos.actions';
import { ITodos } from './shared/interface/todos.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    TodosListComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoTitleInputConfig: IInputConfig = {} as IInputConfig;
  todoDescInputConfig: IInputConfig = {} as IInputConfig;  
  todoTitleInputFC: FormControl = {} as FormControl;
  todoDescInputFC: FormControl = {} as FormControl;
  submitBtnConfig: IButtonConfig = {} as IButtonConfig;
  todoForm: FormGroup = {} as FormGroup;
  isTodoExists: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<{todos: ITodos[]}>
  ) {}

  ngOnInit() {
    this.initInputConfig();
    this.initBtnConfig();
    this.initForm();
    this.store.select('todos').subscribe((val: ITodos[]) => this.isTodoExists = val.length > 0);
  }

  initForm() {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required]],
      desc: ['', []]
    });
  }

  getControl(name: string): FormControl {
    return this.todoForm.get(name) as FormControl;
  }

  initInputConfig() {
    this.todoTitleInputConfig = {
      type: 'text',
      element: 'input',
      appearance: 'outline',
      placeholder: 'Enter your todo title here',
      label: 'Add Todo Title',
      errors: {
        minLength: 'Minimum length 2 is required',
        pattern: 'Invalid pattern',
        required: 'This field is required'
      },
      classes: {
        formFieldClass: 'w-100'
      }
    }
    this.todoDescInputConfig = {
      type: 'text',
      element: 'textarea',
      appearance: 'outline',
      placeholder: 'Enter your todo Desc here',
      label: 'Add Todo Desc',
      errors: {
        minLength: 'Minimum length 2 is required',
        pattern: 'Invalid pattern',
        required: 'This field is required'
      },
      classes: {
        formFieldClass: 'w-100'
      }
    }
  }

  initBtnConfig() {
    this.submitBtnConfig = {
      label: 'Submit',
      type: 'button',
      isLoading: false,
      buttonClass: 'theme-inverse-btn'
    }
  }

  submitForm() {
    if (this.todoForm.valid) {
      this.store.dispatch(new AddTodoAction({
        id: 1, 
        title: this.todoForm.get('title')?.value, 
        desc: this.todoForm.get('desc')?.value
      }));
      this.todoForm.reset();
    } else  {
      this.todoForm.markAllAsTouched();
    }
  }
}
