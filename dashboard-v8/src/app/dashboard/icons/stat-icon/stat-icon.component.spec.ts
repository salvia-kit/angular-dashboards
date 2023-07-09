import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatIconComponent } from './stat-icon.component';

describe('StatIconComponent', () => {
  let component: StatIconComponent;
  let fixture: ComponentFixture<StatIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatIconComponent]
    });
    fixture = TestBed.createComponent(StatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
