import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-report-issues",
  imports: [FormsModule, CommonModule],
  template: `
    <div class="max-w-4xl mx-auto p-6">
      <h2 class="text-2xl font-bold mb-4">Report an Issue</h2>
      <form (ngSubmit)="onSubmit()" class="space-y-4">
        <div>
          <label for="type" class="block text-sm font-medium text-gray-700">
            Issue Type
          </label>
          <select
            id="type"
            name="type"
            [(ngModel)]="issue.type"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="Missed Pickup">Missed Pickup</option>
            <option value="Overflowing Bin">Overflowing Bin</option>
            <option value="Illegal Dumping">Illegal Dumping</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label
            for="description"
            class="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            [(ngModel)]="issue.description"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Submit Issue
        </button>
      </form>
      <div
        *ngIf="reportSuccess"
        class="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
      >
        Issue reported successfully!
      </div>
    </div>
  `,
})
export class ReportIssuesComponent {
  issue = { type: "", description: "" };
  reportSuccess = false;

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.reportIssue(this.issue).subscribe(
      (response) => {
        console.log("Issue reported:", response);
        this.reportSuccess = true;
        this.issue = { type: "", description: "" };
      },
      (error) => {
        console.error("Error reporting issue:", error);
      }
    );
  }
}
