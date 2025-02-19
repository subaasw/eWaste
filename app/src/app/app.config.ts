import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter, requestContextInterceptor } from '@analogjs/router';
import { LucideAngularModule, Phone, Clock, Mail, Map } from 'lucide-angular';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFileRouter(),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([requestContextInterceptor])
    ),
    importProvidersFrom(LucideAngularModule.pick({ Phone, Clock, Mail, Map }))
  ],
};
