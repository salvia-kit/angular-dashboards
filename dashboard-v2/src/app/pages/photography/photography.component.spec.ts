import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyComponent } from './photography.component';

describe('PhotographyComponent', () => {
  let component: PhotographyComponent;
  let fixture: ComponentFixture<PhotographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotographyComponent]
    });
    fixture = TestBed.createComponent(PhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
