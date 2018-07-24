import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestappRoutingModule } from './restapp-routing.module';
import { RestappComponent } from './restapp.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemsSearchComponent } from './items/items-search/items-search.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetDetailComponent } from './widgets/widget-detail/widget-detail.component';

import {ItemsService} from '../../services/restapp/items.service';
import {WidgetsService} from '../../services/restapp/widgets.service';


@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    CommonModule,
    BrowserModule,
    RestappRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RestappComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    ItemsSearchComponent,
    NewsletterComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailComponent,
  ],
  providers: [ItemsService, WidgetsService],
  bootstrap: [RestappComponent]
})
export class RestappModule { }
