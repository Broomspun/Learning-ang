import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../services/movie/movie.service';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {
  theatersList: any;

  constructor(private _movieService: MovieService) {
    this._movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
  }

  ngOnInit() {
  }

}
