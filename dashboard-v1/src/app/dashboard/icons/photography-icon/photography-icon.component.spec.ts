import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyIconComponent } from './photography-icon.component';

describe('PhotographyIconComponent', () => {
  let component: PhotographyIconComponent;
  let fixture: ComponentFixture<PhotographyIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotographyIconComponent]
    });
    fixture = TestBed.createComponent(PhotographyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
