import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicVacComponent } from './pic-vac.component';

describe('PicVacComponent', () => {
  let component: PicVacComponent;
  let fixture: ComponentFixture<PicVacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicVacComponent]
    });
    fixture = TestBed.createComponent(PicVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
