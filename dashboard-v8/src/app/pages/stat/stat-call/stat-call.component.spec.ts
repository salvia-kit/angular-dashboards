import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCallComponent } from './stat-call.component';

describe('StatCallComponent', () => {
  let component: StatCallComponent;
  let fixture: ComponentFixture<StatCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatCallComponent]
    });
    fixture = TestBed.createComponent(StatCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
