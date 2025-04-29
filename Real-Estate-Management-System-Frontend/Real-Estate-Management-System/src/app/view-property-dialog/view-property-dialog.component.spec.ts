import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropertyDialogComponent } from './view-property-dialog.component';

describe('ViewPropertyDialogComponent', () => {
  let component: ViewPropertyDialogComponent;
  let fixture: ComponentFixture<ViewPropertyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPropertyDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPropertyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
