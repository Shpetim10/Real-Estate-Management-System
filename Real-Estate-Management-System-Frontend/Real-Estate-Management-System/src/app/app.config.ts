import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withRouterConfig({}),
      withComponentInputBinding()
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ]
};