import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskIconComponent } from './task-icon.component';

describe('TaskIconComponent', () => {
  let component: TaskIconComponent;
  let fixture: ComponentFixture<TaskIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskIconComponent]
    });
    fixture = TestBed.createComponent(TaskIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
