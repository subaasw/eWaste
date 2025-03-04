import { Component } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-home",

  imports: [LucideAngularModule],
  template: ` <div
    class="min-h-screen flex flex-col items-center justify-center p-8"
  >
    <h1
      class="text-4xl font-bold mb-12 text-gray-900 text-center animate-fade-in"
    >
      Welcome 👋
    </h1>

    <div class="space-y-6 w-full max-w-md">
      <a
        href="/admin/login"
        class="block hover:scale-105 transition-transform duration-300"
      >
        <div
          class="bg-gradient-to-r from-green-600 to-green-200 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg animate-slide-up"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <lucide-angular
                name="user"
                class="h-6 w-6 text-gray-200 mr-3 animate-pop-in"
              />
              <h2 class="text-xl font-semibold text-gray-100">Admin</h2>
            </div>
            <lucide-angular
              name="chevron-right"
              class="h-6 w-6 text-green-700 mr-3 animate-pop-in"
            />
          </div>
          <p class="mt-2 text-gray-200">Login as super admin.</p>
        </div>
      </a>

      <a
        href="/user/login"
        class="block hover:scale-105 transition-transform duration-300"
      >
        <div
          class="bg-gradient-to-r from-green-600 to-green-200 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg animate-slide-up"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <lucide-angular
                name="user"
                class="h-6 w-6 text-gray-200 mr-3 animate-pop-in"
              />

              <h2 class="text-xl font-semibold text-gray-100">User</h2>
            </div>
            <lucide-angular
              name="chevron-right"
              class="h-6 w-6 text-green-700 mr-3 animate-pop-in"
            />
          </div>
          <p class="mt-2 text-gray-100">Login as community user.</p>
        </div>
      </a>
    </div>
  </div>`,
})
export default class HomeComponent {}
