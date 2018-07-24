import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../../models/meantod/todo';

@Injectable({
  providedIn: 'root'
})
export class MeantodoService {
  BASE_URL = 'https://still-refuge-91726.herokuapp.com/api/v1';

  constructor(private _http: HttpClient) { }

  getTodos(): Observable<any> {
    return this._http.get(`${this.BASE_URL}/todos`);
  }

  saveTodo(todo: Todo): Observable<Todo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    console.log('input=' + JSON.stringify(todo));
    return this._http.post<Todo>(`${this.BASE_URL}/todo`, todo, httpOptions);
  }

  // Update todo
  updateTodo(todo): Observable<Todo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this._http.put<Todo>(`${this.BASE_URL}/todo/${todo._id}`, todo, httpOptions);
  }


  deleteTodo(id): Observable<any> {
    return this._http.delete(`${this.BASE_URL}/todo/${id}`);
  }
}
