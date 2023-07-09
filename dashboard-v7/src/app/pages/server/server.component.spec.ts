import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerComponent } from './server.component';

describe('ServerComponent', () => {
  let component: ServerComponent;
  let fixture: ComponentFixture<ServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerComponent]
    });
    fixture = TestBed.createComponent(ServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
