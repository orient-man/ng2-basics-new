import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { EditTodoComponent } from './edit-todo.component'
import { TodosListComponent } from './todos-list.component'
import { TodosServiceToken } from './todos.service'
import { InMemoryTodosService } from './in-memory-todos.service'

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [CommonModule, FormsModule, TodosListComponent],
    declarations: [EditTodoComponent, TodosListComponent],
    providers: [{ provide: TodosServiceToken, useClass: InMemoryTodosService }],
})
export class TodosListModule {}