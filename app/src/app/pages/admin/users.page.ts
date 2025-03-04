import { Component } from "@angular/core";
import { ManageUsersComponent } from "../../components/admin/manage-users.component";

@Component({
  standalone: true,
  selector: "app-manage-users-page",
  imports: [ManageUsersComponent],
  template: `<app-manage-users />`,
})
export default class AdminManageUserPage {}
