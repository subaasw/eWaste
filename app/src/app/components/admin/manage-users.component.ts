import { Component, type OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-manage-users",
  imports: [CommonModule],
  template: `
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="p-4 flex justify-between items-center">
        <h2 class="text-xl font-semibold">Manage Users</h2>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New User
        </button>
      </div>
      <table class="min-w-full">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 text-left">Name</th>
            <th class="py-2 px-4 text-left">Email</th>
            <th class="py-2 px-4 text-left">Community</th>
            <th class="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users" class="border-t">
            <td class="py-2 px-4">{{ user.name }}</td>
            <td class="py-2 px-4">{{ user.email }}</td>
            <td class="py-2 px-4">{{ user.community }}</td>
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
export class ManageUsersComponent implements OnInit {
  users: any[] = [];

  ngOnInit() {
    // In a real application, you would fetch this data from your backend
    this.users = [
      {
        name: "John Doe",
        email: "john@example.com",
        community: "Green Valley",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        community: "Eco Heights",
      },
      {
        name: "Bob Johnson",
        email: "bob@example.com",
        community: "Sustainable Hills",
      },
    ];
  }
}
