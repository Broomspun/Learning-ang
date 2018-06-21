import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD56soHMOMvxal5HCV4WcKt2bNjkp6wmMw'
    })
  ],
  declarations: [MapComponent]
})
export class MapModule { }
