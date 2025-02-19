import { Component } from "@angular/core"

@Component({
  selector: "app-stats",
  template: `
    <section class="bg-green-950 text-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">
          We Only Provide Quality Waste Services
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            @for(stat of stats; track stat){
                <div>
                    <div class="text-4xl font-bold mb-2">{{stat.value}}</div>
                    <div class="text-sm">{{stat.label}}</div>
                </div>
            }
          
        </div>
      </div>
    </section>
  `,
})
export class StatsComponent {
  stats = [
    { value: "62K", label: "Customers Are Happy" },
    { value: "150+", label: "Counties We're Happy" },
    { value: "130", label: "Professional Workers" },
    { value: "32+", label: "Years Of Service" },
  ]
}

