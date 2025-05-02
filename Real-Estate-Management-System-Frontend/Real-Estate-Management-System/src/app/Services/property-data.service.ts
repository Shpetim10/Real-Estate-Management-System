import { Injectable } from '@angular/core';
import { Property } from '../Entities/Property';
@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {

  constructor() { }
  
  private _property: Property | null = null;

  set property(value: Property | null) {
    this._property = value;
  }

  get property(): Property | null {
    return this._property;
  }
}
