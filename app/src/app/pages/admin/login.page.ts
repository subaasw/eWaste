import { Component } from "@angular/core";
import { ManageIssuesComponent } from "../../components/admin/manage-issues.component";

@Component({
  standalone: true,
  selector: "app-admin-manage-issues-page",
  imports: [ManageIssuesComponent],
  template: `<app-manage-issues />`,
})
export default class AdminManageIssuesPage {}
