import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JumbotronComponent} from './pages/jumbotron/jumbotron.component';
import {AboutComponent} from './pages/about/about.component';
import {SimpleComponent} from './simple.component';


const routes: Routes = [
  {
    path: 'simple',
    component: JumbotronComponent,
    children: [
      {
        path: 'jumbotron',
        component: JumbotronComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleRoutingModule { }
