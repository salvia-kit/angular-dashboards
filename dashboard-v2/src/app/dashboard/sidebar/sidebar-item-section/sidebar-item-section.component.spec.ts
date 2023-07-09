import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItemSectionComponent } from './sidebar-item-section.component';

describe('SidebarItemSectionComponent', () => {
  let component: SidebarItemSectionComponent;
  let fixture: ComponentFixture<SidebarItemSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarItemSectionComponent]
    });
    fixture = TestBed.createComponent(SidebarItemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
