import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Widget} from '../../models/restapp/widget';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

const widgetUrl = 'https://services.angelsolution.net/api/widgets';
const httpheaders = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  'Access-Control-Allow-Credentials': true
};

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  constructor(private http: HttpClient) { }

  getWidgets() {
    return this.http.get<Widget[]>(widgetUrl)
      .pipe(
        tap(itmes => console.log('fetched widgets')),
        catchError(this.handleError(`getItems`, []))
      );
  }

  createWidget(widget: Widget): Observable<Widget> {
    return this.http.post(`${widgetUrl}`, widget, httpheaders).pipe(
      tap((hero: Widget) => console.log(`added widget w/ id=${widget.id}`)),
      catchError(this.handleError<Widget>('createdWidget'))
    );
  }

  updateWidget(widget: Widget): Observable<Widget> {
    return this.http.put(widgetUrl, widget, httpheaders).pipe(
      tap(_ => console.log(`updated widget id=${widget.id}`)),
      catchError(this.handleError<any>('updateWidget'))
    );
  }

  deleteWidget(widget: Widget | number): Observable<Widget> {
    const id = typeof widget === 'number' ? widget : widget.id;
    const url = `${widgetUrl}/${id}`;

    return this.http.delete<Widget>(url, httpheaders).pipe(
      tap(_ => console.log(`deleted widget id=${id}`)),
      catchError(this.handleError<Widget>('deleteItem'))
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
}
