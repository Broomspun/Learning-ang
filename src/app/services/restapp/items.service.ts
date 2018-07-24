import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Item} from '../../models/restapp/item';
import {Observable, of} from 'rxjs';

import {catchError, map, tap} from 'rxjs/operators';

const itemUrl = 'https://services.angelsolution.net/api/items';
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(itemUrl)
      .pipe(
        tap(itmes => console.log('fetched items')),
        catchError(this.handleError(`getItems`, []))
      );
  }

  /** GET item  by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Item> {
    const url = `${itemUrl}/?id=${id}`;
    return this.http.get<Item[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          console.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Item>(`getHero id=${id}`))
      );
  }


  /** GET item by id. Will 404 if id not found */
  getItem(id) {
    const url = `${itemUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => console.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getHero id=${id}`))
    );
    // return this.http.get(`${BASE_URL}${id}`);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${itemUrl}`, item, httpOptions).pipe(
      tap((item: Item) => console.log(`added item w/ id=${item.id}`)),
      catchError(this.handleError<Item>('createItem'))
    );
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put(itemUrl, item, httpOptions).pipe(
      tap(_ => console.log(`updated item id=${item.id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  deleteItem(item: Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${itemUrl}/${id}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted item id=${id}`)),
      catchError(this.handleError<Item>('deleteItem'))
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

  /* GET heroes whose name contains search term */
  searchItems(item: Item): Observable<Item[]> {
    return this.http.get<Item[]>(`${itemUrl}/?name=${item}`).pipe(
      tap(_ => console.log(`found heroes matching "${item}"`)),
      catchError(this.handleError<Item[]>('searchItems', []))
    );
  }
}
