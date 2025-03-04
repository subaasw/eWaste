import { Component } from "@angular/core";
import { SettingsComponent } from "../../components/admin/settings.component";

@Component({
  standalone: true,
  selector: "app-admin-settings-page",
  imports: [SettingsComponent],
  template: `<app-settings />`,
})
export default class AdminSettingsPage {}
