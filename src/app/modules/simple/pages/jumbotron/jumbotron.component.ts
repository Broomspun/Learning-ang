import { Component, OnInit } from '@angular/core';
import {WooService} from '../../../../services/simple/woo.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  jbtHeading: string;
  jbtText: string;
  jbtBtnText: string;
  jbtBtnUrl: string;
  products: any[];

  constructor(private wooservice: WooService) {
    this.jbtHeading = 'Hello, world!';
    this.jbtText = 'This is a template for a simple marketing or informational website. ' +
      'It includes a large callout called a jumbotron and three supporting pieces of content. ' +
      'Use it as a starting point to create something more unique.';
    this.jbtBtnText = 'Read More';
    this.jbtBtnUrl = '/about';

  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.wooservice.getAllProducts().subscribe( res => {
      this.products = res;
      console.log(res);
    });
  }
}
