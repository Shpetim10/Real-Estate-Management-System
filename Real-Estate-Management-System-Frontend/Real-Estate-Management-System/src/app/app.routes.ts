import { Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyManagementComponent } from './property-management/property-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LogInComponent } from './log-in/log-in.component';
import { ClientMainViewComponent } from './client-main-view/client-main-view.component';
import { ClienCarouselPropertyComponent } from './clien-carousel-property/clien-carousel-property.component';
import { ClientAgentViewComponent } from './client-agent-view/client-agent-view.component';
import { ViewPropertyClientComponent } from './view-property-client/view-property-client.component';

export const routes: Routes = [
    {path: "add-property", component: AddPropertyComponent},
    {path: "property-management", component: PropertyManagementComponent},
    {path: "add-user",component: AddUserComponent},
    {path: "log-in", component: LogInComponent},
    {path: "horizon-home" , component: ClientMainViewComponent},
    {path: "carousel", component: ClientAgentViewComponent},
    {path: "client-property", component: ViewPropertyClientComponent},
    { path: '**', redirectTo: 'horizon-home', pathMatch: 'full' }
];

