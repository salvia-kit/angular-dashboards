import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureIconComponent } from './picture-icon.component';

describe('PictureIconComponent', () => {
  let component: PictureIconComponent;
  let fixture: ComponentFixture<PictureIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureIconComponent]
    });
    fixture = TestBed.createComponent(PictureIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
