import { Action } from "@ngrx/store";

import { ITodo } from "src/app/shared/interface/todo.interface";
import { AddTodoAction, DeleteTodoAction, TodoActions } from "./todos.actions";

const initialState: ITodo[] = [];

export const TodoReducer = (state = initialState, action: TodoActions | Action) => {
    switch (action.type) {
        case '[Todo] Add Todo':
            return [...state, (action as AddTodoAction).payload];
        case '[Todo] Delete Todo':
            const id = (action as DeleteTodoAction).id;
            return state.filter(item => item.id !== id);
    }
    return state;
}