import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guides/documentation', component: DocumentationComponent },
  { path: 'documents/taxes', component: DocTaxComponent },
  { path: 'documents/insurance', component: DocInsuranceComponent },
  { path: 'documents/travel', component: DocTravelComponent },
  { path: 'messages/archived', component: MsgArchivedComponent },
  { path: 'messages/unbox', component: MsgUnboxComponent },
  { path: 'messages/unread', component: MsgUnreadComponent },
  { path: 'pictures/vacations', component: PicVacComponent },
  { path: 'pictures/anniversary', component: PicBirthdayComponent },
  { path: 'pictures/university', component: PicUnivComponent },
  { path: 'statistics/finances', component: StatFinanceComponent },
  { path: 'statistics/call-stats', component: StatCallComponent },
  { path: 'statistics/trip-logs', component: StatTripComponent },
  { path: 'events/weddings', component: EventWeddingComponent },
  { path: 'events/networking', component: EventNetworkingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
