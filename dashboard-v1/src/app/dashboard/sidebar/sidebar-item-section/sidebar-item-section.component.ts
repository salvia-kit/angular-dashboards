import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-item-section',
  templateUrl: './sidebar-item-section.component.html',
  styleUrls: ['./sidebar-item-section.component.css'],
})
export class SidebarItemSectionComponent {
  @Input() name: string;

  constructor() {
    this.name = '';
  }
}
