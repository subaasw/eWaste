import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-dashboard-sidebar",
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <div class="w-64 h-screen bg-green-700 text-white">
      <div class="p-4">
        <h1 class="text-2xl font-bold">eWaste</h1>
      </div>
      <nav class="mt-4">
        <a
          *ngFor="let item of menuItems"
          [routerLink]="item.route"
          routerLinkActive="bg-green-600"
          class="py-2 px-4 hover:bg-green-600 transition-colors flex items-center gap-3"
        >
          <lucide-angular [name]="item.icon" class="my-icon h-5 w-5" />
          {{ item.label }}
        </a>
      </nav>
    </div>
  `,
})
export class UserDashboardSidebar {
  menuItems = [
    {
      label: "Dashboard",
      route: "/user/dashboard",
      icon: "layout-dashboard",
    },
    {
      label: "Schedule Pickup",
      route: "/user/schedule-pickup",
      icon: "calendar-days",
    },
    {
      label: "Pickup History",
      route: "/user/pickup-history",
      icon: "history",
    },
    {
      label: "Report Issues",
      route: "/user/report-issues",
      icon: "triangle-alert",
    },
    {
      label: "Notifications",
      route: "/user/notifications",
      icon: "bell",
    },
    { label: "Profile", route: "/user/profile", icon: "user" },
  ];
}
