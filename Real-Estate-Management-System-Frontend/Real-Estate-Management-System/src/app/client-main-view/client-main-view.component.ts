import { Component } from '@angular/core';
import { ClienCarouselPropertyComponent } from "../clien-carousel-property/clien-carousel-property.component";
import { ClientBackgroundCarouselComponent } from "../client-background-carousel/client-background-carousel.component";
import { ClientAgentViewComponent } from "../client-agent-view/client-agent-view.component";

@Component({
  selector: 'app-client-main-view',
  imports: [ClienCarouselPropertyComponent, ClientBackgroundCarouselComponent, ClientAgentViewComponent],
  templateUrl: './client-main-view.component.html',
  styleUrl: './client-main-view.component.css'
})
export class ClientMainViewComponent {

}
