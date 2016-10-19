import { Component, OnInit } from '@angular/core'
import { Todo } from './todo'
import { ALL_TODOS } from './todos.service'

@Component({
    selector: 'todos-list',
    templateUrl: 'app/todos-list/todos-list.component.html'
})
export class TodosListComponent implements OnInit {
    todos = ALL_TODOS;
    underEdit: boolean[] = [];
    title: string;
    desc: string;

    constructor() { }

    ngOnInit() {
        console.log('Init... ')
        console.log(this.todos);

        this.title = "";
        this.desc = "";
        this.todos.forEach(todo => this.hideEdit(todo.id));
    }

    add() {
        let maxId = this.todos.reduce((max, el) => el.id > max ? el.id : max, 0);
        this.todos.push({
            id: maxId + 1,
            title: this.title,
            description: this.desc,
            isFinished: false
        });
        this.hideEdit(maxId + 1);
    }

    edit(id: number) {
        console.log('Editing...');
        this.underEdit[id] = true;
    }

    update(todo: Todo) {
        console.log('Updating...');
        this.hideEdit(todo.id);
        let el = this.todos.find(el => el.id == todo.id);
        Object.assign(el, todo);
    }

    hideEdit(id: number) {
        console.log('Hiding...');
        this.underEdit[id] = false;
    }

    remove(id: number) {
        console.log('Removing... ');
        let elem = this.todos.find(el => el.id == id);
        this.todos.splice(this.todos.indexOf(elem), 1);
    }
}

