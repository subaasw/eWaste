import { Component } from "@angular/core";
import { UserSchedulePickupComponent } from "../../components/user/schedule-pickup.component";

@Component({
  selector: "app-user-schedule-pickup-page",
  imports: [UserSchedulePickupComponent],
  template: `<app-user-schedule-pickup />`,
})
export default class UserSchedulePickup {}
