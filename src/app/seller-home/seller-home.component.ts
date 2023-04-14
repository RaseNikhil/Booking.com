import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { productDetails } from '../datatype';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  properties: undefined | productDetails[];
  constructor(private property: PropertyService) {}
  deleteMessage: undefined | String;

  ngOnInit(): void {
    this.list();
  }

  deleteProperty(id: number) {
    this.property.deletePropety(id).subscribe((result) => {
      if (result) {
        this.deleteMessage = 'Property Deleted';
      }
      this.list();
    });
    setTimeout(() => {
      this.deleteMessage = undefined;
    }, 3000);
  }
  
  list() {
    this.property.propertyList().subscribe((result) => {
      if (result) {
        this.properties = result;
      }
    });
  }
}
