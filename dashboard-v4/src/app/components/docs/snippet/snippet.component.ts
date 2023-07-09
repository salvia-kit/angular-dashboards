import { Component } from '@angular/core';

@Component({
  selector: 'snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css'],
})
export class SnippetComponent {
  snippets: string;

  constructor() {
    this.snippets = `
  <sidebar-item title="Home" routerLink="/">
    <home-icon></home-icon>
  </sidebar-item>

  <sidebar-item title="Status" routerLink="/admin/status">
    <status-icon></status-icon>
  </sidebar-item>`;
  }
}
