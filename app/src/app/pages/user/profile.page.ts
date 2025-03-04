import { Component } from "@angular/core";
import { UserProfileComponent } from "../../components/user/user-profile.component";

@Component({
  selector: "app-user-profile-page",
  imports: [UserProfileComponent],
  template: `<app-user-profile />`,
})
export default class UserProfilePage {}
