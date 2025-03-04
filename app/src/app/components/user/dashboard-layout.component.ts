import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { UserDashboardSidebar } from "~components/user/sidebar.component"

@Component({
  selector: "app-user-dashboard-new",
  imports: [RouterModule, UserDashboardSidebar],
  template: `
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <app-dashboard-sidebar />

      <!-- Main content -->
      <div class="flex-1 overflow-y-auto">
        <!-- Top bar -->
        <div class="bg-white shadow-md p-4 flex justify-between items-center">
          <h2 class="text-xl font-semibold">{{ getCurrentPageTitle() }}</h2>
          <div class="flex items-center space-x-4">
            <button class="text-gray-600 hover:text-gray-800">
              <i class="fas fa-bell"></i>
            </button>
            <button
              (click)="logout()"
              class="text-gray-600 hover:text-gray-800"
            >
              <i name="log-out"></i> Logout
            </button>
          </div>
        </div>

        <!-- Page content -->
        <div class="p-6">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
})
export class UserDashboardNewComponent {
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
