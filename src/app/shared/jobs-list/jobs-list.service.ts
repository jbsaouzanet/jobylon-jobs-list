import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Jobs } from 'src/app/model/jobs.model';

@Injectable({
    providedIn: 'root'
})

export class JobListService {

    //Mock Files
    urlJson = '../../assets/jobslist.mock.json';
    urlXml = '../../assets/jobslist.mock.xml';

    constructor(private http: HttpClient) {}
    
    get(url: string) {
        return this.http.get<Jobs>(url).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }
}

