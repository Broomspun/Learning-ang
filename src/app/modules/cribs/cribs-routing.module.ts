import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CribsComponent} from './cribs.component';

const routes: Routes = [
  {
    path: 'cribs',
    component: CribsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CribsRoutingModule { }
