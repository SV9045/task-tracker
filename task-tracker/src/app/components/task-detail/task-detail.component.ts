import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task | undefined ;
  faTrash = faTrash;
  // faEdit= faEdit;

  constructor() { }

  ngOnInit(): void {
  }

}
