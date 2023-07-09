import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeManageComponent } from './time-manage.component';

describe('TimeManageComponent', () => {
  let component: TimeManageComponent;
  let fixture: ComponentFixture<TimeManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeManageComponent]
    });
    fixture = TestBed.createComponent(TimeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
