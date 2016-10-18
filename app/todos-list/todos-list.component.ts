import { Component, OnInit } from '@angular/core'
import {ALL_TODOS} from './todos.service'

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
        console.log(this.todos);
    }

    add() {
        let maxId =
            this.todos.reduce(
                (curr, elem) => elem.id > curr ? elem.id : curr,
                0);
        this.todos.push({
            id: maxId + 1,
            title: this.title,
            desc: this.desc
        });
    }

    remove(id) {
        let elem = this.todos.find(elem => elem.id == id);
        console.log('Removing... ' + elem.id);
        this.todos.splice(this.todos.indexOf(elem), 1);
    }
}

