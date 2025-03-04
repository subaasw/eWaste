import { Component } from "@angular/core";
import { AdminDashboardComponent } from "../../components/admin/admin-dashboard.component";

@Component({
  standalone: true,
  selector: "app-admin-dashboard-page",
  imports: [AdminDashboardComponent],
  template: `<app-admin-dashboard />`,
})
export default class AdminDashboardPage {}
