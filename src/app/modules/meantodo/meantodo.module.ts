import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeantodoRoutingModule } from './meantodo-routing.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MeantodoComponent } from './meantodo.component';
import {MeantodoService} from '../../services/meantodo/meantodo.service';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [
    CommonModule,
    MeantodoRoutingModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  declarations: [MeantodoComponent, TodosComponent],
  providers: [MeantodoService]
})
export class MeantodoModule { }
