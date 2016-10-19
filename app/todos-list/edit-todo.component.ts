import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

import { Todo } from './todo'

@Component({
    selector: 'edit-todo',
    templateUrl: 'app/todos-list/edit-todo.component.html'
})
export class EditTodoComponent implements OnInit {
    @Input() todo: Todo;
    item: Todo;
    @Output() updated: EventEmitter<Todo> = new EventEmitter<Todo>();
    @Output() cancelled: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }
    ngOnInit() {
        this.item = Object.assign({}, this.todo);
    }

    updateClick() {
        console.log('Update click...');
        this.updated.emit(this.item);
    }

    cancelClick() {
        console.log('Cancel click...');
        this.cancelled.emit(this.item.id);
    }
}