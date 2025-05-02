import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropertyClientComponent } from './view-property-client.component';

describe('ViewPropertyClientComponent', () => {
  let component: ViewPropertyClientComponent;
  let fixture: ComponentFixture<ViewPropertyClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPropertyClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPropertyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
