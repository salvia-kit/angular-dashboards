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
import { TaskComponent } from './pages/task/task.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';
import { ProjectComponent } from './pages/project/project.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { TimeManageComponent } from './pages/time-manage/time-manage.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

// icons
import { DocIconComponent } from './dashboard/icons/doc-icon/doc-icon.component';
import { TaskIconComponent } from './dashboard/icons/task-icon/task-icon.component';
import { ReportIconComponent } from './dashboard/icons/report-icon/report-icon.component';
import { ProjectIconComponent } from './dashboard/icons/project-icon/project-icon.component';
import { SettingsIconComponent } from './dashboard/icons/settings-icon/settings-icon.component';
import { CalendarIconComponent } from './dashboard/icons/calendar-icon/calendar-icon.component';
import { DashboardIconComponent } from './dashboard/icons/dashboard-icon/dashboard-icon.component';
import { TimeManageIconComponent } from './dashboard/icons/time-manage-icon/time-manage-icon.component';

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
    TaskComponent,
    HomeComponent,
    ReportComponent,
    ProjectComponent,
    SettingsComponent,
    CalendarComponent,
    TimeManageComponent,
    DocumentationComponent,

    // icons
    DocIconComponent,
    TaskIconComponent,
    ReportIconComponent,
    ProjectIconComponent,
    SettingsIconComponent,
    CalendarIconComponent,
    DashboardIconComponent,
    TimeManageIconComponent,

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
  exports: [DocComponent],
})
export class AppModule {}
