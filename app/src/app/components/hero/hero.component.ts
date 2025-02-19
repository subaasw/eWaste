import { Component } from "@angular/core"

@Component({
  selector: "app-hero",
  template: `
    <section class="relative bg-green-950 text-white">
      <div class="container mx-auto px-4 py-24">
        <div class="max-w-2xl space-y-6">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Waste Management<br />
            Dumpster Rentals<br />
            Garbage Pickup.
          </h1>
          <div class="space-x-4">
            <button class="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors">
              Explore Our Services
            </button>
            <button class="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-green-950 transition-colors">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}

