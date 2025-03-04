import { Component } from "@angular/core";
import { RouteMeta } from "@analogjs/router";
// import { UserDashboardComponent } from "~components/auth/dashboard/dashboard.component";
// import { UserDashboardNewComponent } from "~components/auth/dashboard/dashboard-new.component";

// export const routeMeta: RouteMeta = {
//   redirectTo: "/user/dashboard",
//   pathMatch: "full",
// };

@Component({
  standalone: true,
  selector: "app-user-main-page",
  template: `<h1>User page</h1>`,
})
export default class DashboardPage {}
