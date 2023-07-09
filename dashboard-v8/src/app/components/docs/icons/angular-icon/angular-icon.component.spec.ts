import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIconComponent } from './angular-icon.component';

describe('AngularIconComponent', () => {
  let component: AngularIconComponent;
  let fixture: ComponentFixture<AngularIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularIconComponent]
    });
    fixture = TestBed.createComponent(AngularIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
