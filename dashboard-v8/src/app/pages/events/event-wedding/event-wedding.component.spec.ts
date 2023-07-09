import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventWeddingComponent } from './event-wedding.component';

describe('EventWeddingComponent', () => {
  let component: EventWeddingComponent;
  let fixture: ComponentFixture<EventWeddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventWeddingComponent]
    });
    fixture = TestBed.createComponent(EventWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
