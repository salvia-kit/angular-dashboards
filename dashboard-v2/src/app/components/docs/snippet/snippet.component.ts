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
  <sidebar-item-section name="Apps">
    <sidebar-item title="All apps" routerLink="/">
      <apps-icon></apps-icon>
    </sidebar-item>
    <sidebar-item title="Updates" routerLink="/admin/updates">
      <updates-icon></updates-icon>
    </sidebar-item>
  </sidebar-item-section>`;
  }
}
