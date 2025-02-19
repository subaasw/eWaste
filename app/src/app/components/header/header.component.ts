import { Component } from "@angular/core"
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: "app-header",
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <div class="bg-green-950 text-white py-2">
      <div class="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm">
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-2">
            <lucide-angular name="clock" class="my-icon"></lucide-angular>
            <span>9:00AM - 07:00PM</span>
          </div>
          <div class="flex items-center space-x-2">
            <lucide-angular name="phone" class="my-icon"></lucide-angular>
            <span>+1234567890</span>
          </div>
          <div class="flex items-center space-x-2">
          <lucide-angular name="mail" class="my-icon"></lucide-angular>
            <span>info&#64;gmail.Com</span>
          </div>
          <div class="flex items-center space-x-2">
          <lucide-angular name="map" class="my-icon"></lucide-angular>
            <span>123456 Gyaneshwor, Kathmandu</span>
          </div>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-green-300">Facebook</a>
          <a href="#" class="hover:text-green-300">Twitter</a>
          <a href="#" class="hover:text-green-300">LinkedIn</a>
          <a href="#" class="hover:text-green-300">Instagram</a>
        </div>
      </div>
    </div>
  `,
})

export class HeaderComponent {
}
