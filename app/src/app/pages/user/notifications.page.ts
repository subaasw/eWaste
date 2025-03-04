import { Component } from "@angular/core";
import { ManageNotificationsComponent } from "../../components/user/manage-notification.component";

@Component({
  standalone: true,
  selector: "app-user-manage-notification-page",
  imports: [ManageNotificationsComponent],
  template: `<app-manage-notifications />`,
})
export default class UserManageNotificationPage {}
