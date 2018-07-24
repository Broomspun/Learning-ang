import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../../services/restapp/items.service';
import {Item} from '../../../models/restapp/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  currentItem: Item;

  constructor(private itemsService: ItemsService) { }


  ngOnInit() {
    this.getItems();
    this.resetCurrentItem();
  }

  resetCurrentItem() {
    this.currentItem = { id: null, name: '', description: '' };
  }

  selectItem(item) {
    this.currentItem = item;
  }

  cancel(item) {
    this.resetCurrentItem();
  }

  getItems() {
    this.itemsService.getItems().subscribe(res => {
      this.items = res;
    });

  }

  saveItem(item) {
    if (!item.id) {
      this.createItem(item);
    } else {
      this.updateItem(item);
    }
  }

  /** POST: add a new hero to the server */
  createItem(item: Item) {
    this.itemsService.createItem(item)
      .subscribe(response => {
        this.items.push(item);
        // this.resetCurrentItem();
      });
  }

  updateItem(item) {
    this.itemsService.updateItem(item)
      .subscribe(response => {
        this.getItems();
        this.resetCurrentItem();
      });
  }

  deleteItem(item) {
    this.itemsService.deleteItem(item)
      .subscribe(response => {
        this.getItems();
        this.resetCurrentItem();
      });
  }
}
