import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-meantodo',
  templateUrl: './meantodo.component.html',
  styleUrls: ['./meantodo.component.css']
})
export class MeantodoComponent implements OnInit {

  constructor(private spinnerService: Ng4LoadingSpinnerService) {
    this.spinnerService.show();
  }

  ngOnInit() {
    this.spinnerService.hide();
  }

}
