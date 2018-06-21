import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { CribsRoutingModule } from './cribs-routing.module';
import { CribsComponent } from './cribs.component';
import {CribsFilterPipe} from '../../filters/cribs-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    CribsRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    CribsComponent,
    CribsFilterPipe,
  ],
  providers: [
    CribsFilterPipe
  ]
})
export class CribsModule { }
