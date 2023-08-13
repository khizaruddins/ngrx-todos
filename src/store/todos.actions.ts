import { Action } from "@ngrx/store";

export const ADD_TODO = '[Todo] Add Todo';
export const DELETE_TODO = '[Todo] Delete Todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;
    constructor(public payload: {id: number, title: string, desc: string}) {}
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;
    constructor(public id: number) {}
}

export type TodoActions = AddTodoAction | DeleteTodoAction;