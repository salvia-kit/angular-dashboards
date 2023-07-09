import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleBinIconComponent } from './recycle-bin-icon.component';

describe('RecycleBinIconComponent', () => {
  let component: RecycleBinIconComponent;
  let fixture: ComponentFixture<RecycleBinIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecycleBinIconComponent]
    });
    fixture = TestBed.createComponent(RecycleBinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
