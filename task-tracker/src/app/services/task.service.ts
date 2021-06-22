import {
  HttpClient,
  HttpErrorResponse,
  HttpStatusCode
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Task } from 'src/app/model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks$!: Observable<Task[]> | null;
  private apiURL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> | null {
    return (this.tasks$ = this.http.get<Task[]>(this.apiURL).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    ));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error Occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // From Angular 12, we have enum in built for Error Codes so we don't need to create.
      errorMessage =
        err.status === HttpStatusCode.Unauthorized
          ? 'There is lack of Authorization'
          : `Backend returned code ${err.status} : ${err.message}`;
    }
    console.error('Error:', err);
    console.error('Error Message:', errorMessage);
    return throwError(errorMessage);
  }
}
