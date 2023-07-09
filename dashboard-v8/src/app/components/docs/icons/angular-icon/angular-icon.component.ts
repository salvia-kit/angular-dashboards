import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-icon',
  templateUrl: './angular-icon.component.html',
  styleUrls: ['./angular-icon.component.css'],
})
export class AngularIconComponent {
  @Input() color: 'red' | 'yellow';

  constructor() {
    this.color = 'red';
  }
}
