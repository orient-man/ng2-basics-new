import { Component, OnInit } from '@angular/core'
import { Todo } from './todo'
import { ALL_TODOS } from './todos.service'

@Component({
    selector: 'todos-list',
    templateUrl: 'app/todos-list/todos-list.component.html'
})
export class TodosListComponent implements OnInit {
    todos = ALL_TODOS;
    title: string;
    desc: string;

    constructor() { }

    ngOnInit() {
        console.log('Init... ')
        console.log(this.todos);
    }

    add() {
        let maxId = this.todos.reduce((max, el) => el.id > max ? el.id : max, 0);
        this.todos.push({
            id: maxId + 1,
            title: this.title,
            description: this.desc,
            isFinished: false
        });
    }

    remove(id: number) {
        console.log('Removing... ');
        let elem = this.todos.find(el => el.id == id);
        this.todos.splice(this.todos.indexOf(elem), 1);
    }
}

