import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LucideAngularModule } from "lucide-angular";
import { UserDashboardSidebar } from "../components/user/sidebar.component";

@Component({
  selector: "app-user-dashboard-new",
  imports: [
    RouterModule,
    UserDashboardSidebar,
    CommonModule,
    LucideAngularModule,
  ],
  template: `
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <app-dashboard-sidebar *ngIf="hasAuthPage()" />

      <!-- Main content -->
      <div class="flex-1 overflow-y-auto">
        <!-- Top bar -->
        <div
          *ngIf="hasAuthPage()"
          class="bg-white border-b shadow-lg p-4 flex justify-between items-center"
        >
          <h2 class="text-xl font-semibold">{{ getCurrentPageTitle() }}</h2>
          <div class="flex items-center space-x-4">
            <button class="text-gray-600 hover:text-gray-800">
              <i class="fas fa-bell"></i>
            </button>
            <button
              (click)="logout()"
              class="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <lucide-angular
                name="log-out"
                class="my-icon w-4 h-4"
              />
              Logout
            </button>
          </div>
        </div>

        <!-- Page content -->
        <div class="bg-green-50 p-6">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
})
export default class UserDashboardNewComponent {
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
    {
      label: "Generate Reports",
      route: "/user/generate-reports",
      icon: "file-chart-column",
    },
    { label: "Community", route: "/user/community", icon: "users" },
    { label: "Profile", route: "/user/profile", icon: "user" },
  ];

  constructor(private router: Router) {}

  userLoggedIn = true;

  hasAuthPage(): boolean {
    return this.menuItems.some((item) => item.route === this.router.url);
  }

  getCurrentPageTitle(): string {
    const currentRoute = this.router.url;
    const currentMenuItem = this.menuItems.find(
      (item) => item.route === currentRoute
    );
    return currentMenuItem ? currentMenuItem.label : "Dashboard";
  }

  logout() {
    // Implement logout logic here
    console.log("Logging out...");
    this.router.navigate(["/login"]);
  }
}
