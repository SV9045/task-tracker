import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDetailComponent implements OnInit {

  @Input() task!: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();

  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  onDeleteTask(task: Task) {
    this.deleteTask.emit(task);
  }

  toggle(task: Task) {
    this.toggleReminder.emit(task);
  }
}
