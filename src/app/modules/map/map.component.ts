import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../../services/map/marker.service';
import { Marker} from '../../interfaces/map/marker';

import {MouseEvent as AGMMouseEvent} from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MarkerService]
})
export class MapComponent implements OnInit {
  title = 'Our Map';
  // google maps zoom level
  zoom = 8;
  lat = 51.678418;
  lng = 7.809007;
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;

  markers: Marker[];

  constructor(private _markerService: MarkerService) {
    this.markers = this._markerService.getMarkers();
  }

  clickedMarker(name: string, index: number) {
    console.log('clicked the marker: ${label || index}');
  }

  markerDragEnd(m: Marker, $event: AGMMouseEvent) {
    console.log('dragEnd', m, $event);
    let updateMarker = {
      name: m.name,
      lat: m.lat,
      lng: m.lng,
      draggable: false
    }

    let newLat = $event.coords.lat;
    let newLng = $event.coords.lng;

    this._markerService.updateMarker(updateMarker, newLat, newLng);

  }

  mapClicked($event: AGMMouseEvent) {
    this.markers.push({
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });

    localStorage.setItem('markers', JSON.stringify(this.markers));
    console.log('saved!');
  }

  addMarker() {
    console.log('Adding Marker');

    if ( this.markerDraggable === 'yes') {
      var isDraggable = true;
    } else {
      var is_Draggable = false;
    }

    var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    this.markers.push(newMarker);
    localStorage.setItem('markers', JSON.stringify(this.markers));
    console.log('saved!');
  }

  ngOnInit() {
  }

}
