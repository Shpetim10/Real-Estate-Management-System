import { Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    {path: "add-property", component: AddPropertyComponent},
{
    path:"add-user",component:AddUserComponent
}
];
