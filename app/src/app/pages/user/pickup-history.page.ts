import { Component } from "@angular/core";
import { PickupHistoryComponent } from "../../components/user/pickup-history.component";

@Component({
  standalone: true,
  selector: "app-pickup-history-page",
  imports: [PickupHistoryComponent],
  template: `<app-pickup-history />`,
})
export default class UserPickupHistoryPage {}
