import { Component } from "@angular/core";
import { ForgotPasswordComponent } from "../../components/user/forgot-password.component";

@Component({
  selector: "app-user-forgot-password-page",
  imports: [ForgotPasswordComponent],
  template: `<app-forgot-password />`,
})
export default class UserForgotPasswordPage {}
