import { Component } from "@angular/core";
import { WastePickupsComponent } from "../../components/admin/waste-pickups.component";

@Component({
  standalone: true,
  selector: "app-admin-waste-pickups-page",
  imports: [WastePickupsComponent],
  template: `<app-waste-pickups />`,
})
export default class AdminWastePickupsPage {}
