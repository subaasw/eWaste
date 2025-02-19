import { Component } from "@angular/core"
import { ServicesService } from "~/app/services/services.service"

@Component({
  selector: "app-services",
  template: `
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (service of services; track service){
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <img [src]="'/assets/icons/' + service.icon" 
                        [alt]="service.title"
                        class="w-6 h-6 text-green-600">
                    </div>
                    <h3 class="text-xl font-semibold mb-2">{{service.title}}</h3>
                    <p class="text-gray-600 mb-4">{{service.description}}</p>
                    <button class="text-green-600 hover:text-green-700">Learn More →</button>
                </div>
            }
          
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  constructor(private servicesService: ServicesService) {}

  services = this.servicesService.getServices()
}
