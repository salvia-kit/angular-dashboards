import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageIconComponent } from './message-icon.component';

describe('MessageIconComponent', () => {
  let component: MessageIconComponent;
  let fixture: ComponentFixture<MessageIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageIconComponent]
    });
    fixture = TestBed.createComponent(MessageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
