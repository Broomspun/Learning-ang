import { Injectable } from '@angular/core';
import { InitMarkers} from '../../models/map/init-markers';
import { Marker} from '../../interfaces/map/marker';

@Injectable({
  providedIn: 'root'
})
export class MarkerService extends InitMarkers {

  constructor() {
    super();
    console.log('MarkerService Initialized....');
    this.load();
  }

  getMarkers() {
    const markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  updateMarker(marker, newLat, newLng) {
    const markers = JSON.parse(localStorage.getItem('markers'));

    for (let i = 0; i < markers.length; i++) {
      if (marker.lat === markers[i].lat && marker.lng === markers[i].lng) {
        markers[i].lat = newLat;
        markers[i].lng = newLng;
      }
    }
    localStorage.setItem('markers', JSON.stringify(markers));
  }
}
