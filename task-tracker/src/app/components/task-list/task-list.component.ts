import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onAddTask(task: Task) {
    this.taskService.addTask(task).subscribe((task: Task) => {
      this.tasks = this.tasks.pipe(
        tap((tasks: Task[]) => {
          return tasks.push(task);
        })
      );
    });
  }

  onToggleTaskReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe();
  }

  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.pipe(
        map((tasks: Task[]) => {
          return tasks.filter((task) => task.id !== 0);
        })
      );
    });
  }
}
