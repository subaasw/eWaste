import { RouteMeta } from "@analogjs/router";
import { Component } from "@angular/core";

// export const routeMeta: RouteMeta = {
//   redirectTo: "/dashboard",
//   pathMatch: "full",
// };

@Component({
  standalone: true,
  selector: "app-admin-main-page",
  template: `<h1>Admin page</h1>`,
})
export default class AdminMainPage {}
