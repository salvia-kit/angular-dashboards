import { Component } from '@angular/core';

@Component({
  selector: 'collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css'],
})
export class CollapseComponent {
  isActive: boolean;
  constructor() {
    this.isActive = false;
  }

  toggle() {
    this.isActive = !this.isActive;
  }
}
