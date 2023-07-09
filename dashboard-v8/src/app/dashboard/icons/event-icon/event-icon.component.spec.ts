import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventIconComponent } from './event-icon.component';

describe('EventIconComponent', () => {
  let component: EventIconComponent;
  let fixture: ComponentFixture<EventIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventIconComponent]
    });
    fixture = TestBed.createComponent(EventIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
