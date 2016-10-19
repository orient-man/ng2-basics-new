import {Injectable} from "@angular/core";
import {Todo} from "./todo";
import {TodosService} from "./todos.service";

@Injectable()
export class InMemoryTodosService implements TodosService {
    private todos: Todo[] = [
        {id: 100, isFinished: false, title: "Buy milk", description: "Buy milk 2%"},
        {id: 101, isFinished: false, title: "Buy butter", description: "3 cubes"},
        {id: 102, isFinished: false, title: "Buy bread"},
        {id: 103, isFinished: false, title: "Wash car"}
    ];

    constructor() {
        console.log('Creating TodosService...');
    }

    getAll(): Todo[] {
        return this.todos;
    }

    insert(title: string, desc: string): Todo {
        let maxId = this.todos.reduce((max, el) => el.id > max ? el.id : max, 0);

        let todo: Todo = {
            id: maxId + 1,
            title: title,
            description: desc,
            isFinished: false
        };
        this.todos.push(todo);
        return todo;
    }

    update(todo: Todo) {
        // no server => no needed
    }

    delete(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
}