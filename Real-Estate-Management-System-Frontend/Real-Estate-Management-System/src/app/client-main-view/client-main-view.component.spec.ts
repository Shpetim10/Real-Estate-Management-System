import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMainViewComponent } from './client-main-view.component';

describe('ClientMainViewComponent', () => {
  let component: ClientMainViewComponent;
  let fixture: ComponentFixture<ClientMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientMainViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
