import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../Entities/Property';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  private apiServerUrl = 'http://localhost:8080/property-management';
  
  propertyType: string[]=[
    'Apartment',
    'Duplex',
    'Penthhouse'
  ];
  
  
  
  
  
  
  constructor(private http: HttpClient) { }
  
  public addProperty(property: Property): Observable<Property>{
    return this.http.post<Property>(this.apiServerUrl+'/add-room',property);
  }
}
