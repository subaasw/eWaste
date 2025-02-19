import { Component } from "@angular/core"

@Component({
  selector: "app-navigation",
  template: `
    <nav class="bg-white py-4 shadow-sm">
      <div class="container mx-auto px-4 flex items-center justify-between">
        <a href="/" class="text-2xl font-bold text-green-700">
          eWaste.
        </a>
        <div class="hidden md:flex space-x-8">
            @for(item of navItems; track item){
                <a [href]="item.link">
                    {{item.text}}
                </a>
            }
        </div>
        <button class="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
          Request Pickup
        </button>
      </div>
    </nav>
  `,
})
export class NavigationComponent {
  navItems = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Services", link: "/services" },
    { text: "Company", link: "/company" },
    { text: "Blog", link: "/blog" },
    { text: "Contact", link: "/contact" },
  ]
}
