import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;
  private client_id = 'a9a6713a46a0f238bb53';
  private client_secret = '72d6558f46c75a79d6ff902d43a8defcd786c690';
  constructor(private http: HttpClient) {
    console.log('Github Service Ready....');
    this.username = 'broomspun';
  }

  getUser(): Observable<any> {
    return this.http.get('http://api.github.com/users/'  + this.username + '?client_id=' + this.client_id + '?client_secret=' + this.client_secret);
  }

  getRepos() {
    return this.http.get('http://api.github.com/users/'  + this.username + '/repos?client_id=' + this.client_id + '?client_secret=' + this.client_secret);
  }

  updateUser(username: string) {
    this.username = username;
  }
}
