import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsIconComponent } from './apps-icon.component';

describe('AppsIconComponent', () => {
  let component: AppsIconComponent;
  let fixture: ComponentFixture<AppsIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppsIconComponent]
    });
    fixture = TestBed.createComponent(AppsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
