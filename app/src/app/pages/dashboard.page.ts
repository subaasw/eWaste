import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UserAuthHeaderComponent } from "../components/header/user-auth-header.component";

@Component({
  standalone: true,
  selector: "app-dashboard-layout",
  imports: [RouterOutlet, UserAuthHeaderComponent],
  template: `
    <app-auth-user-header />
    <router-outlet></router-outlet>
  `,
})
export default class DashboardLayout {}
