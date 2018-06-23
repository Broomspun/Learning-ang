import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {MovieService} from '../../services/movie/movie.service';
import { TheatersComponent } from './theaters/theaters.component';
import { PopularsComponent } from './populars/populars.component';
import {PagerService} from '../../services/movie/pager.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
  ],
  declarations: [
    MovieComponent,
    MoviesComponent,
    TheatersComponent,
    PopularsComponent,
    DetailComponent
  ],
  providers: [
    MovieService,
    PagerService
  ]
})
export class MovieModule { }
