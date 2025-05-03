import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAgentViewComponent } from './client-agent-view.component';

describe('ClientAgentViewComponent', () => {
  let component: ClientAgentViewComponent;
  let fixture: ComponentFixture<ClientAgentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAgentViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAgentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
