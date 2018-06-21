import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleRoutingModule } from './simple-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { JumbotronComponent } from './pages/jumbotron/jumbotron.component';
import { SimpleComponent } from './simple.component';

@NgModule({
  imports: [
    CommonModule,
    SimpleRoutingModule
  ],
  declarations: [AboutComponent, JumbotronComponent, SimpleComponent]
})
export class SimpleModule { }
