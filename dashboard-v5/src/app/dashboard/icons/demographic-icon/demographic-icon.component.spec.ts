import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicIconComponent } from './demographic-icon.component';

describe('DemographicIconComponent', () => {
  let component: DemographicIconComponent;
  let fixture: ComponentFixture<DemographicIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemographicIconComponent]
    });
    fixture = TestBed.createComponent(DemographicIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
