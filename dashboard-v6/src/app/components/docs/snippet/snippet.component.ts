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
  <sidebar-item title="Users" routerLink="/">
    <user-icon></user-icon>
  </sidebar-item>

  <sidebar-item title="Medias" routerLink="/admin/medias">
    <media-icon></media-icon>
  </sidebar-item>`;
  }
}
