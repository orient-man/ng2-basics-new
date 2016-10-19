import { Component, OnInit, Inject } from '@angular/core'
import { Todo } from './todo'
import { TodosService, TodosServiceToken } from './todos.service'

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

    constructor(@Inject(TodosServiceToken) private service: TodosService) { }

    ngOnInit() {
        this.title = "";
        this.desc = "";
        this.todos =
            this.service
                .getAll()
                .map(todo => <TodoViewModel>{ item: todo, underEdit: false });
    }

    add() {
        this.todos.push(<TodoViewModel>{
            item: this.service.insert(this.title, this.desc),
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
        this.service.update(item);
        todo.underEdit = false;
        todo.item = item;
    }

    remove(todo: TodoViewModel) {
        this.service.delete(todo.item);
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
}
