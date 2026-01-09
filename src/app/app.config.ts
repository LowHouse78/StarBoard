import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { LIVE_SESSION_SETTINGS_SERVICE } from './services/api/live-session-settings.service.interface';
import { MockLiveSessionSettingsService } from './services/mock-live-session-settings.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    // Provider für LiveSessionSettings - Hier Mock verwenden
    {
      provide: LIVE_SESSION_SETTINGS_SERVICE,
      useClass: MockLiveSessionSettingsService
    }
  ]
};