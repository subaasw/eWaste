import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-admin-layout",
  imports: [RouterModule, CommonModule],
  template: `
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <div class="w-64 bg-blue-800 text-white">
        <div class="p-4">
          <h1 class="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav class="mt-4">
          <a
            *ngFor="let item of menuItems"
            [routerLink]="item.route"
            routerLinkActive="bg-blue-700"
            class="block py-2 px-4 hover:bg-blue-700 transition-colors"
          >
            <i [class]="item.icon" class="mr-2"></i>
            {{ item.label }}
          </a>
        </nav>
      </div>

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
              <i class="fas fa-sign-out-alt"></i> Logout
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
export class AdminLayoutComponent {
  menuItems = [
    {
      label: "Dashboard",
      route: "/admin/dashboard",
      icon: "fas fa-tachometer-alt",
    },
    { label: "Manage Users", route: "/admin/users", icon: "fas fa-users" },
    {
      label: "Manage Communities",
      route: "/admin/communities",
      icon: "fas fa-city",
    },
    { label: "Waste Pickups", route: "/admin/pickups", icon: "fas fa-truck" },
    {
      label: "Manage Issues",
      route: "/admin/issues",
      icon: "fas fa-exclamation-triangle",
    },
    {
      label: "Generate Reports",
      route: "/admin/reports",
      icon: "fas fa-chart-bar",
    },
    { label: "Settings", route: "/admin/settings", icon: "fas fa-cog" },
  ];

  constructor(private router: Router) {}

  getCurrentPageTitle(): string {
    const currentRoute = this.router.url;
    const currentMenuItem = this.menuItems.find(
      (item) => item.route === currentRoute
    );
    return currentMenuItem ? currentMenuItem.label : "Admin Dashboard";
  }

  logout() {
    // Implement logout logic here
    console.log("Logging out...");
    this.router.navigate(["/login"]);
  }
}
