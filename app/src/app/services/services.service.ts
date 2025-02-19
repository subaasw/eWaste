import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  private services = [
    {
      title: "Garbage Pickup",
      description:
        "Regular scheduled pickup services for residential and commercial properties.",
      icon: "garbage.svg",
    },
    {
      title: "Residential Recycling",
      description: "Comprehensive recycling programs for homes and apartments.",
      icon: "recycling.svg",
    },
    {
      title: "Dumpster Rental",
      description:
        "Various sizes of dumpsters available for construction and cleanup projects.",
      icon: "dumpster.svg",
    },
    {
      title: "Secure Destruction",
      description: "Confidential document and data destruction services.",
      icon: "secure.svg",
    },
    {
      title: "Junk Removal",
      description: "Professional removal of unwanted items and debris.",
      icon: "junk.svg",
    },
    {
      title: "Commercial Services",
      description: "Customized waste management solutions for businesses.",
      icon: "commercial.svg",
    },
  ];

  getServices() {
    return this.services;
  }
}
