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
    { name: 'KITCHEN', icon: 'bx bx-restaurant' }, // Represents cooking or kitchenware
    { name: 'LIVING_ROOM', icon: 'bx bx-tv' }, // A TV icon fits well for a living space
    { name: 'AIR_CONDITIONER', icon: 'bx bx-wind' }, // Wind symbol represents air circulation
    { name: 'BALCONY', icon: 'bx bx-landscape' }, // Symbolizes an outdoor extension
    { name: 'STORAGE_SPACE', icon: 'bx bx-package' }, // Represents storage better than a box
    { name: 'GARAGE', icon: 'bx bx-garage' }, // Specifically for garage space
    { name: 'FURNISHED', icon: 'bx bx-chair' }, // Represents furniture properly
];
  
  findIconNameByFeatureName(feature: string): string | void {
    const foundFeature = this.features.find(element => element.name === feature);
    return foundFeature ? foundFeature.icon : undefined;
  }
  
  public addProperty(property: Property): Observable<Property>{
    return this.http.post<Property>(this.apiServerUrl+'/add-property',property);
  }
  
  public getAllProperties(){
    return this.http.get<Property[]>(this.apiServerUrl+"/get-properties");
  }
  
  public deleteProperty(propertyId: number){
    return this.http.delete<Property>(this.apiServerUrl+"/delete-property/"+propertyId);
  }
  
  public updateProperty(oldProperty: Property, updatedPropety: Property){
    return this.http.put<Property>(this.apiServerUrl+"/update-property/"+oldProperty.propertyId,updatedPropety);
  }
}
