import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeantodoComponent} from './meantodo.component';

const routes: Routes = [
  {
    path: 'meantodo',
    component: MeantodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeantodoRoutingModule { }
