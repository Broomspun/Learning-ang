import { Component, OnInit } from '@angular/core';

import {MovieService} from '../../../services/movie/movie.service';
import {PagerService} from '../../../services/movie/pager.service';
import {query} from '@angular/animations';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  query: string;
  page: number;

  private total_movies: number;
  private total_pages: number;

  // Pager Object
  pager: any = {};

  movies: any; // Items of all Movies

  constructor(private _movieService: MovieService, private _pagerService: PagerService) {
    this.page = 1;
    this.query = '007';
  }

  SearchMovies() {
    this._movieService.updateQuery(this.query);
    this._movieService.updatePage(1);
    this.setPage(1);
  }

  ngOnInit() {
    this._movieService.getMovies().subscribe(res => {
      console.log(res);
      this.movies = res.results;
      this.total_movies = res.total_results;
      this.total_pages = res.total_pages;
      this.setPage(1);
    });
  }

  setPage(page: number) {
    this._movieService.updatePage(page);
    this._movieService.getMovies().subscribe(res => {
      this.movies = res.results;
      this.total_movies = res.total_results;
      this.total_pages = res.total_pages;

      // get pager object from service
      this.pager = this._pagerService.getPager(this.total_movies, page);
    });
  }
}
