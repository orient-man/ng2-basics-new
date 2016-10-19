import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { EditTodoComponent } from './edit-todo.component'
import { TodosListComponent } from './todos-list.component'

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [CommonModule, FormsModule, TodosListComponent],
    declarations: [EditTodoComponent, TodosListComponent],
    providers: [],
})
export class TodosListModule {}