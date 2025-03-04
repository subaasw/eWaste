import { Component, type OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-waste-pickups",
  imports: [CommonModule],
  template: `
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="p-4 flex justify-between items-center">
        <h2 class="text-xl font-semibold">Waste Pickups</h2>
        <button
          class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Schedule Pickup
        </button>
      </div>
      <table class="min-w-full">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 text-left">Date</th>
            <th class="py-2 px-4 text-left">Community</th>
            <th class="py-2 px-4 text-left">Type</th>
            <th class="py-2 px-4 text-left">Status</th>
            <th class="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let pickup of pickups" class="border-t">
            <td class="py-2 px-4">{{ pickup.date }}</td>
            <td class="py-2 px-4">{{ pickup.community }}</td>
            <td class="py-2 px-4">{{ pickup.type }}</td>
            <td class="py-2 px-4">
              <span
                [ngClass]="{
                  'bg-green-100 text-green-800': pickup.status === 'Completed',
                  'bg-yellow-100 text-yellow-800':
                    pickup.status === 'Scheduled',
                  'bg-red-100 text-red-800': pickup.status === 'Missed'
                }"
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
              >
                {{ pickup.status }}
              </span>
            </td>
            <td class="py-2 px-4">
              <button class="text-blue-500 hover:text-blue-700 mr-2">
                Edit
              </button>
              <button class="text-red-500 hover:text-red-700">Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class WastePickupsComponent implements OnInit {
  pickups: any[] = [];

  ngOnInit() {
    // In a real application, you would fetch this data from your backend
    this.pickups = [
      {
        date: "2023-07-25",
        community: "Green Valley",
        type: "General Waste",
        status: "Completed",
      },
      {
        date: "2023-07-26",
        community: "Eco Heights",
        type: "Recycling",
        status: "Scheduled",
      },
      {
        date: "2023-07-24",
        community: "Sustainable Hills",
        type: "Green Waste",
        status: "Missed",
      },
    ];
  }
}
