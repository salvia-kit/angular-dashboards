import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNetworkingComponent } from './event-networking.component';

describe('EventNetworkingComponent', () => {
  let component: EventNetworkingComponent;
  let fixture: ComponentFixture<EventNetworkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventNetworkingComponent]
    });
    fixture = TestBed.createComponent(EventNetworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
