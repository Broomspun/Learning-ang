import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieComponent} from './movie.component';
import {PopularsComponent} from './populars/populars.component';
import {TheatersComponent} from './theaters/theaters.component';
import {MoviesComponent} from './movies/movies.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
