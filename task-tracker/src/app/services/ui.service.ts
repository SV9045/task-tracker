import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private _subject = new Subject<any>();
  public subject: Observable<any> = this._subject.asObservable();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this._subject.next(this.showAddTask);
  }
}
