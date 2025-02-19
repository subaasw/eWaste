import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-green-950 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">eWaste.</h3>
            <p class="mb-4">Providing quality waste management services for a cleaner, greener future.</p>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-green-300"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="hover:text-green-300"><i class="fab fa-twitter"></i></a>
              <a href="#" class="hover:text-green-300"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="hover:text-green-300"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-green-300">Home</a></li>
              <li><a href="#" class="hover:text-green-300">About Us</a></li>
              <li><a href="#" class="hover:text-green-300">Services</a></li>
              <li><a href="#" class="hover:text-green-300">Blog</a></li>
              <li><a href="#" class="hover:text-green-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-green-300">Garbage Pickup</a></li>
              <li><a href="#" class="hover:text-green-300">Residential Recycling</a></li>
              <li><a href="#" class="hover:text-green-300">Dumpster Rental</a></li>
              <li><a href="#" class="hover:text-green-300">Secure Destruction</a></li>
              <li><a href="#" class="hover:text-green-300">Junk Removal</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
            <ul class="space-y-2">
              <li class="flex items-center">
                <i class="fas fa-map-marker-alt mr-2"></i>
                123456 Locust St, Kansas City, Mo 6542
              </li>
              <li class="flex items-center">
                <i class="fas fa-phone mr-2"></i>
                +1234567890
              </li>
              <li class="flex items-center">
                <i class="fas fa-envelope mr-2"></i>
                info&#64;Gmail.Com
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-green-800 mt-8 pt-8 text-center">
          <p>&copy; {{currentYear}} Waste Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
