import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideIconComponent } from './guide-icon.component';

describe('GuideIconComponent', () => {
  let component: GuideIconComponent;
  let fixture: ComponentFixture<GuideIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuideIconComponent]
    });
    fixture = TestBed.createComponent(GuideIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
