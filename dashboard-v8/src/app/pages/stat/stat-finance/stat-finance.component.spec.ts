import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatFinanceComponent } from './stat-finance.component';

describe('StatFinanceComponent', () => {
  let component: StatFinanceComponent;
  let fixture: ComponentFixture<StatFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatFinanceComponent]
    });
    fixture = TestBed.createComponent(StatFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
