import { Component } from "@angular/core";
import { LoginComponent } from "../../components/user/login.component";

@Component({
  selector: "app-user-login-page",
  imports: [LoginComponent],
  template: `<app-user-login />`,
})
export default class UserLoginPage {}
