import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CribService {

  constructor(private http: HttpClient) {
    console.log('Crib Service ready ...');
  }

  getCribs() {
    console.log('Fetching Cribs...');
    return this.http.get('data/cribs.json');
  }
}
