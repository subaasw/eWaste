import { Component } from "@angular/core";
import { AdminLayoutComponent } from "../components/admin/admin-layout.component";

@Component({
  standalone: true,
  selector: "app-admin-layout-page",
  imports: [AdminLayoutComponent],
  template: `<app-admin-layout />`,
})
export default class AdminLayout {}
