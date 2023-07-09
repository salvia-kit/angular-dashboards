import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgArchivedComponent } from './msg-archived.component';

describe('MsgArchivedComponent', () => {
  let component: MsgArchivedComponent;
  let fixture: ComponentFixture<MsgArchivedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgArchivedComponent]
    });
    fixture = TestBed.createComponent(MsgArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
