import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Widget} from '../../../../models/restapp/widget';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent implements OnInit {
  @Input() widgets: Widget[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
