import { Component } from "@angular/core";
import { ReportIssuesComponent } from "../../components/user/report-issues.component";

@Component({
  selector: "app-user-reports-issues-page",
  imports: [ReportIssuesComponent],
  template: `<app-report-issues />`,
})
export default class UserReportIssuesPage {}
