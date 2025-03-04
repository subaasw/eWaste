import { Component } from "@angular/core";
import { UserDashboardComponent } from "../../components/user/user-dashboard.component";

@Component({
  standalone: true,
  selector: "app-user-dashboard-page",
  imports: [UserDashboardComponent],
  template: `<app-user-dashboard />`,
})
export default class UserDashboardPage {}
