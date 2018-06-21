import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { MapModule } from './modules/map/map.module';
import {SimpleModule} from './modules/simple/simple.module';
import {GithubModule} from './modules/github/github.module';
import {CribsModule} from './modules/cribs/cribs.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    SimpleModule,
    GithubModule,
    CribsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
