import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicBirthdayComponent } from './pic-birthday.component';

describe('PicBirthdayComponent', () => {
  let component: PicBirthdayComponent;
  let fixture: ComponentFixture<PicBirthdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicBirthdayComponent]
    });
    fixture = TestBed.createComponent(PicBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
