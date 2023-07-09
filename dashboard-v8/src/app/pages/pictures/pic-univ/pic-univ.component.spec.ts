import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicUnivComponent } from './pic-univ.component';

describe('PicUnivComponent', () => {
  let component: PicUnivComponent;
  let fixture: ComponentFixture<PicUnivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicUnivComponent]
    });
    fixture = TestBed.createComponent(PicUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
