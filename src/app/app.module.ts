import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { MapModule } from './modules/map/map.module';
import {SimpleModule} from './modules/simple/simple.module';
import {GithubModule} from './modules/github/github.module';
import {CribsModule} from './modules/cribs/cribs.module';
import {MovieModule} from './modules/movie/movie.module';
import {RestappModule} from './modules/restapp/restapp.module';
import { DropdownDirective } from './directives/dropdown.directive';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SocketchatModule} from './modules/socketchat/socketchat.module';

import {LocationStrategy} from '@angular/common';
import {HashLocationStrategy} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService,
    //   { dataEncapsulation: false, delay: 500}
    // ),
    AppRoutingModule,
    MapModule,
    SimpleModule,
    GithubModule,
    CribsModule,
    MovieModule,
    RestappModule,
    SocketchatModule
  ],
  providers: [],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
