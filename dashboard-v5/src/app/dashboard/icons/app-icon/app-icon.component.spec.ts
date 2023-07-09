import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIconComponent } from './icon.component';

describe('AppIconComponent', () => {
  let component: AppIconComponent;
  let fixture: ComponentFixture<AppIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppIconComponent]
    });
    fixture = TestBed.createComponent(AppIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
