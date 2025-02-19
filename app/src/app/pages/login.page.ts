import { Component } from '@angular/core';
import { Login } from "../components/login.component";

@Component({
  selector: 'app-login-page',
 imports: [Login],
  template: `
     <app-login></app-login>
  `,
})
export default class LoginPage {
}
