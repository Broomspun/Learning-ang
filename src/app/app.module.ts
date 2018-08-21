import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { MapModule } from './modules/map/map.module';
import {GithubModule} from './modules/github/github.module';
import {CribsModule} from './modules/cribs/cribs.module';
import {MovieModule} from './modules/movie/movie.module';
import {RestappModule} from './modules/restapp/restapp.module';
import { DropdownDirective } from './directives/dropdown.directive';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SocketchatModule} from './modules/socketchat/socketchat.module';
import {MeantodoModule} from './modules/meantodo/meantodo.module';

import {LocationStrategy} from '@angular/common';
import {HashLocationStrategy} from '@angular/common';
import {LoadingComponent} from './components/loading/loading.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AuthService} from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {SettingService} from './services/setting.service';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DropdownDirective,
    LoadingComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MapModule,
    GithubModule,
    CribsModule,
    MovieModule,
    RestappModule,
    SocketchatModule,
    MeantodoModule,
    AngularFireModule.initializeApp(environment.firebase, 'clientpanel'),
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
  ],
  // providers: [],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, AuthService, SettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
