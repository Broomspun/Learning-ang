import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const items = [
      {
        id: 1,
        'name': 'Red Item',
        'description': 'This is a red item'
      },
      {
        id: 2,
        'name': 'Orange Item',
        'description': 'This is an orange item'
      },
      {
        id: 3,
        'name': 'Yellow Item',
        'description': 'This is a yellow item'
      },
      {
        id: 4,
        'name': 'Green Item',
        'description': 'This is a green item'
      },
      {
        id: 5,
        'name': 'Blue Item',
        'description': 'This is a blue item'
      },
      {
        id: 6,
        'name': 'Indigo Item',
        'description': 'This is a indigo item'
      },
      {
        id: 7,
        'name': 'Violet Item',
        'description': 'This is a violet item'
      }
    ];
    const widgets = [
      {
        'id': 1,
        'name': 'Red Widget',
        'description': 'This is a red widget'
      },
      {
        'id': 2,
        'name': 'Orange Widget',
        'description': 'This is an orange widget'
      },
      {
        'id': 3,
        'name': 'Yellow Widget',
        'description': 'This is a yellow widget'
      },
      {
        'id': 4,
        'name': 'Green Widget',
        'description': 'This is a green widget'
      },
      {
        'id': 5,
        'name': 'Blue Widget',
        'description': 'This is a blue widget'
      },
      {
        'id': 6,
        'name': 'Indigo Widget',
        'description': 'This is a indigo widget'
      },
      {
        'id': 7,
        'name': 'Violet Widget',
        'description': 'This is a violet widget'
      }
    ];
    const cribs = [
      {
        'id': 1,
        'type': 'Condo',
        'price': 220000,
        'address': '213 Grove Street',
        'description': 'Excellent place, really nice view!',
        'details': {
          'bedrooms': 2,
          'bathrooms': 1.5,
          'area': 921
        },
        'image': 'crib-1'
      },
      {
        'id': 2,
        'type': 'House',
        'price': 410500,
        'address': '7823 Winding Way',
        'description': 'Beautiful home with lots of space for a large family.',
        'details': {
          'bedrooms': 4,
          'bathrooms': 3,
          'area': 2145
        },
        'image': 'crib-2'
      },
      {
        'id': 3,
        'type': 'Duplex',
        'price': 395000,
        'address': '834 River Lane',
        'description': 'Great neighbourhood and lot\'s of nice green space.',
        'details': {
          'bedrooms': 3,
          'bathrooms': 2.5,
          'area': 1500
        },
        'image': 'crib-3'
      },
      {
        'id': 4,
        'type': 'House',
        'price': 755990,
        'address': '7807 Forest Avenue',
        'description': 'Best house on the block!',
        'details': {
          'bedrooms': 6,
          'bathrooms': 4.5,
          'area': 3230
        },
        'image': 'crib-4'
      },
      {
        'id': 5,
        'type': 'Condo',
        'price': 210500,
        'address': '1857 Andover Court',
        'description': 'Nice little condo with room to grow.',
        'details': {
          'bedrooms': 2,
          'bathrooms': 1.5,
          'area': 1023
        },
        'image': 'crib-5'
      },
      {
        'id': 6,
        'type': 'House',
        'price': 334900,
        'address': '7398 East Avenue',
        'description': 'You\'ll love the view!',
        'details': {
          'bedrooms': 4,
          'bathrooms': 2.5,
          'area': 1788
        },
        'image': 'crib-6'
      }
    ]
    return {items: items, widgets: widgets, cribs: cribs};
  }
}
