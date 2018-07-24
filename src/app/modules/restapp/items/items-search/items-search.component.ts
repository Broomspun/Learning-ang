import { Component, EventEmitter, OnInit, Output, ViewChild  } from '@angular/core';
import {ItemsService} from '../../../../services/restapp/items.service';

import {fromEvent} from 'rxjs';
import { map } from 'rxjs/operators';
import {debounceTime} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/operators';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {
  @Output() SearchResults = new EventEmitter();
  @ViewChild('itemsSearch') itemsSearch;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    const search$ = fromEvent(this.getNativeElement(this.itemsSearch), 'keyup').pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((event: any) => event.target.value),
      switchMap(term => this.itemsService.searchItems(term)),
    ).subscribe(items => this.SearchResults.emit(items));

  }

  getNativeElement(element) {
    return element.nativeElement;
  }
}
