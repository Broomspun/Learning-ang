import {Component, OnInit} from '@angular/core';
import {CribService} from '../../services/cribs/crib.service';
import {PriceInfo} from '../../interfaces/cribs/price-info';

@Component({
  selector: 'app-cribs',
  templateUrl: './cribs.component.html',
  styleUrls: ['./cribs.component.css']
})
export class CribsComponent implements OnInit {
  existingListing: any;
  cribs: any;
  bShowDetails = [];
  addListing: boolean;
  editListing: boolean;
  priceInfo: PriceInfo;
  nCountsCribs: number;

  address = '';
  description = '';
  price = 200000;
  type = 'House';
  detail = {
    'bedrooms': 3,
    'bathrooms': 3,
    'area': 1500
  };

  constructor(private _cribService: CribService) {
    this._cribService.getCribs().subscribe(cribs => {
      this.cribs = cribs;
      this.nCountsCribs = this.cribs.length;

      for ( let i = 0; i < this.nCountsCribs; i++) {
        this.bShowDetails.push(false);
      }
    });

    this.addListing = false;
    this.editListing = false;

    this.priceInfo = {
      min: 100000,
      max: 1000000
    };
  }

  toggleAddListing() {
    this.addListing = !this.addListing;

  }

  toggleDetails(i) {
    this.bShowDetails[i] = !this.bShowDetails[i];
    this.addListing = false;
    this.editListing = false;
  }

  editCrib(crib) {
    this.editListing = true;
    this.addListing = false;
    this.existingListing = crib;
  }

  addCrib() {
    const newListing = {
      'type': this.type,
      'price': this.price,
      'address': this.address,
      'description': this.description,
      'details': this.detail,
      'image': 'default-crib'
    };

    this._cribService.createCrib(newListing)
      .subscribe(res => {
        this.cribs.push(newListing);
      });

    this.addListing = false;
    this.editListing = false;
  }

  saveCribEdit() {
    this.editListing = false;
    this.existingListing = {};
  }

  deleteCrib(existingListing) {
    const index = this.cribs.indexOf(existingListing);
    this.cribs.splice(index, 1);
    this.existingListing = {};
    this.editListing = false;
  }

  changeMinPrice(price) {
    this.priceInfo.min = price;
  }
  changeMaxPrice(price) {
    this.priceInfo.max = price;
  }
  ngOnInit() {
  }

}
