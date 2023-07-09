import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationIconComponent } from './illustration-icon.component';

describe('IllustrationIconComponent', () => {
  let component: IllustrationIconComponent;
  let fixture: ComponentFixture<IllustrationIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IllustrationIconComponent]
    });
    fixture = TestBed.createComponent(IllustrationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
