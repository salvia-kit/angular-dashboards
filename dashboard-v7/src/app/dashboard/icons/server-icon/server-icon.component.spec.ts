import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerIconComponent } from './server-icon.component';

describe('ServerIconComponent', () => {
  let component: ServerIconComponent;
  let fixture: ComponentFixture<ServerIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerIconComponent]
    });
    fixture = TestBed.createComponent(ServerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
