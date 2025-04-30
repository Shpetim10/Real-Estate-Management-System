import { Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyManagementComponent } from './property-management/property-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
    {path: "add-property", component: AddPropertyComponent},
    {path: "property-management", component: PropertyManagementComponent},
    {path: "add-user",component: AddUserComponent},
    {path: "log-in", component: LogInComponent}
];
