import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillIconComponent } from './bill-icon.component';

describe('BillIconComponent', () => {
  let component: BillIconComponent;
  let fixture: ComponentFixture<BillIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillIconComponent]
    });
    fixture = TestBed.createComponent(BillIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
