import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienCarouselPropertyComponent } from './clien-carousel-property.component';

describe('ClienCarouselPropertyComponent', () => {
  let component: ClienCarouselPropertyComponent;
  let fixture: ComponentFixture<ClienCarouselPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienCarouselPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienCarouselPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
