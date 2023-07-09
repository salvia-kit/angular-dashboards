import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTripComponent } from './stat-trip.component';

describe('StatTripComponent', () => {
  let component: StatTripComponent;
  let fixture: ComponentFixture<StatTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatTripComponent]
    });
    fixture = TestBed.createComponent(StatTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
