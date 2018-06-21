import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../services/movie/movie.service';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrls: ['./populars.component.css']
})
export class PopularsComponent implements OnInit {
  popularList: any;

  constructor(private _movieService: MovieService) {
    this._movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
  }

  ngOnInit() {
  }

}
