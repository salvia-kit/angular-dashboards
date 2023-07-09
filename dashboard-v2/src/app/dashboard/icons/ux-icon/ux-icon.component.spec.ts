import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxIconComponent } from './ux-icon.component';

describe('UxIconComponent', () => {
  let component: UxIconComponent;
  let fixture: ComponentFixture<UxIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UxIconComponent]
    });
    fixture = TestBed.createComponent(UxIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
