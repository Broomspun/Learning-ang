import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../../services/movie/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movie: Object;

  constructor(
    private router: ActivatedRoute,
    private _movieService: MovieService) {

  }

  ngOnInit() {
    this.router.params.subscribe( params => {
      const id = params['id'];
      this._movieService.getDetail(id).subscribe(movie => {
        this.movie = movie;
        // console.log(movie);
      });
    });
  }

}
