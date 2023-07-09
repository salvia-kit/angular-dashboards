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

  <sidebar-item title="Bills" routerLink="/admin/bills">
    <bill-icon></bill-icon>
  </sidebar-item>`;
  }
}
