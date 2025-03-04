import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-user-schedule-pickup",
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-4xl mx-auto p-6">
      <h2 class="text-2xl font-bold mb-4">Schedule Waste Pickup</h2>
      <form (ngSubmit)="onSubmit()" class="space-y-4">
        <div>
          <label for="date" class="block text-sm font-medium text-gray-700">
            Pickup Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            [(ngModel)]="pickup.date"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label for="type" class="block text-sm font-medium text-gray-700">
            Waste Type
          </label>
          <select
            id="type"
            name="type"
            [(ngModel)]="pickup.type"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="General Waste">General Waste</option>
            <option value="Recycling">Recycling</option>
            <option value="Green Waste">Green Waste</option>
          </select>
        </div>
        <button
          type="submit"
          class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Schedule Pickup
        </button>
      </form>
      <div
        *ngIf="scheduleSuccess"
        class="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
      >
        Pickup scheduled successfully!
      </div>
    </div>
  `,
})
export class UserSchedulePickupComponent {
  pickup = { date: "", type: "" };
  scheduleSuccess = false;

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.schedulePickup(this.pickup).subscribe({
      next: (response) => {
        console.log("Pickup scheduled:", response);
        this.scheduleSuccess = true;
        this.pickup = { date: "", type: "" };
      },
      error: (err) => {
        console.error("Error scheduling pickup:", err);
      },
    });
  }
}
