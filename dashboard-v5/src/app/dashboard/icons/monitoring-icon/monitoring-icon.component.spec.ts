import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringIconComponent } from './monitoring-icon.component';

describe('MonitoringIconComponent', () => {
  let component: MonitoringIconComponent;
  let fixture: ComponentFixture<MonitoringIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonitoringIconComponent]
    });
    fixture = TestBed.createComponent(MonitoringIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
