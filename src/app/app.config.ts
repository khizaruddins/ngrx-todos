import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TodoReducer } from 'src/store/todos.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideStore({todos: TodoReducer as any}), provideAnimations()]
};
