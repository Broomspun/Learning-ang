import { Component, OnInit } from '@angular/core';
import {Item} from '../../../models/restapp/item';
import {Widget} from '../../../models/restapp/widget';
import {ItemsService} from '../../../services/restapp/items.service';
import {WidgetsService} from '../../../services/restapp/widgets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[];
  widgets: Widget[];

  constructor(private itemsService: ItemsService, private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.getItems();
    this.getWidgets();
  }

  getItems() {
    this.itemsService.getItems()
      .subscribe(res => this.items = res);
  }

  getWidgets() {
    this.widgetsService.getWidgets()
      .subscribe(res => this.widgets = res);
  }

  handleResults(items) {
    this.items = items;
  }
}
