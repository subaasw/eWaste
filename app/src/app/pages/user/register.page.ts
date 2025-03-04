import { Component } from "@angular/core";
import { SignupComponent } from "../../components/user/signup.component";

@Component({
  selector: "app-user-register-page",
  imports: [SignupComponent],
  template: `<app-user-signup-form />`,
})
export default class UserSignupPage {}
