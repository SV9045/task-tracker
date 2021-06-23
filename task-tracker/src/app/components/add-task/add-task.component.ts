import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() addTask: EventEmitter<Task> = new EventEmitter();
  addTaskForm!: FormGroup;
  isSubmitted!: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addTaskForm = this.fb.group({
      text: ['', [Validators.required]],
      day: ['', [Validators.required]],
      reminder: [false, [Validators.requiredTrue]]
    })
  }

  saveTask() {
    this.isSubmitted = true;
    console.log(this.addTaskForm.controls)
    console.log(this.addTaskForm.value)
    if (!this.addTaskForm.valid) {
      return;
    }
    this.addTask.emit(this.addTaskForm.value);
    this.addTaskForm.reset();
  }

}
