import { Component, type OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-manage-communities",
  imports: [CommonModule],
  template: `
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="p-4 flex justify-between items-center">
        <h2 class="text-xl font-semibold">Manage Communities</h2>
        <button
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add New Community
        </button>
      </div>
      <table class="min-w-full">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 text-left">Name</th>
            <th class="py-2 px-4 text-left">Location</th>
            <th class="py-2 px-4 text-left">Total Users</th>
            <th class="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let community of communities" class="border-t">
            <td class="py-2 px-4">{{ community.name }}</td>
            <td class="py-2 px-4">{{ community.location }}</td>
            <td class="py-2 px-4">{{ community.totalUsers }}</td>
            <td class="py-2 px-4">
              <button class="text-blue-500 hover:text-blue-700 mr-2">
                Edit
              </button>
              <button class="text-red-500 hover:text-red-700">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class ManageCommunitiesComponent implements OnInit {
  communities: any[] = [];

  ngOnInit() {
    // In a real application, you would fetch this data from your backend
    this.communities = [
      { name: "Green Valley", location: "Springfield", totalUsers: 250 },
      { name: "Eco Heights", location: "Shelbyville", totalUsers: 180 },
      { name: "Sustainable Hills", location: "Capital City", totalUsers: 320 },
    ];
  }
}
