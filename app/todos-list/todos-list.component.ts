import { Component, OnInit } from '@angular/core'
import { Todo } from './todo'
import { ALL_TODOS } from './todos.service'

interface TodoViewModel {
    item: Todo;
    underEdit: boolean;
}

@Component({
    selector: 'todos-list',
    templateUrl: 'app/todos-list/todos-list.component.html'
})
export class TodosListComponent implements OnInit {
    todos: TodoViewModel[];
    title: string;
    desc: string;

    constructor() { }

    ngOnInit() {
        this.title = "";
        this.desc = "";
        this.todos =
            ALL_TODOS.map(todo => <TodoViewModel>{ item: todo, underEdit: false });
    }

    add() {
        let maxId =
            this.todos.reduce(
                (max, el) => el.item.id > max ? el.item.id : max,
                0);

        this.todos.push(<TodoViewModel>{
            item: {
                id: maxId + 1,
                title: this.title,
                description: this.desc,
                isFinished: false
            },
            underEdit: false
        });
    }

    edit(todo: TodoViewModel) {
        todo.underEdit = true;
    }

    cancelEdit(todo: TodoViewModel) {
        todo.underEdit = false;
    }

    update(todo: TodoViewModel, item: Todo) {
        todo.underEdit = false;
        todo.item = item;
    }

    remove(todo: TodoViewModel) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
}
