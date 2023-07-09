import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocInsuranceComponent } from './doc-insurance.component';

describe('DocInsuranceComponent', () => {
  let component: DocInsuranceComponent;
  let fixture: ComponentFixture<DocInsuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocInsuranceComponent]
    });
    fixture = TestBed.createComponent(DocInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
