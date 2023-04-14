import { Injectable } from '@angular/core';
import { productDetails } from '../datatype';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private http: HttpClient) {}

  addProperty(data: productDetails) {
    return this.http.post('http://localhost:3000/properties', data);
  }

  propertyList() {
    return this.http.get<productDetails[]>('http://localhost:3000/properties');
  }

  deletePropety(id: number) {
    return this.http.delete(`http://localhost:3000/properties/${id}`);
  }

  getPropertyById(id: string) {
    return this.http.get<productDetails>(
      `http://localhost:3000/properties/${id}`
    );
  }

  updateProperty(productDetails:productDetails){
    return this.http.put<productDetails>(`http://localhost:3000/properties/${productDetails.id}`,productDetails)
  }
}
