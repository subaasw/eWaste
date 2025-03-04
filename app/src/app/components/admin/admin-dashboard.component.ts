import { Component, type OnInit } from "@angular/core";

@Component({
  selector: "app-admin-dashboard",
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Total Users</h3>
        <p class="text-3xl font-bold text-blue-600">{{ totalUsers }}</p>
      </div>
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Total Communities</h3>
        <p class="text-3xl font-bold text-green-600">{{ totalCommunities }}</p>
      </div>
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Pending Pickups</h3>
        <p class="text-3xl font-bold text-yellow-600">{{ pendingPickups }}</p>
      </div>
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Open Issues</h3>
        <p class="text-3xl font-bold text-red-600">{{ openIssues }}</p>
      </div>
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Recycling Rate</h3>
        <p class="text-3xl font-bold text-indigo-600">{{ recyclingRate }}%</p>
      </div>
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Total Waste Collected</h3>
        <p class="text-3xl font-bold text-purple-600">
          {{ totalWasteCollected }} tons
        </p>
      </div>
    </div>
  `,
})
export class AdminDashboardComponent implements OnInit {
  totalUsers = 0;
  totalCommunities = 0;
  pendingPickups = 0;
  openIssues = 0;
  recyclingRate = 0;
  totalWasteCollected = 0;

  ngOnInit() {
    // In a real application, you would fetch this data from your backend
    this.totalUsers = 1250;
    this.totalCommunities = 15;
    this.pendingPickups = 47;
    this.openIssues = 23;
    this.recyclingRate = 65;
    this.totalWasteCollected = 5280;
  }
}
