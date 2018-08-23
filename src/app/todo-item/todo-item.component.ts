import { Component, OnInit, Input, Output } from '@angular/core';
import { TodoItem } from '../todo-item';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  item: TodoItem;

  isEditing = false;

  @Output()
  update: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  @Output()
  remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit() {
  }

  onDescriptionChange(description: string) {
    this.item.description = description;
  }

  onDueDateChange(dueDate: string) {
    this.item.dueDate = dueDate;
  }

  toggleEditing() {
    if (this.isEditing) {
      this.update.emit(this.item);
    }

    this.isEditing = !this.isEditing;
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
