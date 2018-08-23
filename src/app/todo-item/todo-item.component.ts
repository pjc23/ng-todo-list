import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { TodoItem } from '../todo-item';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges {

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

  ngOnChanges(changes) {
    if (changes.item) {
      this.item = Object.assign({}, changes.item.currentValue);
    }
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
