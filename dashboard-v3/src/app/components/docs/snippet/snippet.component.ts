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
  <sidebar-item title="Dashboard" routerLink="/">
    <dashboard-icon></dashboard-icon>
  </sidebar-item>

  <sidebar-item title="Projects" routerLink="/admin/projects">
    <project-icon></project-icon>
  </sidebar-item>`;
  }
}
