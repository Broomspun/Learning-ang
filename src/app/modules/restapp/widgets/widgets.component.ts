import { Component, OnInit } from '@angular/core';
import {WidgetsService} from '../../../services/restapp/widgets.service';
import {Widget} from '../../../models/restapp/widget';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  currentWidget: Widget;
  widgets: Widget[];

  constructor(private widgetService: WidgetsService) { }

  ngOnInit() {
    this.getWidgets();
    this.resetCurrentWidget();
  }

  resetCurrentWidget() {
    this.currentWidget = { id: null, name: '', description: '' };
  }

  selectWidget(widget) {
    this.currentWidget = widget;
  }

  cancel(widget) {
    this.resetCurrentWidget();
  }

  getWidgets() {
    this.widgetService.getWidgets()
      .subscribe(widgets => this.widgets = widgets);
  }

  saveWidget(widget) {
    if (!widget.id) {
      this.createWidget(widget);
    } else {
      this.updateWidget(widget);
    }
  }

  createWidget(widget) {
    this.widgetService.createWidget(widget)
      .subscribe(response => {
        this.getWidgets();
        this.resetCurrentWidget();
      });
  }

  updateWidget(widget) {
    this.widgetService.updateWidget(widget)
      .subscribe(response => {
        this.getWidgets();
        this.resetCurrentWidget();
      });
  }

  deleteWidget(widget) {
    this.widgetService.deleteWidget(widget)
      .subscribe(response => {
        this.getWidgets();
        this.resetCurrentWidget();
      });
  }

}
