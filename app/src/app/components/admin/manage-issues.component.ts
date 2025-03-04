import { Component, type OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-manage-issues",
  imports: [CommonModule],
  template: `
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="p-4">
        <h2 class="text-xl font-semibold">Manage Issues</h2>
      </div>
      <table class="min-w-full">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 text-left">Date</th>
            <th class="py-2 px-4 text-left">User</th>
            <th class="py-2 px-4 text-left">Community</th>
            <th class="py-2 px-4 text-left">Type</th>
            <th class="py-2 px-4 text-left">Status</th>
            <th class="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let issue of issues" class="border-t">
            <td class="py-2 px-4">{{ issue.date }}</td>
            <td class="py-2 px-4">{{ issue.user }}</td>
            <td class="py-2 px-4">{{ issue.community }}</td>
            <td class="py-2 px-4">{{ issue.type }}</td>
            <td class="py-2 px-4">
              <span
                [ngClass]="{
                  'bg-green-100 text-green-800': issue.status === 'Resolved',
                  'bg-yellow-100 text-yellow-800':
                    issue.status === 'In Progress',
                  'bg-red-100 text-red-800': issue.status === 'Open'
                }"
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
              >
                {{ issue.status }}
              </span>
            </td>
            <td class="py-2 px-4">
              <button class="text-blue-500 hover:text-blue-700 mr-2">
                View
              </button>
              <button class="text-green-500 hover:text-green-700">
                Resolve
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class ManageIssuesComponent implements OnInit {
  issues: any[] = [];

  ngOnInit() {
    // In a real application, you would fetch this data from your backend
    this.issues = [
      {
        date: "2023-07-24",
        user: "John Doe",
        community: "Green Valley",
        type: "Missed Pickup",
        status: "Open",
      },
      {
        date: "2023-07-23",
        user: "Jane Smith",
        community: "Eco Heights",
        type: "Overflowing Bin",
        status: "In Progress",
      },
      {
        date: "2023-07-22",
        user: "Bob Johnson",
        community: "Sustainable Hills",
        type: "Illegal Dumping",
        status: "Resolved",
      },
    ];
  }
}
