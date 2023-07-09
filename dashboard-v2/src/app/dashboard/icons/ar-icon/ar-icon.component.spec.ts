import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArIconComponent } from './ar-icon.component';

describe('ArIconComponent', () => {
  let component: ArIconComponent;
  let fixture: ComponentFixture<ArIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArIconComponent]
    });
    fixture = TestBed.createComponent(ArIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
