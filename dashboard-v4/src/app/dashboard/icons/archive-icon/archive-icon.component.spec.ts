import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveIconComponent } from './archive-icon.component';

describe('ArchiveIconComponent', () => {
  let component: ArchiveIconComponent;
  let fixture: ComponentFixture<ArchiveIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveIconComponent]
    });
    fixture = TestBed.createComponent(ArchiveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
