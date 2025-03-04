import { Component } from "@angular/core";
import { GenerateReportsComponent } from "../../components/admin/generate-reports.component";

@Component({
  standalone: true,
  selector: "app-admin-generate-reports-page",
  imports: [GenerateReportsComponent],
  template: `<app-generate-reports />`,
})
export default class AdminGenerateReportsPage {}
