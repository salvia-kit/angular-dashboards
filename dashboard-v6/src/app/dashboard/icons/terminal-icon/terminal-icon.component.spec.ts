import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalIconComponent } from './terminal-icon.component';

describe('TerminalIconComponent', () => {
  let component: TerminalIconComponent;
  let fixture: ComponentFixture<TerminalIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminalIconComponent]
    });
    fixture = TestBed.createComponent(TerminalIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
