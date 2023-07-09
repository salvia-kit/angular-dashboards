import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportIconComponent } from './report-icon.component';

describe('ReportIconComponent', () => {
  let component: ReportIconComponent;
  let fixture: ComponentFixture<ReportIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportIconComponent]
    });
    fixture = TestBed.createComponent(ReportIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
