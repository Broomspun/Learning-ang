import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemsComponent} from './items/items.component';
import {WidgetsComponent} from './widgets/widgets.component';
import {RestappComponent} from './restapp.component';

const routes: Routes = [
  {
    path: 'restapp',
    component: RestappComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'items',
        component: ItemsComponent
      },
      {
        path: 'widgets',
        component: WidgetsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestappRoutingModule { }
