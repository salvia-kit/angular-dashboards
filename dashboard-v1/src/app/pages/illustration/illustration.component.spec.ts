import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationComponent } from './illustration.component';

describe('IllustrationComponent', () => {
  let component: IllustrationComponent;
  let fixture: ComponentFixture<IllustrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IllustrationComponent]
    });
    fixture = TestBed.createComponent(IllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
