import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class BlogService {
  private blogPosts = [
    {
      title: "How to Reduce Your Carbon Footprint",
      excerpt: "Learn effective strategies for minimizing your environmental impact through proper waste management.",
      image: "/assets/images/blog-1.jpg",
    },
    {
      title: "Recycling Tips for Businesses",
      excerpt: "Discover how your business can implement effective recycling programs.",
      image: "/assets/images/blog-2.jpg",
    },
    {
      title: "The Future of Waste Management",
      excerpt: "Exploring innovative technologies and practices in modern waste management.",
      image: "/assets/images/blog-3.jpg",
    },
  ]

  getBlogPosts() {
    return this.blogPosts
  }
}

