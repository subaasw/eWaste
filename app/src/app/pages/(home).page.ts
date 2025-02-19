import { Component } from "@angular/core";

import { AnalogWelcomeComponent } from "./analog-welcome.component";
import { HeaderComponent } from "~components/header/header.component";
import { NavigationComponent } from "~components/navigation/navigation.component";
import { HeroComponent } from "~components/hero/hero.component";
import { ServicesComponent } from "~components/services/services.component";
import { StatsComponent } from "~components/stats/stats.component";
import { BlogComponent } from "~components/blog/blog.component";
import { FooterComponent } from "~components/footer/footer.component";

@Component({
  selector: "app-home",

  imports: [
    HeaderComponent,
    NavigationComponent,
    HeroComponent,
    ServicesComponent,
    StatsComponent,
    BlogComponent,
    FooterComponent
  ],
  template: `
    <app-header />
    <app-navigation />
    <app-hero />
    <app-services />
    <app-stats />
    <app-blog />
    <app-footer />
  `,
})
export default class HomeComponent {}
