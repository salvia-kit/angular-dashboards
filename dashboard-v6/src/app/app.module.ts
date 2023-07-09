import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// dashboard components
import { LayoutComponent } from './dashboard/layout/layout.component';
import { TopBarComponent } from './dashboard/top-bar/top-bar.component';
import { OverlayComponent } from './dashboard/overlay/overlay.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar/sidebar.component';
import { SidebarItemComponent } from './dashboard/sidebar/sidebar-item/sidebar-item.component';
import { SidebarItemsComponent } from './dashboard/sidebar/sidebar-items/sidebar-items.component';
import { SidebarHeaderComponent } from './dashboard/sidebar/sidebar-header/sidebar-header.component';

// pages
import { HomeComponent } from './pages/home/home.component';
import { MediaComponent } from './pages/media/media.component';
import { ServerComponent } from './pages/server/server.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TerminalComponent } from './pages/terminal/terminal.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RecycleBinComponent } from './pages/recycle-bin/recycle-bin.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

// icons
import { DocIconComponent } from './dashboard/icons/doc-icon/doc-icon.component';
import { UserIconComponent } from './dashboard/icons/user-icon/user-icon.component';
import { MediaIconComponent } from './dashboard/icons/media-icon/media-icon.component';
import { ServerIconComponent } from './dashboard/icons/server-icon/server-icon.component';
import { ContactIconComponent } from './dashboard/icons/contact-icon/contact-icon.component';
import { TerminalIconComponent } from './dashboard/icons/terminal-icon/terminal-icon.component';
import { SettingsIconComponent } from './dashboard/icons/settings-icon/settings-icon.component';
import { RecycleBinIconComponent } from './dashboard/icons/recycle-bin-icon/recycle-bin-icon.component';

// others
import { DocComponent } from './components/docs/doc/doc.component';
import { ContentComponent } from './components/content/content.component';
import { SnippetComponent } from './components/docs/snippet/snippet.component';
import { FolderIconComponent } from './components/docs/icons/folder-icon/folder-icon.component';
import { AngularIconComponent } from './components/docs/icons/angular-icon/angular-icon.component';
@NgModule({
  declarations: [
    AppComponent,

    // dashboard
    LayoutComponent,
    TopBarComponent,
    OverlayComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarItemsComponent,
    SidebarHeaderComponent,

    // pages
    HomeComponent,
    MediaComponent,
    ServerComponent,
    ContactComponent,
    TerminalComponent,
    SettingsComponent,
    RecycleBinComponent,
    DocumentationComponent,

    // icons
    DocIconComponent,
    UserIconComponent,
    MediaIconComponent,
    ServerIconComponent,
    ContactIconComponent,
    TerminalIconComponent,
    SettingsIconComponent,
    RecycleBinIconComponent,

    // others
    DocComponent,
    SnippetComponent,
    ContentComponent,
    FolderIconComponent,
    AngularIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
