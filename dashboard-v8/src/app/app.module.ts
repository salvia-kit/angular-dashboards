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
import { PicVacComponent } from './pages/pictures/pic-vac/pic-vac.component';
import { DocTaxComponent } from './pages/documents/doc-tax/doc-tax.component';
import { StatCallComponent } from './pages/stat/stat-call/stat-call.component';
import { StatTripComponent } from './pages/stat/stat-trip/stat-trip.component';
import { PicUnivComponent } from './pages/pictures/pic-univ/pic-univ.component';
import { MsgUnboxComponent } from './pages/messages/msg-unbox/msg-unbox.component';
import { MsgUnreadComponent } from './pages/messages/msg-unread/msg-unread.component';
import { DocTravelComponent } from './pages/documents/doc-travel/doc-travel.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { StatFinanceComponent } from './pages/stat/stat-finance/stat-finance.component';
import { MsgArchivedComponent } from './pages/messages/msg-archived/msg-archived.component';
import { PicBirthdayComponent } from './pages/pictures/pic-birthday/pic-birthday.component';
import { EventWeddingComponent } from './pages/events/event-wedding/event-wedding.component';
import { DocInsuranceComponent } from './pages/documents/doc-insurance/doc-insurance.component';
import { EventNetworkingComponent } from './pages/events/event-networking/event-networking.component';

// icons
import { DocIconComponent } from './dashboard/icons/doc-icon/doc-icon.component';
import { CollapseComponent } from './dashboard/sidebar/collapse/collapse.component';
import { StatIconComponent } from './dashboard/icons/stat-icon/stat-icon.component';
import { EventIconComponent } from './dashboard/icons/event-icon/event-icon.component';
import { GuideIconComponent } from './dashboard/icons/guide-icon/guide-icon.component';
import { MessageIconComponent } from './dashboard/icons/message-icon/message-icon.component';
import { PictureIconComponent } from './dashboard/icons/picture-icon/picture-icon.component';

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
    PicVacComponent,
    DocTaxComponent,
    PicUnivComponent,
    MsgUnboxComponent,
    StatCallComponent,
    StatTripComponent,
    DocTravelComponent,
    MsgUnreadComponent,
    MsgArchivedComponent,
    PicBirthdayComponent,
    StatFinanceComponent,
    DocInsuranceComponent,
    EventWeddingComponent,
    DocumentationComponent,
    EventNetworkingComponent,

    // icons
    DocIconComponent,
    StatIconComponent,
    CollapseComponent,
    EventIconComponent,
    GuideIconComponent,
    MessageIconComponent,
    PictureIconComponent,

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
