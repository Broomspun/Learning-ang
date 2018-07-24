import { Component, OnInit } from '@angular/core';
import {MeantodoService} from '../../../services/meantodo/meantodo.service';
import {Todo} from '../../../models/meantod/todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private _todoService: MeantodoService) { }

  ngOnInit() {
    this.todos = [];
    this._todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(event, todoText) {
    let result;
    let newTodo = {
      text: todoText.value,
      isCompleted: false
    };
    console.log('text=' + todoText.value);

    result = this._todoService.saveTodo(newTodo);
    result.subscribe(x => {
      this.todos.push(newTodo);
      todoText.value = '';
    });
  }

  setEditState(todo, state) {
    if (state) {
      todo.isEditMode = state;
    } else {
      delete todo.isEditMode;
    }
  }

  updateStatus(todo) {
    let _todo = {
      _id:todo._id,
      text: todo.text,
      isCompleted: !todo.isCompleted
    };

    this._todoService.updateTodo(_todo)
      .subscribe(data => {
        todo.isCompleted = !todo.isCompleted;
      });
  }

  updateTodoText(event, todo) {
    if (event.which === 13) {
      todo.text = event.target.value;
      let _todo = {
        _id: todo._id,
        text: todo.text,
        isCompleted: todo.isCompleted
      };

      this._todoService.updateTodo(_todo)
        .subscribe(data => {
          this.setEditState(todo, false);
        });
    }
  }

  deleteTodo(todo) {
    let todos: any = this.todos;

    this._todoService.deleteTodo(todo._id)
      .subscribe(data => {
        if (data.n === 1) {
          for (let i = 0; i < todos.length; i++) {
            if (todos[i]._id === todo._id) {
              todos.splice(i, 1);
            }
          }
        }
      });
  }

}
