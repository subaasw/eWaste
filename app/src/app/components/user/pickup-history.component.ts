import { Component, type OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-pickup-history",
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto p-6">
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-2 px-4 border-b text-left">Date</th>
              <th class="py-2 px-4 border-b text-left">Type</th>
              <th class="py-2 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let pickup of pickups">
              <td class="py-2 px-4 border-b">{{ pickup.date }}</td>
              <td class="py-2 px-4 border-b">{{ pickup.type }}</td>
              <td class="py-2 px-4 border-b">
                <span
                  [ngClass]="{
                    'bg-green-100 text-green-800':
                      pickup.status === 'Completed',
                    'bg-yellow-100 text-yellow-800':
                      pickup.status === 'Scheduled',
                    'bg-red-100 text-red-800': pickup.status === 'Missed'
                  }"
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                >
                  {{ pickup.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class PickupHistoryComponent implements OnInit {
  pickups: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPickupHistory().subscribe(
      (data) => {
        this.pickups = data;
      },
      (error) => {
        console.error("Error fetching pickup history:", error);
      }
    );
  }
}
