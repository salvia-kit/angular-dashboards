import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTravelComponent } from './doc-travel.component';

describe('DocTravelComponent', () => {
  let component: DocTravelComponent;
  let fixture: ComponentFixture<DocTravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocTravelComponent]
    });
    fixture = TestBed.createComponent(DocTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
