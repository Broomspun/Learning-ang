import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apikey: string;
  page: number;
  query: string;

  constructor(private http: HttpClient) {
    this.apikey = '2931998c3a80d7806199320f76d65298';
    this.page = 1;
    this.query = '007';

    console.log('MovieService Initialized...');
  }

  getPopular(): Observable<any> {
    return this.http.jsonp('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + this.apikey, 'callback');
  }

  getInTheaters(): Observable<any> {
    return this.http.jsonp('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2016-09-26&primary_release_date.lte=2018-06-20' +
      '&api_key=' + this.apikey, 'callback');
  }

  getMovies(): Observable<any> {
    console.log('https://api.themoviedb.org/3/search/movie?api_key=' + this.apikey +
      'page=' + this.page + '&query=' + this.query + '&include_adult=true');

    return this.http.jsonp('https://api.themoviedb.org/3/search/movie?api_key=' + this.apikey +
    '&page=' + this.page + '&query=' + this.query + '&include_adult=true', 'callback');
  }

  updateQuery(query) {
    this.query = query;
  }

  updatePage(page: number) {
    this.page = page;
  }
}

