import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderIconComponent } from './folder-icon.component';

describe('FolderIconComponent', () => {
  let component: FolderIconComponent;
  let fixture: ComponentFixture<FolderIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderIconComponent]
    });
    fixture = TestBed.createComponent(FolderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
