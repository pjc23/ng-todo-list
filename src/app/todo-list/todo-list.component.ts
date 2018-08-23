import { TodoItem } from './../todo-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: TodoItem[];

  constructor() { }

  ngOnInit() {
    this.todoList = [
      {
        id: 1,
        description: 'clean workstation',
        dueDate: '2018-08-23',
      },
      {
        id: 2,
        description: 'push D123456',
        dueDate: '2018-08-25',
      },
      {
        id: 3,
        description: 'review D24680',
        dueDate: '2018-09-02',
      },
      {
        id: 4,
        description: 'watch angular fundamentals',
        dueDate: '2018-08-23',
      },
      {
        id: 5,
        description: 'watch angular pro',
        dueDate: '2018-08-25',
      },
      {
        id: 6,
        description: 'finish webapp training',
        dueDate: '2018-09-10',
      },
    ];
  }

  handleAdd(event: TodoItem) {

  }

  handleEdit(event: TodoItem) {
    this.todoList = this.todoList.map((item: TodoItem) => {
      if (item.id === event.id) {
        item = Object.assign({}, item, event);
      }

      return item;
    });
  }

  handleRemove(event: TodoItem) {
    this.todoList = this.todoList.filter((item: TodoItem) => item.id !== event.id);
  }
}
