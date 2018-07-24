import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restapp',
  templateUrl: './restapp.component.html',
  styleUrls: ['./restapp.component.css']
})
export class RestappComponent implements OnInit {
  title = 'Angular REST App (UI: Material)';
  links = [
    { path: '/restapp', icon: 'home', label: 'Home'},
    { path: '/restapp/items', icon: 'list', label: 'Items'},
    { path: '/restapp/widgets', icon: 'view_quilt', label: 'Widgets'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
