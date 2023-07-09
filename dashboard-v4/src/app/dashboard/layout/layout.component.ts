import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'dashboard-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  constructor(private router: Router, private dashboard: DashboardService) {
    this.router.events.subscribe((event: Event) => {
      this.dashboard.setCurrentRoute(this.router.url);
      if (event instanceof NavigationEnd) {
        if (this.dashboard.sidebarOpen) {
          this.dashboard.closeSidebar();
        }
      }
    });
  }

  ngOnInit() {
    // set the html tag attribute overflow to hidden when component is mounted
    document.documentElement.style.overflow = 'hidden';
  }
}
