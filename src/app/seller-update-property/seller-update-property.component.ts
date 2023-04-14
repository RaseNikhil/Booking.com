import { Component, OnInit } from '@angular/core';
import {productDetails} from  '../datatype'
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-seller-update-property',
  templateUrl: './seller-update-property.component.html',
  styleUrls: ['./seller-update-property.component.css']
})
export class SellerUpdatePropertyComponent implements OnInit {
  updateDetails:undefined | productDetails;
  updateMessage : undefined | String;
  constructor(private route:ActivatedRoute,private property:PropertyService,private router:Router){}
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.property.getPropertyById(productId).subscribe((data)=>{
      console.warn(data);
      this.updateDetails=data;
    })
  }

  submit(data:productDetails){
    if(this.updateDetails){
      data.id = this.updateDetails.id;
    }
    this.property.updateProperty(data).subscribe((result)=>{
      this.updateMessage="Property Updated";
    })


  setTimeout(() => {
    this.updateMessage=undefined;
  }, 3000);

  setTimeout(() => {
    this.router.navigate(['seller-home'])
  }, 5000);
  }
}
