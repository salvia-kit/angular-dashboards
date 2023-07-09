import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignIconComponent } from './graphic-design-icon.component';

describe('GraphicDesignIconComponent', () => {
  let component: GraphicDesignIconComponent;
  let fixture: ComponentFixture<GraphicDesignIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicDesignIconComponent]
    });
    fixture = TestBed.createComponent(GraphicDesignIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
