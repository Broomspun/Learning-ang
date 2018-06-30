import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { GithubRoutingModule } from './github-routing.module';
import {GithubComponent} from './github.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {GithubService} from '../../services/github/github.service';

@NgModule({
  imports: [
    CommonModule,
    GithubRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    GithubComponent,
    ProfileComponent,
  ],
  providers: [GithubService]
})
export class GithubModule { }
