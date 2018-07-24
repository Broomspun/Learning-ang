import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Item} from '../../../../models/restapp/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  originalName: string;
  selectedItem: Item;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set item(value: Item) {
    if (value) { this.originalName = value.name; }
    this.selectedItem = Object.assign({}, value);
  }

  constructor() { }

  ngOnInit() {
  }

}
