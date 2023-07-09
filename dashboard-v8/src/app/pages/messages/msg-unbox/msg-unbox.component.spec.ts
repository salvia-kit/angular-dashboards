import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgUnboxComponent } from './msg-unbox.component';

describe('MsgUnboxComponent', () => {
  let component: MsgUnboxComponent;
  let fixture: ComponentFixture<MsgUnboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgUnboxComponent]
    });
    fixture = TestBed.createComponent(MsgUnboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
