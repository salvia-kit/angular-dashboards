import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticIconComponent } from './analytic-icon.component';

describe('AnalyticIconComponent', () => {
  let component: AnalyticIconComponent;
  let fixture: ComponentFixture<AnalyticIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticIconComponent]
    });
    fixture = TestBed.createComponent(AnalyticIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
