import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './pages/task/task.component';
import { ReportComponent } from './pages/report/report.component';
import { ProjectComponent } from './pages/project/project.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TimeManageComponent } from './pages/time-manage/time-manage.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/projects', component: ProjectComponent },
  { path: 'admin/tasks', component: TaskComponent },
  { path: 'admin/calendar', component: CalendarComponent },
  { path: 'admin/time-manage', component: TimeManageComponent },
  { path: 'admin/reports', component: ReportComponent },
  { path: 'admin/settings', component: SettingsComponent },
  { path: 'admin/documentation', component: DocumentationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
