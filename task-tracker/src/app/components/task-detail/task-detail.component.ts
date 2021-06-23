import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  @Input() task!: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  faTrash = faTrash;
  // faEdit= faEdit;

  constructor() {}

  ngOnInit(): void {}

  onDeleteTask(task: Task) {
    this.deleteTask.emit(task);
  }
}
