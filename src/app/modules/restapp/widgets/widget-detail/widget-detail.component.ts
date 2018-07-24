import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {Widget} from '../../../../models/restapp/widget';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.css']
})

export class WidgetDetailComponent implements OnInit {
  originalName: string;
  selectedWidget: Widget;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  constructor() { }

  @Input() set widget(value: Widget) {
    if (value) { this.originalName = value.name; }
    this.selectedWidget = Object.assign({}, value);
  }

  ngOnInit() {
  }

}
