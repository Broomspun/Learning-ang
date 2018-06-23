import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieComponent} from './movie.component';
import {PopularsComponent} from './populars/populars.component';
import {TheatersComponent} from './theaters/theaters.component';
import {MoviesComponent} from './movies/movies.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MovieComponent,
    children: [
      {
        path: 'populars',
        component: PopularsComponent
      },
      {
        path: 'thearters',
        component: TheatersComponent
      },
      {
        path: 'search',
        component: MoviesComponent
      },
      {
        path: ':id',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
