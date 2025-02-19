import { Component } from "@angular/core";
import { BlogService } from "~/app/services/blog.service";

@Component({
  selector: "app-blog",
  template: `
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">The Latest From Our Blog</h2>
        <div class="grid md:grid-cols-3 gap-8">
          @for (post of blogPosts; track post){
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              [src]="post.image"
              [alt]="post.title"
              class="w-full object-cover h-48"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
              <p class="text-gray-600">{{ post.excerpt }}</p>
              <button class="mt-4 text-green-600 hover:text-green-700">
                Read More →
              </button>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class BlogComponent {
  constructor(private blogService: BlogService) {}

  blogPosts = this.blogService.getBlogPosts();
}
