import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBackgroundCarouselComponent } from './client-background-carousel.component';

describe('ClientBackgroundCarouselComponent', () => {
  let component: ClientBackgroundCarouselComponent;
  let fixture: ComponentFixture<ClientBackgroundCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientBackgroundCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientBackgroundCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
