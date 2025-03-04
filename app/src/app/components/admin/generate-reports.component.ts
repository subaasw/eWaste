import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-generate-reports",
  imports: [CommonModule],
  template: `
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4">Generate Reports</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          (click)="generateReport('waste')"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Waste Collection Report
        </button>
        <button
          (click)="generateReport('recycling')"
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Recycling Report
        </button>
        <button
          (click)="generateReport('issues')"
          class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Issues Report
        </button>
        <button
          (click)="generateReport('community')"
          class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Community Performance Report
        </button>
      </div>
      <div *ngIf="currentReport" class="mt-8">
        <h3 class="text-lg font-semibold mb-2">{{ currentReport.title }}</h3>
        <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
          {{ currentReport.data | json }}
        </pre
        >
      </div>
    </div>
  `,
})
export class GenerateReportsComponent {
  currentReport: any = null;

  generateReport(type: string) {
    // In a real application, you would fetch this data from your backend
    switch (type) {
      case "waste":
        this.currentReport = {
          title: "Waste Collection Report",
          data: {
            totalCollected: "5280 tons",
            averagePerWeek: "132 tons",
            topCommunities: [
              "Green Valley",
              "Eco Heights",
              "Sustainable Hills",
            ],
          },
        };
        break;
      case "recycling":
        this.currentReport = {
          title: "Recycling Report",
          data: {
            recyclingRate: "65%",
            mostRecycledItems: ["Paper", "Plastic", "Glass"],
            improvementFromLastMonth: "5%",
          },
        };
        break;
      case "issues":
        this.currentReport = {
          title: "Issues Report",
          data: {
            totalIssues: 156,
            openIssues: 23,
            averageResolutionTime: "2.3 days",
            mostCommonIssues: [
              "Missed Pickup",
              "Overflowing Bin",
              "Illegal Dumping",
            ],
          },
        };
        break;
      case "community":
        this.currentReport = {
          title: "Community Performance Report",
          data: {
            topPerformingCommunities: [
              "Eco Heights",
              "Green Valley",
              "Sustainable Hills",
            ],
            averageRecyclingRate: "58%",
            communityEngagementScore: "7.8/10",
          },
        };
        break;
    }
  }
}
