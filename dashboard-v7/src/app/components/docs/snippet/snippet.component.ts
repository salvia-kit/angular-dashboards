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
  <sidebar-item-section name="Applications">
    <sidebar-item title="Users" routerLink="/">
      <user-icon></user-icon>
    </sidebar-item>
    <sidebar-item title="Medias" routerLink="/admin/medias">
      <media-icon></media-icon>
    </sidebar-item>
    <sidebar-item title="Contacts" routerLink="/admin/contacts">
      <contact-icon></contact-icon>
    </sidebar-item>
  </sidebar-item-section>`;
  }
}
