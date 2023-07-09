import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgUnreadComponent } from './msg-unread.component';

describe('MsgUnreadComponent', () => {
  let component: MsgUnreadComponent;
  let fixture: ComponentFixture<MsgUnreadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgUnreadComponent]
    });
    fixture = TestBed.createComponent(MsgUnreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
