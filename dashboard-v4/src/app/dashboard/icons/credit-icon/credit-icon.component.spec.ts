import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditIconComponent } from './credit-icon.component';

describe('CreditIconComponent', () => {
  let component: CreditIconComponent;
  let fixture: ComponentFixture<CreditIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditIconComponent]
    });
    fixture = TestBed.createComponent(CreditIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
