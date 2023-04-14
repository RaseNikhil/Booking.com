import { Component, OnInit } from '@angular/core';
import { productDetails } from '../datatype';
import { PropertyService } from '../services/property.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-seller-add-property',
  templateUrl: './seller-add-property.component.html',
  styleUrls: ['./seller-add-property.component.css']
})
export class SellerAddPropertyComponent  implements OnInit{
  constructor(private properties:PropertyService){}
  propertyAdded:String | undefined;
  ngOnInit(): void {
  }
  submit(data:productDetails){
    this.properties.addProperty(data).subscribe((result)=>{
      if(result){
        this.propertyAdded="Property Added Successfully"
      }

    });

    setTimeout(()=>{
      this.propertyAdded=undefined
      window.location.reload();
    },3000)
  }
}
