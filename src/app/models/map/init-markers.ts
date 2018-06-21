export class InitMarkers {
  load() {
    if (localStorage.getItem('markers') == null || localStorage.getItem('markers') === undefined) {
      console.log('No markers found .... Creating ...');

      const markers = [
        {
          lat: 51.673858,
          lng: 7.815982,
          name: 'Company 1',
          draggable: true
        },
        {
          lat: 51.373858,
          lng: 7.215982,
          name: 'Company 2',
          draggable: false
        },
        {
          lat: 51.723858,
          lng: 7.895982,
          name: 'Company 3',
          draggable: true
        }
      ];
      localStorage.setItem('markers', JSON.stringify(markers));
    } else {
      localStorage.getItem('markers');
    }
  }
}
