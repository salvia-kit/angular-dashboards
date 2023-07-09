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
  <collapse>
    <div item class="flex">
      <doc-icon></doc-icon> <span class="pl-3">Documents</span>
    </div>
    <div panel>
      <sidebar-item title="Taxes" routerLink="/documents/taxes" />
      <sidebar-item title="Travel" routerLink="/documents/travel" />
      <sidebar-item title="Insurance" routerLink="/documents/insurance" />
    </div>
  </collapse>`;
  }
}
