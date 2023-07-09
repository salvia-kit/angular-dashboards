import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTaxComponent } from './doc-tax.component';

describe('DocTaxComponent', () => {
  let component: DocTaxComponent;
  let fixture: ComponentFixture<DocTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocTaxComponent]
    });
    fixture = TestBed.createComponent(DocTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
