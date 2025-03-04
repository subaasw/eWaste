import { Component, type OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-manage-notifications",
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto p-6">
      <h2 class="text-2xl font-bold mb-4">Notifications</h2>
      <div class="space-y-4">
        <div
          *ngFor="let notification of notifications"
          [ngClass]="{
            'bg-gray-100': notification.read,
            'bg-white': !notification.read
          }"
          class="p-4 rounded-md shadow"
        >
          <p [ngClass]="{ 'font-bold': !notification.read }">
            {{ notification.message }}
          </p>
          <button
            *ngIf="!notification.read"
            (click)="markAsRead(notification.id)"
            class="mt-2 text-sm text-green-600 hover:text-green-800"
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
  `,
})
export class ManageNotificationsComponent implements OnInit {
  notifications: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.apiService.getNotifications().subscribe(
      (data) => {
        this.notifications = data;
      },
      (error) => {
        console.error("Error fetching notifications:", error);
      }
    );
  }

  markAsRead(id: number) {
    this.apiService.markNotificationAsRead(id).subscribe(
      () => {
        this.loadNotifications();
      },
      (error) => {
        console.error("Error marking notification as read:", error);
      }
    );
  }
}
