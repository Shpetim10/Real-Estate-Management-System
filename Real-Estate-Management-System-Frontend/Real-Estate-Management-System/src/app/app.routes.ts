import { Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyManagementComponent } from './property-management/property-management.component';

export const routes: Routes = [
    {path: "add-property", component: AddPropertyComponent},
    {path: "property-management", component: PropertyManagementComponent}
];
