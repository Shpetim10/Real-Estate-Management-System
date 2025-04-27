import { Injectable } from '@angular/core';
import { Property } from '../Entities/Property';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  private apiServerUrl = 'http://localhost:8080/property-management';
  
  constructor(private http: HttpClient) { }
  
  propertyType: string[]=[
    'APARTAMENT',
    'DUPLEX',
    'PENTHOUSE'
  ];
  
  propertyStatus: string[]=[
    'AVAILABLE',
    'ON_SALE',
    'SOLD',
    'ON_CONTRACT',
  ];
  
  features: { name: string, icon: string }[] = [
    { name: 'KITCHEN', icon: 'bx bx-bowl-hot' }, // Represents cooking or kitchenware
    { name: 'LIVING_ROOM', icon: 'bx bx-sofa' }, // A sofa icon fits well for a living space
    { name: 'AIR_CONDITIONER', icon: 'bx bx-wind' }, // Wind symbol represents air circulation
    { name: 'BALCONY', icon: 'bx bx-home' }, // Home icon can symbolize an outdoor extension
    { name: 'STORAGE_SPACE', icon: 'bx bx-box' }, // Box icon represents storage
    { name: 'GARAGE', icon: 'bx bx-car' }, // Car icon fits a garage setting
    { name: 'FURNISHED', icon: 'bx bx-chair' }, // Chair icon represents furniture
  ];
  
  public addProperty(property: Property): Observable<Property>{
    return this.http.post<Property>(this.apiServerUrl+'/add-property',property);
  }
}
