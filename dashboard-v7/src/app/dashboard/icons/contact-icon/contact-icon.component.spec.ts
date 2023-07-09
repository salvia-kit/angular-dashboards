import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIconComponent } from './contact-icon.component';

describe('ContactIconComponent', () => {
  let component: ContactIconComponent;
  let fixture: ComponentFixture<ContactIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactIconComponent]
    });
    fixture = TestBed.createComponent(ContactIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
