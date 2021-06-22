import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks!: Observable<Task[]> | null;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks();
    this.tasks = this.taskService.tasks$;
    console.log(this.tasks)
  }

}
