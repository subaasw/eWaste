import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-settings",
  imports: [FormsModule],
  template: `
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4">Admin Settings</h2>
      <form (ngSubmit)="onSubmit()" class="space-y-4">
        <div>
          <label for="siteTitle" class="block text-sm font-medium text-gray-700"
            >Site Title</label
          >
          <input
            type="text"
            id="siteTitle"
            name="siteTitle"
            [(ngModel)]="settings.siteTitle"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            for="contactEmail"
            class="block text-sm font-medium text-gray-700"
            >Contact Email</label
          >
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            [(ngModel)]="settings.contactEmail"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            for="maintenanceMode"
            class="block text-sm font-medium text-gray-700"
            >Maintenance Mode</label
          >
          <input
            type="checkbox"
            id="maintenanceMode"
            name="maintenanceMode"
            [(ngModel)]="settings.maintenanceMode"
            class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Settings
        </button>
      </form>
    </div>
  `,
})
export class SettingsComponent {
  settings = {
    siteTitle: "Waste Management System",
    contactEmail: "admin@example.com",
    maintenanceMode: false,
  };

  onSubmit() {
    // In a real application, you would send this data to your backend
    console.log("Settings saved:", this.settings);
    // Implement logic to save settings
  }
}
