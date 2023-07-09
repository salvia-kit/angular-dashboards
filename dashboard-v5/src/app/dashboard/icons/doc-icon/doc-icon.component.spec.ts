import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocIconComponent } from './doc-icon.component';

describe('DocIconComponent', () => {
  let component: DocIconComponent;
  let fixture: ComponentFixture<DocIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocIconComponent]
    });
    fixture = TestBed.createComponent(DocIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
