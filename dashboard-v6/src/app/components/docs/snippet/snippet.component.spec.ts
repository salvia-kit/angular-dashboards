import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetComponent } from './snippet.component';

describe('SnippetComponent', () => {
  let component: SnippetComponent;
  let fixture: ComponentFixture<SnippetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnippetComponent]
    });
    fixture = TestBed.createComponent(SnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
