import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeManageIconComponent } from './time-manage-icon.component';

describe('TimeManageIconComponent', () => {
  let component: TimeManageIconComponent;
  let fixture: ComponentFixture<TimeManageIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeManageIconComponent]
    });
    fixture = TestBed.createComponent(TimeManageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
