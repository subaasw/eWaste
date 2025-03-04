import { Component } from "@angular/core";
import { ManageCommunitiesComponent } from "../../components/admin/manage-communities.component";

@Component({
  standalone: true,
  selector: "app-manage-community-page",
  imports: [ManageCommunitiesComponent],
  template: `<app-manage-communities />`,
})
export default class AdminManageCommunitiesPage {}
