import {OpaqueToken} from "@angular/core";
import {Todo} from "./todo";

export interface TodosService {
    getAll(): Todo[];
    insert(title: string, desc: string): Todo;
    update(todo: Todo): void;
    delete(todo: Todo): void;
}

export const TodosServiceToken = new OpaqueToken('TodosService');