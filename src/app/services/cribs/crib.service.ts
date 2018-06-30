import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

import {catchError, map, tap} from 'rxjs/operators';

const cribsUrl = 'https://services.angelsolution.net/api/cribs';
const httpOptions = {headers: new HttpHeaders(  {'Content-Type': 'application/json'})};


@Injectable({
  providedIn: 'root'
})

export class CribService {

  constructor(private http: HttpClient) {
    console.log('Crib Service ready ...');
  }

  getCribs(): Observable<any> {
    console.log('Fetching Cribs...');
    return this.http.get(cribsUrl, httpOptions)
      .pipe(
        tap(cribs => console.log('fetched cribs')),
        catchError(this.handleError(`getCribs`, []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** POST: add a new cribs to the server */
  createCrib(crib: any) {
    return this.http.post(`${cribsUrl}`, crib, httpOptions).pipe(
      tap((item: any) => console.log(`added crib w/ id=${crib.id}`)),
      catchError(this.handleError<any>('createCrib'))
    );
  }
}
