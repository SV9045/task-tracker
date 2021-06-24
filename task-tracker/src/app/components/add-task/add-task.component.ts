import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/model/task.model';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnDestroy {

  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  addTaskForm!: FormGroup;
  isSubmitted!: boolean;
  showForm!: boolean;
  subscription = new Subscription();

  constructor(private fb: FormBuilder, private uiService: UiService) {}

  ngOnInit(): void {
    this.createForm();
    this.subscription = this.uiService.subject.subscribe(
      (value) => (this.showForm = value)
    );
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
    if (!this.addTaskForm.valid) {
      return;
    }
    this.addTask.emit(this.addTaskForm.value);
    this.addTaskForm.reset();
  }


  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
